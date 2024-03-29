import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";
import { API_BASE_URL, PROFILES_PATH } from "../../../constants/api";
import Button from "../../forms/Button";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const schema = yup.object().shape({
    avatar: yup.string().notRequired(),
    banner: yup.string().notRequired()
});

export default function UploadProfileMedia() {
    const [media, setMedia] = useState(null);
    const [uploaded, setUploaded] = useState(false);
    const [fetchingMedia, setFetchingMedia] = useState(true);
    const [uploadingMedia, setUploadingMedia] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const [uploadError, setUploadError] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });  

    const [auth, setAuth] = useContext(AuthContext);

    const username = auth.name;

    const http = useAxios();

    const navigate = useNavigate();

    const url =  API_BASE_URL + PROFILES_PATH + "/" + username;

    const mediaURL = url + "/media";

    // Get the user profile
    useEffect(
        function () {
            async function getProfileMedia() {
                try {
                    const response = await http.get(url);
                    setMedia(response.data);
                } catch (error) {
                    setFetchError(error.toString());
                } finally {
                    setFetchingMedia(false);
                }
            }
            
            getProfileMedia();
        },
        []
    );

    // Upload the avatar and banner to the user profile
    async function onSubmit(data) {
        setUploadingMedia(true);
        setUploadError(null);
        setUploaded(false);

        try {
            const response = await http.put(mediaURL, data);
            setUploaded(true);
            navigate(0);
        } catch (error) {
            setUploadError(error.toString());
        } finally {
            setUploadingMedia(false);
        }
    }

    if (fetchingMedia) return <div>Loading...</div>;

    if (fetchError) return <div>Error loading media upload...</div>;

    // Profile media upload form
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {uploaded && <div>The media was uploaded</div>}

            {uploadError && <FormError>{uploadError}</FormError>}

            <p>Upload avatar or/and banner</p>

            <fieldset disabled={uploadingMedia}>
                <div>
                    <img className="updateImage" src={media.avatar} alt={media.avatar}></img>
                    <label for="avatar">Avatar URL</label> 
                    <input name="avatar" placeholder="Avatar url" defaultValue={media.avatar} {...register(`avatar`)} />
                    {errors.avatar && <FormError>{errors.avatar.message}</FormError>}
                </div>

                <div>
                    <img className="updateImage" src={media.banner} alt={media.banner}></img>
                    <label for="banner">Banner URL</label> 
                    <input name="banner" placeholder="Banner url" defaultValue={media.banner} {...register(`banner`)} />
                </div>

                <Button>{uploadingMedia ? "Uploading media..." : "Upload media"}</Button>
            </fieldset>          
        </form>
    );
}