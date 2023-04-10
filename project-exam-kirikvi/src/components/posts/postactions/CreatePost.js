import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import { API_BASE_URL, POSTS_PATH } from "../../../constants/api";
import useAxios from "../../../hooks/useAxios";
import Button from "../../forms/Button";
//import Input from "../../forms/Input";

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

    async function onSubmit(data) {
        setSubmitting(true);
        setError(null);

        if(data.tags === "") {
            data.tags = [];
        }
        
        try{
            const response = await http.post(url, data);
            console.log("response", response.data);
            //refresh the page
            navigate(0);
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
                        <input type="text" {...register("title")} />
                        {errors.title && <FormError>{errors.title.message}</FormError>}
                    </div>

                    <div>
                        <label>Body</label>
                        <textarea type="text" {...register("body")} />
                    </div>

                    <div>
                        <label>Add media url</label>
                        <input type="text" {...register("media")} />
                    </div>

                    <Button>{submitting ? "Publishing..." : "Publish"}</Button>    
                </fieldset>    
            </form>
        </>
    );
}
