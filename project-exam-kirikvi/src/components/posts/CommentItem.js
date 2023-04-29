import PropTypes from "prop-types";
import CommentContainer from "./postcontent/CommentContainer";
import { NavLink } from "react-router-dom";
export default function CommentItem({ created, author, body }) {

    if (!author.avatar) {
        author.avatar = "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80";
    }

    //Get the date and time from the "created" string
    let date = created.slice(0,10);
    let time = created.slice(11,16);

    return (
        <>
        <CommentContainer>
            <NavLink to={`/profiles/${author.name}`}>
                <div>
                    <img src={author.avatar}></img>  
                    <div>
                        <h4>{author.name}</h4>
                        <small>{date} @ {time}</small>
                    </div>
                </div>
            </NavLink>
            <p>{body}</p>
        </CommentContainer> 
        </>
    );

}

CommentItem.propTypes = {
        body: PropTypes.string.isRequired,
};