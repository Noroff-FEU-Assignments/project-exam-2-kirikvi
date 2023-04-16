import React from "react";
import styles from "./DeleteButton.module.css";

export default function DeleteButton(props) {
    return (
        <div className={styles.deleteButton}>{props.children}</div>
    )
}