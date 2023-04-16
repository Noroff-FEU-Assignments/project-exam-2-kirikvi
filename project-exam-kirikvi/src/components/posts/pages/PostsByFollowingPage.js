import Heading from "../../layout/Heading";
import PostsByFollowing from "../PostsByFollowing";

export default function PostsByFollowingPage() {
    return (
        <>
            <Heading content="Friend's posts"/>
            <PostsByFollowing />
        </>
    );
}