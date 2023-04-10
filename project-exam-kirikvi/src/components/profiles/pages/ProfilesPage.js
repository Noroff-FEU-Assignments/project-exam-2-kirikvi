import Heading from "../../layout/Heading";
import AllPostsByProfile from "../../posts/AllPostsByProfile";
import AllProfiles from "../AllProfiles";


export default function ProfilesPage() {
    return ( 
        <>
        <Heading content="List of profiles" />
        <AllProfiles />
        
        </>
    );
}