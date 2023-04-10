import Heading from "../../layout/Heading";//import PostsList from "./PostsList";
import CreatePost from "../postactions/CreatePost";
import AllPosts from "../AllPosts";

export default function PostsPage() {
    return (
        <>        
        <Heading content="List of all posts"/>
        <CreatePost />
        <AllPosts />
        </>
    );
}