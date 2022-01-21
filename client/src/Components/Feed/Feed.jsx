import { useState, useEffect } from "react";
import './feed.css';
import {Posts} from "../../dummyData";
import Share from "../Share/Share"
import Post from "../Post/Post";
import axios from "axios";
import { formControlUnstyledClasses } from "@mui/material";


export default function Feed({username}) {
    const [posts, setPosts] = useState([]);
    const [text, setText] = useState('');
   
    useEffect( () => {
        const fetchPosts  =  async () => {
        const res = username 
        ? await axios.get(`/api/posts/profile/${username}`)
        : await axios.get('api/posts/timeline/61e820fab01efd3e5d0ec949')
        setPosts(res.data)

        }
        fetchPosts();
    },[]);


    return ( 
        <div className='feed'>
            <input type="text" className="text" onChange={e => setText(e.target.value)} />
            <div className="feedrapper">
                <Share/>
                {posts.map((post) =>(
                    <Post key = {post._id} post = {post}/>
                ))}
            </div>
        </div>
    )
}
