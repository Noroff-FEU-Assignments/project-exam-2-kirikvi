import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormError from "../common/FormError";
import { API_BASE_URL, REGISTER_PATH} from "../../constants/api";
import AuthContext from "../../context/AuthContext";

//Styling
import Button from "../forms/Button";
import FormContainer from "../forms/FormContainer";

const url = API_BASE_URL + REGISTER_PATH;

const schema = yup.object().shape({
  name: yup.string().required("Please enter a username"),
  email: yup.string().required("Please enter your noroff email"),
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
        <FormContainer>
            <h2>Register to start socializing</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                {registerError && <FormError>{registerError}</FormError>}
                
                <fieldset disabled={submitting}>
                    <div>
                        <label for="name">Username</label>
                        {errors.name && <FormError>{errors.name.message}</FormError>}
                        <input name="name" type="text" {...register("name")} />
                    </div>

                    <div>
                        <label for="email">E-mail</label>
                        {errors.email && <FormError>{errors.email.message}</FormError>}
                        <input name="email" type="email" {...register("email")} />
                    </div>

                    <div>
                        <label for="password">Password</label>
                        {errors.password && <FormError>{errors.password.message}</FormError>}
                        <input name="password" type="password" {...register("password")} />
                    </div>

                    <div>
                        <label for="avatar">Avatar URL</label>
                        <input name="avatar" type="text" {...register("avatar")} />
                    </div>

                    <div>
                        <label for="banner">Banner URL</label>
                        <input name="banner" type="text" {...register("banner")} />
                    </div>

                    <Button>{submitting ? "Registers..." : "Register"}</Button>  
                </fieldset>    
            </form>
        </FormContainer>
    );
}