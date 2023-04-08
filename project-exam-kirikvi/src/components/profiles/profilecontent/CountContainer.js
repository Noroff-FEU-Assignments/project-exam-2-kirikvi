import React from "react";
import styles from "./CountContainer.module.css";

export default function CountContainer(props) {
    return (
        <div className={styles.countContainer}>{props.children}</div>
    )
}