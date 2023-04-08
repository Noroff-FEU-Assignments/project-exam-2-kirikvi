import React from "react";
import styles from "./Banner.module.css";

export default function Banner(props) {
    return (
        <div className={styles.banner}>{props.children}</div>
    )
}