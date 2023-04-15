import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import { API_BASE_URL, POSTS_PATH } from "../../../constants/api";

export default function ReactToPost() {
    const [error, setError] = useState(null);

    const http = useAxios();

    const { id } = useParams();

    const navigate = useNavigate();

    const url = API_BASE_URL + POSTS_PATH + "/" + id;
    const reactURL = url + "/react/👍";
    
    async function handleLike() {
            try {
                await http.put(reactURL);
                navigate(0);
            } catch (error) {
                setError(error);
            }
    }

    return (
        <button className="reactButton" type="button" onClick={handleLike}>
            {error ? "Error" : "👍"}
        </button>
    );
}