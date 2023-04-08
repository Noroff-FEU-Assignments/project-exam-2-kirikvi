import React from "react";
import styles from "./ProfileInfoContainer.module.css";

export default function ProfileInfoContainer(props) {
    return ( 
        <div className={styles.profileInfoContainer}>{props.children}</div>
    )
}