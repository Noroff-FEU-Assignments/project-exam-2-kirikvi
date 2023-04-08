import { NavLink } from "react-router-dom";
import FollowButton from "./profilecontent/FollowButton";
import ProfileInfoContainer from "./profilecontent/ProfileInfoContainer";

export default function ProfileItem({ name, avatar }) {
    return (
        <NavLink to={`/profiles/${name}`}>
            <ProfileInfoContainer>
                <img className="avatar" src={avatar} alt="Profile picture"></img>
                <h2>{name}</h2>
                <FollowButton>Follow</FollowButton>
            </ProfileInfoContainer>
        </NavLink>
    );
}
