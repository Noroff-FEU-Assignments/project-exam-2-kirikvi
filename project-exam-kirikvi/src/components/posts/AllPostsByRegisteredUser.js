import { useState, useEffect } from "react";
import { API_BASE_URL, PROFILES_PATH } from "../../constants/api";
import useAxios from "../../hooks/useAxios";
import PostItem from "./PostItem";

export default function AllPostsByRegisteredUser() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const http = useAxios();
    const postsURL = API_BASE_URL + PROFILES_PATH + "/kiri_kvistnes/posts?_author=true&_comments=true&_reactions=true";

    useEffect(function () {
        async function getPosts() {
            try {
                const response = await http.get(postsURL);
                console.log(response.data);
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
               const 
                    { id, 
                    title, 
                    body, 
                    media, 
                    created, 
                    author, 
                    comments,
                    reactions,
                    updated } = post;
               return <PostItem key={id} 
                        id={id} 
                        comments={comments} 
                        reactions={reactions} 
                        body={body} 
                        created={created} 
                        author={author} 
                        title={title} 
                        media={media} 
                        updated={updated}/>;
            })}
        </div>
    );
}