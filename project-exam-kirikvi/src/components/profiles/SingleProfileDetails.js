import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL, PROFILES_PATH } from "../../constants/api";
import useAxios from "../../hooks/useAxios";
import Banner from "./profilecontent/media/Banner";
import ProfileContainer from "./profilecontent/ProfileContainer";
import Avatar from "./profilecontent/media/Avatar";
import CountContainer from "./profilecontent/CountContainer";
import FollowProfile from "./profileactions/FollowProfile";
import UnfollowProfile from "./profileactions/UnfollowProfile";
import AllPostsByProfile from "../posts/AllPostsByProfile";
import AuthContext from "../../context/AuthContext";


export default function SingleProfileDetails() {
    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [auth] = useContext(AuthContext);

    // Get the username for the logged in user.
    const username = auth.name;
    
    let history = useNavigate();

    const { name } = useParams();

    //If the user does not exist, navigate to the homepage
    if (!name) {
        history("/profiles");
    }

    //Navigate the logged in user to its own profile
    if (username === name) {
        history("/userprofile");
    }

    //If the user has no chosen avatar, show this image.
    if (!profile.avatar) {
        profile.avatar = "https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg";
    }

    const http = useAxios();
    const profilesURL = API_BASE_URL + PROFILES_PATH + "/" + name + "?_following=true&_followers=true&_posts=true"; 
    
    useEffect(function () {
        async function getProfile() {
            try {
                const response = await http.get(profilesURL);
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
                    <img src={profile.banner} alt={profile.banner}></img>
                </Banner>

                <Avatar>                
                    <img src={profile.avatar} alt={profile.avatar}></img>
                </Avatar>

                <h2>{profile.name}</h2>
                
                <CountContainer>
                    <p>Followers: {profile._count.followers}</p>
                    <p>Following: {profile._count.following}</p>
                    <p>Posts: {profile._count.posts}</p>
                </CountContainer>

                <FollowProfile />
                <UnfollowProfile />

            </ProfileContainer>

            <AllPostsByProfile />

        </>
    );

}