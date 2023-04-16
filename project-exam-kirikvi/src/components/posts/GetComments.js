import { useState, useEffect } from "react";
import { API_BASE_URL, POSTS_PATH } from "../../constants/api";
import useAxios from "../../hooks/useAxios";
import CommentItem from "./PostItem";
import { useParams } from "react-router-dom";

export default function GetComments() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();

    const http = useAxios();

    const postURL = API_BASE_URL + POSTS_PATH + "/" + id + "?_author=true&_comments=true&_reactions=true";
    
    useEffect(function () {
        async function getPosts() {
            try {
                const response = await http.get(postURL);
                setComments(response.data);
                console.log(response.data);
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        getPosts();
    }, []);

    if (loading) {
        return <div>Loading comments...</div>;
    }    

    if (error) {
        return <div>Error: An error occured</div>;
    }

    console.log(comments);

    return (
        <div>
            {comments.comments.map(function (comment) {
               const 
                    { body, 
                    created, 
                    author, 
                    } = comment;
               return <CommentItem key={id} body={body} created={created} author={author}/>;
            })}
        </div>
    );
}