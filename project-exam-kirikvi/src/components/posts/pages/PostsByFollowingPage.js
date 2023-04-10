import Heading from "../../layout/Heading";
import PostsByFollowing from "../PostsByFollowing";
import CreatePost from "../postactions/CreatePost";

export default function PostsByFollowingPage() {
    return (
        <>
            <Heading content="Friend's posts"/>
            <CreatePost />
            <PostsByFollowing />
        </>
    );
}