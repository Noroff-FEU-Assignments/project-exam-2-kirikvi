import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import PostContainer from "./postcontent/PostContainer";
import PostHeader from "./postcontent/PostHeader";
import CommentAndReactContainer from "./postcontent/CommentAndReactContainer";
export default function PostItem({ id, title, media, created, author, body, comments, reactions }) {

    if (!author.avatar) {
        author.avatar = "https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg";
    }

    //Get the date and time from the "created" string
    let date = created.slice(0,10);
    let time = created.slice(11,16);

    //distinction between singular "like" and plural "likes"
    let likes = reactions.length;
    let likesAmount = "";

    if(likes === 1) {
        likesAmount = likes + " like";
    } else {
        likesAmount = likes + " likes";
    }

    //distinction between singular "comment" and plural "comments"
    let comment = comments.length;
    let commentsAmount = "";

    if(comment === 1) {
        commentsAmount = comment + " comment";
    } else {
        commentsAmount = comment + " comments";
    }

    return (
        <>
            <PostContainer>
                <NavLink to={`/profiles/${author.name}`}>
                <PostHeader>
                    <img className="avatar" src={author.avatar} alt="avatar"></img>    

                    <div>
                        <h2>{author.name}</h2>
                        <small>{date} @ {time} </small>
                    </div>   
                </PostHeader>
                </NavLink>

                <NavLink to={`/posts/${id}`}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <img src={media} alt={media}></img>
                </NavLink>
                
                <CommentAndReactContainer>    
                    <p>{likesAmount}</p>               
                    <p>{commentsAmount}</p>
                </CommentAndReactContainer>
            </PostContainer>
        </>    
        
    );

}

PostItem.propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
};