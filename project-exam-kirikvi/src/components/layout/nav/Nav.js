import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import Navigation from "./Navigation";
import ProfileImage from "./ProfileImage";
import LogoutButton from "../../login/LogoutButton";

//ICONS & LOGO
import home from "../../../icons/home.png";
import profile from "../../../icons/profile.png";
import logo from "../../../logo/SocializeLogo.png";

function Nav() {
    const [auth, setAuth] = useContext(AuthContext);

    const navigate = useNavigate();

    function logout() {
        setAuth(null);
        navigate("/login");
    }

    return (
        <Navigation>
            <NavLink to="/"><img alt="socialize logo" src={logo}/></NavLink>
             {auth ? (
                <>
                    <NavLink to="/postsbyfollowing"><img alt="home icon" src={home}/></NavLink>
                    <NavLink to="/profiles"><img alt="profile icon" src={profile}/></NavLink>
                    
                    <NavLink to="/userprofile">
                        <ProfileImage />
                    </NavLink>
                    <LogoutButton onClick={logout}>Log out</LogoutButton>
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