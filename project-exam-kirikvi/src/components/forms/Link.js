import React from "react";
import styles from "./Link.module.css";
import { NavLink } from "react-router-dom";

export default function Link(props) {
    return (
        <NavLink className={styles.link} to={props.link}>
            <p>{props.text}</p>
        </NavLink>
    )
}