import { useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { API_BASE_URL } from "../constants/api";

const url = API_BASE_URL;

export default function useAxios() {
    const [auth] = useContext(AuthContext);

    const apiClient = axios.create({
        baseUrl: url,
    });

    apiClient.interceptors.request.use(function (config) {
        const token = auth.accessToken;
        config.headers.Authorization = token ? `Bearer ${token}` : "";
        return config;
    });

    return apiClient;
}