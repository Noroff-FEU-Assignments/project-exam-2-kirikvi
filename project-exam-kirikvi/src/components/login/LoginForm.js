import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { API_BASE_URL, LOGIN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import Button from "../forms/Button";

const url = API_BASE_URL + LOGIN_PATH;

const schema = yup.object().shape({
    email: yup.string().required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
    const [submitting, setSubmitting] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const [auth, setAuth] = useContext(AuthContext);

    async function onSubmit(data) {
        setSubmitting(true);
        setLoginError(null);

        //console.log(data);

        try {
            const response = await axios.post(url, data);
            console.log("response", response.data);
            setAuth(response.data);
            navigate("/");
        } catch (error) {
            console.log("error", error);
            setLoginError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                {loginError && <FormError>{loginError}</FormError>}

                <fieldset disabled={submitting}>
                    
                    <div>
                        <label>Email</label>
                        <input {...register("email")} />
                        {errors.email && <FormError>{errors.email.message}</FormError>}
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password" {...register("password")} />
                        {errors.password && <FormError>{errors.password.message}</FormError>}
                    </div>

                    <Button>{submitting ? "Logging in..." : "Login"}</Button>    
                </fieldset>    
            </form>
        </>
    )
}