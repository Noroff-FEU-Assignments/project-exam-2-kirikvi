import React from "react";
import styles from "./PostHeader.module.css";

export default function PostHeader(props){
    return (
        <div className={styles.postHeader}>{props.children}</div>
    )
}