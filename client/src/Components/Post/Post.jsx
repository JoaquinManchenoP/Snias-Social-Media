import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import us from 'javascript-time-ago/locale/ru.json'
import ReactTimeAgo from 'react-time-ago'



export default function Post({post}) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    TimeAgo.addDefaultLocale(en)

    useEffect( () => {
        const fetcUser  =  async () => {
        const res = await axios.get(`api/users/${post.userId}`);
        setUser(res.data)
        console.log(user.userId);
    }
        fetcUser();
    },[post.userId]);

    console.log(user)

    const likeHandler = () => {
        setLike(isLiked ? like -1 : like+1);
        setIsLiked(!isLiked);
    }


    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src = {user.profilePicture || `${PF}Person/noAvatar.jpeg`} alt=''></img>
                        <span className="postUsername">{user.username}</span>
                        <ReactTimeAgo className="postDate" date = {post.createdAt}/>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src ={post.img}  alt = ''></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomtLeft">
                        <img className='likeIcon' src = {`${PF}Icons/like.png`} onClick={likeHandler} alt = ''></img>
                        <img className='loveIcon' src = {`${PF}Icons/love.png`} onClick={likeHandler} alt = ''></img> 
                        <span className="postLikeCounter">{like} people like this</span>    
                    </div>
                    <div className="postBottomtRight">
                        <span className="postCommentText">{post.comment} comments</span>    
                    </div>            
                </div>                
            </div>
        </div>
    )
}
