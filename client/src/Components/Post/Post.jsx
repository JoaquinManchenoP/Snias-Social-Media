import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';
import { useState } from 'react';

export default function Post({post}) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like -1 : like+1);
        setIsLiked(!isLiked);
    }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src = {Users.filter(user => user.id === post.userId)[0].profilePicture} alt=''></img>
                        <span className="postUsername">{Users.filter(user => user.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src ={post.photo}  alt = ''></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomtLeft">
                        <img className='likeIcon' src = '/Assets/Icons/like.png' onClick={likeHandler} alt = ''></img>
                        <img className='loveIcon' src = '/Assets/Icons/love.png' onClick={likeHandler} alt = ''></img> 
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
