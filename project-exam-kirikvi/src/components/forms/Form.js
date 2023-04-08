import React from "react";
import styles from "./Form.module.css";

export default function Form(props) {
    return <form className={styles.form}>{props.children}</form>
}