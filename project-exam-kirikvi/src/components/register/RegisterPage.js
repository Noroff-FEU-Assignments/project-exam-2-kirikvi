import Heading from "../layout/Heading";
import RegisterForm from "./RegisterForm";
import Link from "../forms/Link";

export default function RegisterPage() {
    return (
    <>
        <Heading content="Register" />
        <RegisterForm />
        <Link link={"/login"} text={"Already registered? Click here login."} />
    </>
    );
}