import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { API_BASE_URL, POSTS_PATH } from "../../constants/api";
import useAxios from "../../hooks/useAxios";
import CommentOnPost from "./postactions/CommentOnPost";
import PostContainer from "./postcontent/PostContainer";
import PostHeader from "./postcontent/PostHeader";
import ReactToPost from "./postactions/ReactToPost";
import GetComments from "./GetComments";
import CommentAndReactContainer from "./postcontent/CommentAndReactContainer";
import EditPostDropdown from "./postactions/EditPostDropdown";
import AuthContext from "../../context/AuthContext";
import ReturnButton from "../returnbutton/ReturnButton";

export default function SinglePostDetails() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [auth, setAuth] = useContext(AuthContext);

    // Get the username for the logged in user.
    const username = auth.name;

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

    //Get the date and time from the "created" string
    let date = post.created.slice(0,10);
    let time = post.created.slice(11,16);

    //Display this avatar if the author doesn't have an avatar.
    if (!post.author.avatar) {
        post.author.avatar = "https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg";
    }

     //distinction between singular "like" and plural "likes"
     let likes = post.reactions.length;
     let likesAmount = "";
 
     if(likes === 1) {
         likesAmount = likes + " like";
     } else {
         likesAmount = likes + " likes";
     }
 
     //distinction between singular "comment" and plural "comments"
     let comment = post.comments.length;
     let commentsAmount = "";
 
     if(comment === 1) {
         commentsAmount = comment + " comment";
     } else {
         commentsAmount = comment + " comments";
     }

    //if the logged in user is not the author of the post, exclude the EditPostDropdown
    if(username !== post.author.name) {
        return (
            <div>
                <PostContainer>
                    <ReturnButton />
                    <NavLink to={`/profiles/${post.author.name}`}>
                        <PostHeader>
                            <img className="avatar" src={post.author.avatar} alt="avatar"></img>    
    
                            <div>
                                <h2>{post.author.name}</h2>
                                <small>{date} @ {time}</small>
                            </div>   
                        </PostHeader>
                    </NavLink>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <img src={post.media} alt={post.media}></img>
                
                    <CommentAndReactContainer>
                        <ReactToPost />
                        <p>{likesAmount}</p>
                        <p>{commentsAmount}</p>
                    </CommentAndReactContainer>            
                    
                </PostContainer>
    
                <hr></hr>
                <GetComments />
    
                <CommentOnPost />    
            </div> 
        );
    } else {
        return (
            <div>
                <PostContainer>
                    <NavLink to={`/profiles/${post.author.name}`}>
                        <PostHeader>
                            <img className="avatar" src={post.author.avatar} alt="avatar"></img>    
    
                            <div>
                                <h2>{post.author.name}</h2>
                                <small>{date} @ {time}</small>
                            </div>   
                        </PostHeader>
                    </NavLink>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <img src={post.media} alt={post.media}></img>
    
                    <EditPostDropdown />
            
                    <CommentAndReactContainer>
                        <ReactToPost />
                        <p>{likesAmount}</p>
                        <p>{commentsAmount}</p>
                    </CommentAndReactContainer>            
                    
                </PostContainer>
    
                <hr></hr>
                <GetComments />
    
                <CommentOnPost />
   
            </div> 
        );
    }

   
}