import React from "react";
import styles from "./ProfileContainer.module.css";

export default function ProfileContainer(props) {
    return ( 
        <div className={styles.profileContainer}>{props.children}</div>
    )
}