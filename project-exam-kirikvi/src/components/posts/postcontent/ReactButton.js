import React from "react";
import styles from "./ReactButton.module.css";

export default function ReactButton(props) {
    return (
        <button className={styles.reactButton}>{props.children}</button>
    )
}