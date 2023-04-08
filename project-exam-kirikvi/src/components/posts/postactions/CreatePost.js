import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import { API_BASE_URL, POSTS_PATH } from "../../../constants/api";
import AuthContext from "../../../context/AuthContext";
import useAxios from "../../../hooks/useAxios";
import Button from "../../forms/Button";

const schema = yup.object().shape({
    title: yup.string().required("A title is required"),
});

export default function CreatePost() {
    const [submitting, setSubmitting] = useState(false);
    const [creationError, setError] = useState(null);

    const http = useAxios();
    const navigate = useNavigate();

    const url = API_BASE_URL + POSTS_PATH;
      
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });   
    
    const [auth, setAuth] = useContext(AuthContext);

    async function onSubmit(data) {
        setSubmitting(true);
        setError(null);

        if(data.tags === "") {
            data.tags = [];
        }
        
        try{
            const response = await http.post(url, data);
            console.log("response", response.data);
            setAuth(response.data);
            navigate("/");
        } catch (error) {
            console.log("error", error.message);
            setError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Create post</h3>

                {submitting && <div>The post was created</div>}    

                {creationError && <FormError>{creationError}</FormError>}
                
                <fieldset disabled={submitting}>
                    <div>
                        <label>Title</label>
                        <input type="text" className="bg-light" {...register("title")} />
                        {errors.title && <FormError>{errors.title.message}</FormError>}
                    </div>

                    <div>
                        <label>Body</label>
                        <textarea type="text" className="bg-light" {...register("body")} />
                    </div>

                    <div>
                        <label>Add media</label>
                        <input type="text" className="bg-light" {...register("media")} />
                    </div>

                    <Button className="bg-dark p-2 text-white rounded">{submitting ? "Publishing..." : "Publish"}</Button>    
                </fieldset>    
            </form>
        </>
    );
}