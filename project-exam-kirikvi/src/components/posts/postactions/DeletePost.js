import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import { API_BASE_URL, POSTS_PATH } from "../../../constants/api";

export default function DeletePostButton({ id }) {
    const [error, setError] = useState(null);

    const http = useAxios();
    const navigate = useNavigate();

    const postURL = API_BASE_URL + POSTS_PATH + "/" + id;
    
    async function handleDelete() {
        //Confirmation box
        const confirmDelete = window.confirm("Delete this post?");

        if(confirmDelete) {
            try {
                await http.delete(postURL);
                navigate("/");
            } catch (error) {
                setError(error);
                alert("You do not have permission to delete this post");
            }
        }
    }

    return (
        <button type="button" onClick={handleDelete}>
            {error ? "Error" : "Delete"}
        </button>
    );
}

DeletePostButton.propTypes = {
    id: PropTypes.number.isRequired,
};