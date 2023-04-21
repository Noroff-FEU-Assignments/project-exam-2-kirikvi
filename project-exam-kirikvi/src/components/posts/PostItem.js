import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ReactToPost from "./postactions/ReactToPost";
import PostContainer from "./postcontent/PostContainer";
import PostHeader from "./postcontent/PostHeader";
import CommentAndReactContainer from "./postcontent/CommentAndReactContainer";
export default function PostItem({ id, title, media, created, author, body, comments, reactions }) {

    if (!author.avatar) {
        author.avatar = "https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg";
    }

    return (
        <>
            <PostContainer>
                <NavLink to={`/profiles/${author.name}`}>
                <PostHeader>
                    <img className="avatar" src={author.avatar} alt="avatar"></img>    

                    <div>
                        <h2>{author.name}</h2>
                        <small>{created}</small>
                    </div>   
                </PostHeader>
                </NavLink>

                <NavLink to={`/posts/${id}`}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <img src={media} alt={media}></img>
                </NavLink>
                
                <CommentAndReactContainer>    
                    <ReactToPost />
                    <p>{reactions.length} likes</p>               
                    <p>{comments.length} comments</p>
                </CommentAndReactContainer>
            </PostContainer>
        </>    
        
    );

}

PostItem.propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
};