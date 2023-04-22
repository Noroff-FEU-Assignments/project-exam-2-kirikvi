import React from "react";
import styles from "./Logo.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../../logo/SocializeLogo.png";
import smallLogo from "../../../logo/SocializeFavicon.png";

function Logo(){
    return (
        <>
            <NavLink to="/" className={styles.logo}><img alt="socialize logo" src={logo}/></NavLink>
            <NavLink to="/" className={styles.smallLogo}><img alt="socialize logo" src={smallLogo}/></NavLink>
        </>
    )
} 

export default Logo