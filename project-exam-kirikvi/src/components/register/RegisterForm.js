import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormError from "../common/FormError";
import { API_BASE_URL, REGISTER_PATH} from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import Button from "../forms/Button";
//import Form from "../forms/Form";
//import Input from "../forms/Input";

const url = API_BASE_URL + REGISTER_PATH;

const schema = yup.object().shape({
  name: yup.string().required("Please enter a username"),
  email: yup.string().required("Please enter your email"),
  password: yup.string().required("Please enter your password").min(8, "Must be at least 8 characters"),
  avatar: yup.string().notRequired(),
  banner: yup.string().notRequired(),
});

export default function RegisterForm() {
    const [submitting, setSubmitting] = useState(false);
    const [registerError, setRegisterError] = useState(null);
      
    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });   
    
    const [auth, setAuth] = useContext(AuthContext);

    async function onSubmit(data) {
        setSubmitting(true);
        setRegisterError(null);
        
        try {
            const response = await axios.post(url, data);
            setAuth(response.data);
            navigate("/login");
        } catch(error) {
            setRegisterError(error.toString());
        } finally {
          setSubmitting(false);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                {registerError && <FormError>{registerError}</FormError>}
                
                <fieldset disabled={submitting}>
                    <div>
                        <label>Username</label>
                        <input type="text" {...register("name")} />
                        {errors.name && <FormError>{errors.name.message}</FormError>}
                    </div>

                    <div>
                        <label>E-mail</label>
                        <input type="email" {...register("email")} />
                        {errors.email && <FormError>{errors.email.message}</FormError>}
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password" {...register("password")} />
                        {errors.password && <FormError>{errors.password.message}</FormError>}
                    </div>

                    <div>
                        <label>Avatar URL</label>
                        <input type="text" {...register("avatar")} />
                    </div>

                    <div>
                        <label>Banner URL</label>
                        <input type="text" {...register("banner")} />
                    </div>

                    <Button>{submitting ? "Registers..." : "Register"}</Button>  
                </fieldset>    
            </form>
        </>
    );
}