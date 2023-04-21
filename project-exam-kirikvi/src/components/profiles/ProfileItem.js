import { NavLink } from "react-router-dom";
import FollowButton from "./profilecontent/FollowButton";
import ProfileInfoContainer from "./profilecontent/ProfileInfoContainer";
import FollowProfile from "./profileactions/FollowProfile";

export default function ProfileItem({ name, avatar }) {

    if (!avatar) {
        avatar = "https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg";
    }
    return (
        <>  
            <NavLink to={`/profiles/${name}`}>
                <ProfileInfoContainer>
                    <img src={avatar} alt="Avatar"></img>
                    <h2>{name}</h2>
                    <FollowProfile>
                        <button>Follow</button>
                    </FollowProfile>                
                </ProfileInfoContainer>
            </NavLink> 
        </>
    );
}
