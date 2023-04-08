import React from "react";
import styles from "./Avatar.module.css";

export default function Avatar(props) {
    return (
        <div className={styles.avatar}>{props.children}</div>
    )
}