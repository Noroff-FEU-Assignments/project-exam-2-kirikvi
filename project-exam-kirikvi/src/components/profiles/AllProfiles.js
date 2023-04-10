import { useState, useEffect } from "react";
import { API_BASE_URL, PROFILES_PATH } from "../../constants/api";
import useAxios from "../../hooks/useAxios";
import ProfileItem from "./ProfileItem";

export default function AllProfiles() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const http = useAxios();
    const profilesURL = API_BASE_URL + PROFILES_PATH;
    
    useEffect(function () {
        async function getProfiles() {
            try {
                const response = await http.get(profilesURL);
                //console.log("response", response.data);
                setProfiles(response.data);
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        getProfiles();
    }, []);

    if (loading) {
        return <div>Loading profiles...</div>;
    }    

    if (error) {
        return <div>Error: An error occured</div>;
    }

    return (
        <div>
            {profiles.map(function (profile) {
               const { name, email, avatar, _count} = profile;
               return <ProfileItem key={email} count={_count} avatar={avatar} name={name} email={email} />;
            })}
        </div>
    );
}