import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src = '/Assets/Person/thiago.jpg' alt=''></img>
                        <span className="postUsername">Thiago Alcantara</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey ! this is my first post</span>
                    <img className='postImg' src = '/Assets/Posts/thiagoGoal.jpeg' alt = ''></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomtLeft">
                        <img className='likeIcon' src = '/Assets/Icons/like.png' alt = ''></img>
                        <img className='loveIcon' src = '/Assets/Icons/love.png' alt = ''></img> 
                        <span className="postLikeCounter">58 people like this</span>    
                    </div>
                    <div className="postBottomtRight">
                        <span className="postCommentText"> 18 comments</span>    
                    </div>            
                </div>                
            </div>
        </div>
    )
}
