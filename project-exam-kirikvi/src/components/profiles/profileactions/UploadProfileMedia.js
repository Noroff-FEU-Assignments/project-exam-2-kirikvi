import { useState, useEffect } from "react";
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

    const url =  API_BASE_URL + PROFILES_PATH + "/" + "kiri_kvistnes";

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

        console.log(data);

        try {
            const response = await http.put(mediaURL, data);
            setUploaded(true);
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

            <fieldset disabled={uploadingMedia}>
                <div>
                    <input name="avatar" placeholder="Avatar url" defaultValue={media.avatar} {...register(`avatar`)} />
                    {errors.avatar && <FormError>{errors.avatar.message}</FormError>}
                </div>

                <div>
                    <input name="banner" placeholder="Banner url" defaultValue={media.banner} {...register(`banner`)} />
                </div>

                <button>Upload media</button>
            </fieldset>          
        </form>
    );
}