import React from "react";
import styles from "./Navigation.module.css";

function Navigation(props){
    return (
        <nav className={styles.navigation}>{props.children}</nav>
    )
} 

export default Navigation