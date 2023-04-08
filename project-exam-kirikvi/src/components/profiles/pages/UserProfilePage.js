import Heading from "../../layout/Heading";
import AllPosts from "../../posts/AllPosts";
import UserProfileDetails from "../UserProfileDetails";

export default function UserProfilePage() {
    return (
    <>
        <Heading content="Profile" />
        <UserProfileDetails />
        <AllPosts />
    </>
    );
}