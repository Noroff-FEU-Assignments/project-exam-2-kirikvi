import React from "react";
import styles from "./FormContainer.module.css";

export default function FormContainer(props) {
    return <div className={styles.formContainer}>{props.children}</div>
}