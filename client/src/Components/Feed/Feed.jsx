import './feed.css';
import Share from '../Share/Share';
import Post from '../Post/Post';

export default function Feed() {
    return (
        <div className='feed'>
            <div className="feedrapper">
                <Share/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}
