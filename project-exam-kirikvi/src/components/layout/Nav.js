import { NavLink } from "react-router-dom";

//ICONS & LOGO
import home from "../../icons/home.png";
import profile from "../../icons/profile.png";
import search from "../../icons/search.png";
import logo from "../../logo/SocializeLogo.png";

function Nav() {
    return (
        <nav>
            <NavLink to="/"><img alt="socialize logo" src={logo}/></NavLink>
            <NavLink to="/postsbyfollowing"><img alt="home icon" src={home}/></NavLink>
            <NavLink to="/userprofile"><img alt="profle icon" src={profile}/></NavLink>
            <NavLink to="/profiles"><img alt="search icon" src={search}/></NavLink>
            <NavLink to="/login">Login </NavLink>
        </nav>
    );
}

export default Nav;