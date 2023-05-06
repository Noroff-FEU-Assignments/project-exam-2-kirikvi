import Heading from "../../layout/Heading";
import AllPostsByRegisteredUser from "../../posts/AllPostsByRegisteredUser";
import UserProfileDetails from "../UserProfileDetails";

export default function UserProfilePage() {
    return (
        <>
            <Heading content="Profile" />
            <UserProfileDetails />
            <AllPostsByRegisteredUser />
        </>
    );
}