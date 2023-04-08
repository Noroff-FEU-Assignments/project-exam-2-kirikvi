import { useState, useEffect } from "react";
import { API_BASE_URL, POSTS_PATH } from "../../constants/api";
import useAxios from "../../hooks/useAxios";
import PostItem from "./PostItem";

export default function PostsByFollowing() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const http = useAxios();
    const postsURL = API_BASE_URL + POSTS_PATH + "/following";
    
    useEffect(function () {
        async function getPosts() {
            try {
                const response = await http.get(postsURL);
                console.log("response", response.data);
                setPosts(response.data);
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        getPosts();
    }, []);

    if (loading) {
        return <div>Loading posts...</div>;
    }    

    if (error) {
        return <div>Error: An error occured</div>;
    }

    return (
        <div>
            {posts.map(function (post) {
               const { id, title, media, created, _author } = post;
               return <PostItem key={id} id={id} created={created} author={_author} title={title} media={media}/>;
            })}
        </div>
    );
}