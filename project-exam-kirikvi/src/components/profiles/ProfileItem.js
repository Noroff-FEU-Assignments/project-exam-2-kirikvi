import { NavLink } from "react-router-dom";
import FollowButton from "./profilecontent/FollowButton";
import ProfileInfoContainer from "./profilecontent/ProfileInfoContainer";
import FollowProfile from "./profileactions/FollowProfile";

export default function ProfileItem({ name, avatar }) {
    return (
        <>  
            <NavLink to={`/profiles/${name}`}>
                <ProfileInfoContainer>
                    <img className="avatar" src={avatar} alt="Avatar"></img>
                    <h2>{name}</h2>
                    <FollowProfile>
                        <button>Follow</button>
                    </FollowProfile>                
                </ProfileInfoContainer>
            </NavLink> 
        </>
    );
}
