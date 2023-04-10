import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";
import { API_BASE_URL, PROFILES_PATH } from "../../../constants/api";

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

    const http = useAxios();

    let { name } = useParams();

    const url = API_BASE_URL + PROFILES_PATH + "/" + name + "/media";

    useEffect(
        function () {
            async function getProfileMedia() {
                try {
                    const response = await http.get(url);
                    console.log("response", response.data);
                    setMedia(response.data);
                } catch (error) {
                    console.log(error);
                    setFetchError(error.toString());
                } finally {
                    setFetchingMedia(false);
                }
            }
            
            getProfileMedia();
        },
        []
    );

    async function onSubmit(data) {
        setUploadingMedia(true);
        setUploadError(null);
        setUploaded(false);

        console.log(data);

        try {
            const response = await http.put(url, data);
            console.log("response", response.data);
            setUploaded(true);
        } catch (error) {
            console.log("error", error);
            setUploadError(error.toString());
        } finally {
            setUploadingMedia(false);
        }
    }

    if (fetchingMedia) return <div>Loading...</div>;

    if (fetchError) return <div>Error loading media upload...</div>;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {uploaded && <div>The media was uploaded</div>}

            {uploadError && <FormError>{uploadError}</FormError>}

            <fieldset disabled={uploadingMedia}>
                <div>
                    <img src={media.avatar}></img>
                    <input name="avatar" placeholder="Avatar url" ref={register} />
                    {errors.avatar && <FormError>{errors.avatar.message}</FormError>}
                </div>

                <div>
                    <img src={media.banner}></img>
                    <input name="banner" placeholder="Banner url" ref={register} />
                </div>

                <button>Upload media</button>
            </fieldset>          
        </form>
    );
}