import React from "react";
import styles from "./CommentForm.module.css";

export default function CommentForm(props) {
    return <div className={styles.commentForm}>{props.children}</div>
}