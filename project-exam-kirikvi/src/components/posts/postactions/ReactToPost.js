import { useState } from "react";
import PropTypes from "prop-types";
import useAxios from "../../../hooks/useAxios";
import { API_BASE_URL, POSTS_PATH } from "../../../constants/api";
import ReactButton from "../postcontent/ReactButton";

export default function ReactToPost({ id }) {
    const [error, setError] = useState(null);

    const http = useAxios();

    const postURL = API_BASE_URL + POSTS_PATH + "/" + id + "/react/👍";
    
    async function handleReaction() {
        try {
            await http.put(postURL);
        } catch (error) {
            setError(error);
        }
    }

    return (
        <ReactButton type="button" onClick={handleReaction}>
            {error ? "Error" : "React"}
        </ReactButton>
    );
}