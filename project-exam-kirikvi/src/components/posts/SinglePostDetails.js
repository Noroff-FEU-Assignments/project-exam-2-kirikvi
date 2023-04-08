import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL, POSTS_PATH } from "../../constants/api";
import useAxios from "../../hooks/useAxios";
import UpdatePost from "./postactions/UpdatePost";
import Heading from "../layout/Heading";
import ReactButton from "./postactions/ReactToPost";

export default function SinglePostDetails() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let history = useNavigate();

    const { id } = useParams();

    if (!id) {
        history("/");
    }

    const http = useAxios();
    const postURL = API_BASE_URL + POSTS_PATH + "/" + id + "?_author=true&_comments=true&_reactions=true";
    
    useEffect(function () {
        async function getPost() {
            try {
                const response = await http.get(postURL);
                setPost(response.data);
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        getPost();
    }, []);

    if (loading) {
        return <div>Loading post...</div>;
    }    

    if (error) {
        return <div>Error: An error occured</div>;
    }

    return (
        <div>
            <p>{post.author.name}</p>
            <Heading title={post.title}/>
            <p>{post.body}</p>
            <img src={post.media}></img>
            <ReactButton />
            <p>{post.reactions.length}</p>
            <p>{post.comments}</p>

            <hr></hr>
            
            <UpdatePost />
        </div> 
    );
}