import Heading from "../../layout/Heading";
import AllPostsByProfile from "../../posts/AllPosts";
import UserProfileDetails from "../UserProfileDetails";
import UploadProfileMedia from "../profileactions/UploadProfileMedia";


export default function UserProfilePage() {
    return (
        <>
            <Heading content="Profile" />
            <UploadProfileMedia />
            <UserProfileDetails />
            <AllPostsByProfile />
        </>
    );
}