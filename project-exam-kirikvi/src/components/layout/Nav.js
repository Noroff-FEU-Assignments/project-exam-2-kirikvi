import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

//ICONS & LOGO
import home from "../../icons/home.png";
import profile from "../../icons/profile.png";
import search from "../../icons/search.png";
import logo from "../../logo/SocializeLogo.png";


function Nav() {
    const [auth, setAuth] = useContext(AuthContext);

    const navigate = useNavigate();

    function logout() {
        setAuth(null);
        navigate("/login");
    }

    return (
        <nav>
            <NavLink to="/"><img alt="socialize logo" src={logo}/></NavLink>
             {auth ? (
                <>
                    <NavLink to="/postsbyfollowing"><img alt="home icon" src={home}/></NavLink>
                    <NavLink to="/userprofile"><img alt="profle icon" src={profile}/></NavLink>
                    <NavLink to="/profiles"><img alt="search icon" src={search}/></NavLink>
                    <button onClick={logout}>Log out</button>
                </>
             ) : (
                <>
                    <NavLink to="/register">Register </NavLink>
                    <NavLink to="/login">Login </NavLink>
                </>  
             )}
        </nav>
    );
}

export default Nav;