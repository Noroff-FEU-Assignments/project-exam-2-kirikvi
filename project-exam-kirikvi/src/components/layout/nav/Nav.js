import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import Navigation from "./Navigation";
import ProfileImage from "./ProfileImage";
import Logo from "./Logo";

//ICONS & LOGO
import home from "../../../icons/home.png";
import profile from "../../../icons/profile.png";


function Nav() {
    const [auth, setAuth] = useContext(AuthContext);

    const navigate = useNavigate();

    function logout() {
        setAuth(null);
        navigate("/login");
    }

    return (
        <Navigation>
            <Logo />
             {auth ? (
                <>
                    <NavLink to="/postsbyfollowing"><img alt="home icon" src={home}/></NavLink>
                    <NavLink to="/profiles"><img alt="profile icon" src={profile}/></NavLink>
                    
                    <NavLink to="/userprofile">
                        <ProfileImage />
                    </NavLink>
                    <button className="logoutButton" onClick={logout}>Log out</button>
                </>
             ) : (
                <>
                    <NavLink to="/register">Register </NavLink>
                    <NavLink to="/login">Login </NavLink>
                </>  
             )}
        </Navigation>
    );
}

export default Nav;