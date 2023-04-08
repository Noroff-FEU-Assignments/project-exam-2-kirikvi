import Heading from "../layout/Heading";
import RegisterForm from "./RegisterForm";
import { NavLink } from "react-router-dom";

export default function RegisterPage() {
    return (
    <>
        <Heading content="Register" />
        <RegisterForm />
        <NavLink to={"/login"}><p>Already registered? Click here to log in.</p> </NavLink>
    </>
    );
}