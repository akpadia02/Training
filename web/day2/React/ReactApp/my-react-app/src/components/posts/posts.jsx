import { useEffect, useState } from "react";
import axios from "axios";

function Posts(){
    const [posts,setPosts]=useState([]);
    useEffect(function(){
        //ajax
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>setPosts(res.data));
        // axios.get("http://localhost:3000/courses").then(res=>setPosts(res.data));

    },[]);
    return (
        <div>
            <h1>All Posts</h1>
            {
                //rendering all posts title
                posts.map(p=>(<li key={p.id}>{p.title}</li>))
            }
        </div>
    )
}
export default Posts;