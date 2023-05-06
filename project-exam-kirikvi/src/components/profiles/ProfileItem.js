import { NavLink } from "react-router-dom";
import ProfileInfoContainer from "./profilecontent/ProfileInfoContainer";
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
                    <p className="followButton">See profile</p>              
                </ProfileInfoContainer>
            </NavLink> 
        </>
    );
}
