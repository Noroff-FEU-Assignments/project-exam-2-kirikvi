import React from "react";
import styles from "./LogoutButton.module.css";

export default function LogoutButton(props) {
    return (
        <button className={styles.logoutButton}>{props.children}</button>
    )
}