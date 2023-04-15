import Heading from "../../layout/Heading";
import AllPostsByProfile from "../../posts/AllPostsByProfile";
import SingleProfileDetails from "../SingleProfileDetails";

export default function ProfilePage() {
    return ( 
        <>
            <Heading content="single profile" />
            <SingleProfileDetails />
            <AllPostsByProfile />
        </>
    );
}