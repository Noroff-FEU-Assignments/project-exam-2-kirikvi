import { useState, useContext, useEffect } from "react";
import { get, useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "../../common/FormError";
import { API_BASE_URL, POSTS_PATH } from "../../../constants/api";
import AuthContext from "../../../context/AuthContext";
import useAxios from "../../../hooks/useAxios";
import Heading from "../../layout/Heading";
import DeletePostButton from "./DeletePost";

const schema = yup.object().shape({
    title: yup.string().required("A title is required"),
});

export default function UpdatePost() {
    const [post, setPost] = useState(null);
    const [updated, setUpdated] = useState(false);
    const [fetchingPost, setFetchingPost] = useState(true);
    const [updatingPost, setUpdatingPost] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const [updateError, setUpdateError] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });  

    const { id } = useParams();

    const http = useAxios();

    const postURL = API_BASE_URL + POSTS_PATH + "/" + id;
    
    const [auth, setAuth] = useContext(AuthContext);

    useEffect(
        function() {
            async function getPost() {
                try{
                    const response = await http.get(postURL);
                    console.log("response", response.data);
                    setPost(response.data);
                } catch (error) {
                    console.log(error);
                    setFetchError(error.toString());
                } finally {
                    setFetchingPost(false);
                }
            }
            getPost();
        },
        []
    );

    async function onSubmit(data) {
        setUpdatingPost(true);
        setUpdateError(null);
        setUpdated(false);

        console.log(data);

        if(data.tags === "") {
            data.tags = [];
        }
        
        try{
            const response = await http.put(postURL, data);
            console.log("response", response.data);
            setAuth(response.data);
            setUpdated(true);
        } catch (error) {
            console.log("error", error.message);
            setUpdateError(error.toString());
        } finally {
            setUpdatingPost(false);
        }
    }

    if (fetchingPost) return <div>Loading...</div>;

    if (fetchError) return <div>Error loading post...</div>;

    return (
        <>

            <hr></hr>
            <Heading title="Update post" />
            
            <form onSubmit={handleSubmit(onSubmit)}>
                {updated && <div>The post was updated</div>}

                {updateError && <ValidationError>{updateError}</ValidationError>}
                
               
                <fieldset disabled={updated}>
                    <div>
                        <input name="title" defaultValue={post.title} type="text" className="bg-light" {...register("title")} />
                        {errors.title && <ValidationError>{errors.title.message}</ValidationError>}
                    </div>

                    <div>
                        <textarea name="body" defaultValue={post.body} type="text" className="bg-light" {...register("body")} />
                    </div>

                    <div>
                        <img src={post.media}></img>
                        <input type="text" className="bg-light" defaultValue={post.media}{...register("media")} />
                    </div>

                    <button className="bg-dark p-2 text-white rounded">{updated ? "Updating..." : "Update"}</button>  

                    <hr></hr>
                    <DeletePostButton id={post.id} />  
                </fieldset>    
            </form>
        </>
    );
}
