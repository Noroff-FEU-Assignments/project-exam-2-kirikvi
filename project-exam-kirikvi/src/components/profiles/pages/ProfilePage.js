import Heading from "../../layout/Heading";
import SingleProfileDetails from "../SingleProfileDetails";
import AllPostsByProfile from "../../posts/AllPostsByProfile";

export default function ProfilePage() {
    return ( 
        <>
            <Heading content="single profile" />
            <SingleProfileDetails />
            <AllPostsByProfile />
        </>
    );
}