import React from "react";
import styles from "./FollowButton.module.css";

export default function FollowButton(props) {
    return (
        <button className={styles.followButton}>{props.children}</button>
    )
}