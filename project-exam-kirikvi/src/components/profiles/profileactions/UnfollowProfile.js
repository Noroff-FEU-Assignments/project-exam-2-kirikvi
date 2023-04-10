import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import { API_BASE_URL, PROFILES_PATH } from "../../../constants/api";

export default function UnfollowProfile() {
    const [error, setError] = useState(null);

    const http = useAxios();

    const { name } = useParams();

    const navigate = useNavigate();

    const profileURL = API_BASE_URL + PROFILES_PATH + "/" + name;

    const unfollowProfileURL = profileURL + "/unfollow";

    
    async function handleUnollow() {

            try {
                await http.put(unfollowProfileURL);
                navigate(0);
            } catch (error) {
                setError(error);
            }
    }

    return (
        <button type="button" onClick={handleUnollow}>
            {error ? "Error" : "Unfollow"}
        </button>
    );
}