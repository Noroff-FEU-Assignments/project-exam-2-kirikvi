import PropTypes from "prop-types";

export default function CommentItem({ created, author, body }) {

    if (!author.avatar) {
        author.avatar = "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80";
    }

    return (
        <>
        <div>
            <div>
                <img src={author.avatar}></img>
                <h4>{author.name}</h4>
                <small>{created}</small>
            </div>
            <p>{body}</p>
        </div> 
        </>
    );

}

CommentItem.propTypes = {
        body: PropTypes.string.isRequired,
};