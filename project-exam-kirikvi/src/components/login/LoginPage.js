import Heading from "../layout/Heading";
import LoginForm2 from "./LoginForm2";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
    return (
        <>
            <Heading content="Login" />
            <LoginForm2 />
            <NavLink to={"/register"}><p>Not registered yet? Click here to register.</p> </NavLink>
        </>
    );
}