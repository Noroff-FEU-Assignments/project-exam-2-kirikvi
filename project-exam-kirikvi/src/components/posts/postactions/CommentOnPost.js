import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import { API_BASE_URL, POSTS_PATH } from "../../../constants/api";
import useAxios from "../../../hooks/useAxios";
import CommentForm from "../../forms/CommentForm";

const schema = yup.object().shape({
    body: yup.string().required("Please enter the comment you would like to post"),
});

export default function CommentOnPost() {
    const [post, setPost] = useState(null);
    const [commented, setCommented] = useState(false);
    const [fetchingPost, setFetchingPost] = useState(true);
    const [commenting, setCommenting] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const [commentError, setCommentError] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });  

    const { id } = useParams();

    const http = useAxios();

    const navigate = useNavigate();

    const postURL = API_BASE_URL + POSTS_PATH + "/" + id;
    
    const commentURL = API_BASE_URL + "/social/posts/" + id + "/comment";

    //Get the post
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

    // Post the comment
    async function onSubmit(data) {
        setCommenting(true);
        setCommentError(null);
        setCommented(false);

        console.log(data);
        
        try{
            const response = await http.post(commentURL, data);
            console.log("response", response.data);
            setCommented(true);
            //refresh the page after commenting the post
            navigate(0);
        } catch (error) {
            console.log("error", error);
            setCommentError(error.toString());
        } finally {
            setCommenting(false);
        }
    }

    if (fetchingPost) return <div>Loading...</div>;

    if (fetchError) return <div>Error loading post...</div>;

    return (
        <CommentForm>   
            <form onSubmit={handleSubmit(onSubmit)}> 

                {commented && <div>The comment is posted</div>}

                {commentError && <FormError>{commentError}</FormError>}
               
                <fieldset disabled={commenting}>
                    <div>
                        <textarea name="body" type="text" {...register("body")} />
                        {errors.body && <FormError>{errors.body.message}</FormError>}
                    </div>

                    <button>{commenting ? "Posting..." : "Post comment"}</button>  
                </fieldset>    
            </form>
        </CommentForm>
    );
}
