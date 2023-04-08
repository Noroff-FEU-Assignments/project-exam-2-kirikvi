import React from "react";
import styles from "./PostContainer.module.css";

export default function PostContainer(props){
    return (
        <div className={styles.postContainer}>{props.children}</div>
    )
}