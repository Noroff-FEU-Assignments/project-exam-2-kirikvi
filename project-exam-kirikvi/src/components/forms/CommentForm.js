import React from "react";
import styles from "./CommentForm.module.css";

export default function CommentForm(props) {
    return <form className={styles.commentForm}>{props.children}</form>
}