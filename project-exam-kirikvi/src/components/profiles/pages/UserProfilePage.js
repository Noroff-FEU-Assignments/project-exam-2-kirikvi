import Heading from "../../layout/Heading";
import AllPostsByRegisteredUser from "../../posts/AllPostsByRegisteredUser";
import UserProfileDetails from "../UserProfileDetails";
import UploadProfileMedia from "../profileactions/UploadProfileMedia";


export default function UserProfilePage() {
    return (
        <>
            <Heading content="Profile" />
            <UploadProfileMedia />
            <UserProfileDetails />
            <AllPostsByRegisteredUser />
        </>
    );
}