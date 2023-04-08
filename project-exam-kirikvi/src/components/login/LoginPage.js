import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
    return (
        <>
            <Heading content="Login" />
            <LoginForm />
            <NavLink to={"/register"}><p>Not registered yet? Click here to register.</p> </NavLink>
        </>
    );
}