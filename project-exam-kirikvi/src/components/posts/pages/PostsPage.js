import Heading from "../../layout/Heading";//import PostsList from "./PostsList";
import CreatePost from "../postactions/CreatePost";
import AllPosts from "../AllPosts";
import HorizontalLine from "../../generalstyles/HorizontalLine";

export default function PostsPage() {
    return (
        <>        
        <Heading content="List of all posts"/>
        <CreatePost />
        <HorizontalLine />
        <AllPosts />
        </>
    );
}