import React from "react";
import styles from "./ProfileImage.module.css";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";

function ProfileImage(){
    const [auth, setAuth] = useContext(AuthContext);

    return (
        <img alt="profle" className={styles.profileImage} src={auth.avatar}/>
    )
} 

export default ProfileImage