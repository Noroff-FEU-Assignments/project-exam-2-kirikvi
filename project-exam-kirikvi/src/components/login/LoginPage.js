import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";
import Link from "../forms/Link";

export default function LoginPage() {
    return (
        <>
            <Heading content="Login" />
            <LoginForm />
            <Link link={"/register"} text={"Not registered yet? Click here to register."} />
        </>
    );
}