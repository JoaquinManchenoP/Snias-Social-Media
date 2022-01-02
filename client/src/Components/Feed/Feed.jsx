import './feed.css';
import Share from '../Share/Share';
import Post from '../Post/Post';
import { Posts } from '../../dummyData';

export default function Feed() {
    return (
        <div className='feed'>
            <div className="feedrapper">
                <Share/>
                {Posts.map(post =>(
                    <Post key = {post.id} post = {post}/>
                ))}
            </div>
        </div>
    )
}
