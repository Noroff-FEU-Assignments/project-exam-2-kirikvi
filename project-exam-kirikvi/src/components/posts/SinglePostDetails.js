import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL, POSTS_PATH } from "../../constants/api";
import useAxios from "../../hooks/useAxios";
import UpdatePost from "./postactions/UpdatePost";
//import ReactButton from "./postactions/ReactToPost";
import CommentOnPost from "./postactions/CommentOnPost";
import PostContainer from "./postcontent/PostContainer";
import PostHeader from "./postcontent/PostHeader";
import ReactToPost from "./postactions/ReactToPost";

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
                console.log(response.data);
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
            <PostContainer>
                <hr></hr>
                <PostHeader>
                    <img className="avatar" src={post.author.avatar} alt="avatar"></img>    

                    <div>
                        <h2>{post.author.name}</h2>
                        <small>{post.created}</small>
                    </div>   
                </PostHeader>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <img src={post.media} alt={post.media}></img>
        
                <ReactToPost />
                <p>{post.reactions.length} likes</p>            
                
                <div>
                    <div>
                        <img src={post.comments[0].author.avatar}></img>
                        <h4>{post.comments[0].author.name}</h4>
                    </div>
                    <p>{post.comments[0].body}</p>
                </div>
            </PostContainer>

            <hr></hr>

            <CommentOnPost />
            
            <UpdatePost />
        </div> 
    );
}