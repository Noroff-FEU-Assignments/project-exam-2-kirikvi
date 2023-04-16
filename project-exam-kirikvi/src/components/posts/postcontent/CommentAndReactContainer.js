import React from "react";
import styles from "./CommentAndReactContainer.module.css";

export default function CommentAndReactContainer(props) {
    return (
        <div className={styles.commentAndReactContainer}>{props.children}</div>
    )
}