import React from "react";
import styles from "./CommentContainer.module.css";

export default function CommentContainer(props) {
    return (
        <div className={styles.commentContainer}>{props.children}</div>
    )
}