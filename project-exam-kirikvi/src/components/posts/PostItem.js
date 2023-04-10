import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ReactToPost from "./postactions/ReactToPost";
import PostContainer from "./postcontent/PostContainer";
import PostHeader from "./postcontent/PostHeader";

export default function PostItem({ id, title, media, created, author, body, comments, reactions }) {

    if (!author.avatar) {
        author.avatar = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png";
    }

    return (
        <NavLink to={`/posts/${id}`}>
            <PostContainer>
                <hr></hr>
                <PostHeader>
                    <img className="avatar" src={author.avatar}></img>    

                    <div>
                        <h2>{author.name}</h2>
                        <small>{created}</small>
                    </div>   
                </PostHeader>
                <h3>{title}</h3>
                <p>{body}</p>
                <img src={media}></img>
                
                <hr></hr>
                <ReactToPost />
                <hr></hr>
                
                <p>{reactions.length} reactions</p>
                <p>{comments.body}</p>
            </PostContainer>
            
        </NavLink>
    );

}

PostItem.propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
};