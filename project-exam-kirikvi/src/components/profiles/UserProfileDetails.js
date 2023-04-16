import { useState, useEffect, useContext } from "react";
import { API_BASE_URL, PROFILES_PATH } from "../../constants/api";
import useAxios from "../../hooks/useAxios";
import Banner from "./profilecontent/media/Banner";
import ProfileContainer from "./profilecontent/ProfileContainer";
import Avatar from "./profilecontent/media/Avatar";
import CountContainer from "./profilecontent/CountContainer";
import AuthContext from "../../context/AuthContext";


export default function UserProfileDetails() {
    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [auth, setAuth] = useContext(AuthContext);

    const username = auth.name;

    const http = useAxios();
    const profilesURL = API_BASE_URL + PROFILES_PATH + "/" + username + "?_following=true&_followers=true&_posts=true"; 

    useEffect(function () {
        async function getProfile() {
            try {
                const response = await http.get(profilesURL);
                //console.log("response", response.data);
                setProfile(response.data);
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        getProfile();
    }, []);

    if (loading) {
        return <div>Loading profiles...</div>;
    }    

    if (error) {
        return <div>Error: An error occured</div>;
    }

    return (
        <>
            <ProfileContainer>
    
                <Banner>
                    <img src={profile.banner}></img>
                </Banner>

                <Avatar>                
                    <img src={profile.avatar}></img>
                </Avatar>

                <h2>{profile.name}</h2>
                
                <CountContainer>
                    <p>Followers: {profile._count.followers}</p>
                    <p>Following: {profile._count.following}</p>
                    <p>Posts: {profile._count.posts}</p>
                </CountContainer>
            

            </ProfileContainer>
            <hr></hr>

        </>
    );

}