import { useState, useEffect, useContext } from "react";
import './feed.css';
import {Posts} from "../../dummyData";
import Share from "../Share/Share"
import Post from "../Post/Post";
import axios from "axios";
import { formControlUnstyledClasses } from "@mui/material";
import { AuthContext } from "../../Context/AuthContext";


export default function Feed({username}) {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);
   
    useEffect( () => {
        const fetchPosts  =  async () => {
            const res = username 
            ? await axios.get(`/api/posts/profile/${username}`)
            : await axios.get(`api/posts/timeline/${user._id}`)
            setPosts(res.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            }))
        }
        fetchPosts();
    },[username, user._id]);

    return ( 
        <div className='feed'>
            <div className="feedrapper">
                <Share/>
                {posts.map((post) =>(
                    <Post key = {post._id} post = {post}/>
                ))}
            </div>
        </div>
    )
}
