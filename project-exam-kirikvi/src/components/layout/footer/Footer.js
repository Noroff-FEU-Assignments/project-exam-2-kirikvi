import React from "react";
import styles from "./Footer.module.css";
import logo from "../../../logo/SocializeLogo.png";
import smallLogo from "../../../logo/SocializeFavicon.png";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <img className={styles.logo} src={logo} alt="Socialize logo"></img>
            <img className={styles.smallLogo} src={smallLogo} alt="Socialize logo"></img>
            <p>Noroff Project Exam 2</p>
            <p>© Kiri Kvistnes 2023</p>
        </div>
    )
}