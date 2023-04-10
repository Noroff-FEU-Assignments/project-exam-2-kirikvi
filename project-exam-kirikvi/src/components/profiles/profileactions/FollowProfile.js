import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import { API_BASE_URL, PROFILES_PATH } from "../../../constants/api";

export default function FollowProfile({ name }) {
    const [error, setError] = useState(null);

    const http = useAxios();
    const navigate = useNavigate();

    const profileURL = API_BASE_URL + PROFILES_PATH + "/" + name;

    const followProfileURL = profileURL + "/follow";
    const unfollowProfileURL = profileURL + "/unfollow"; 
    
    async function handleFollow() {

            try {
                await http.put(followProfileURL);
                navigate(0);
            } catch (error) {
                setError(error);
            }
    }

    return (
        <button type="button" onClick={handleFollow}>
            {error ? "Error" : "Follow"}
        </button>
    );
}

FollowProfile.propTypes = {
    name: PropTypes.string.isRequired,
};