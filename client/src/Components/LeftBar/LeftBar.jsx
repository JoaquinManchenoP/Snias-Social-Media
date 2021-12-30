import './leftbar.css';
import  { RssFeed }  from "@mui/icons-material";
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import TodayIcon from '@mui/icons-material/Today';
import SchoolIcon from '@mui/icons-material/School';

export default function LeftBar() {
    return (
        <div className='leftbar'>
            <div className="leftbarWrapper">
                <ul className='lefbarList'>
                    <li className="leftbarListItem">
                        <RssFeed className='leftBarIcon'/>
                        <span className='leftbarListItemText'>Feed</span>
                    </li>
                    <li className="leftbarListItem">
                        <ChatIcon className='leftBarIcon'/>
                        <span className='leftbarListItemText'>Chat</span>
                    </li>
                    <li className="leftbarListItem">
                        <PlayCircleIcon className='leftBarIcon'/>
                        <span className='leftbarListItemText'>Videos</span>
                    </li>
                    <li className="leftbarListItem">
                        <GroupsIcon className='leftBarIcon'/>
                        <span className='leftbarListItemText'>Groups</span>
                    </li>
                    <li className="leftbarListItem">
                        <BookmarksIcon className='leftBarIcon'/>
                        <span className='leftbarListItemText'>Bookmarks</span>
                    </li>
                    <li className="leftbarListItem">
                        <HelpIcon className='leftBarIcon'/>
                        <span className='leftbarListItemText'>Help</span>
                    </li>
                    <li className="leftbarListItem">
                        <WorkIcon className='leftBarIcon'/>
                        <span className='leftbarListItemText'>Jobs</span>
                    </li>
                    <li className="leftbarListItem">
                        <TodayIcon className='leftBarIcon'/>
                        <span className='leftbarListItemText'>Events</span>
                    </li>
                    <li className="leftbarListItem">
                        <SchoolIcon className='leftBarIcon'/>
                        <span className='leftbarListItemText'>Courses</span>
                    </li>
                </ul>
                <button className='leftBarButton'>More</button>
                <hr className='leftBarHr'/>
                <ul className='lefBarFriendList'>
                    <li className='leftBarFriend'>
                        <img className='leftBarFirendImg' src ='/Assets/Person/man2profile.jpg' alt = ''></img>
                        <span className='leftBarFriendName'>Joaquin Mancheno</span>
                    </li>
                    <li className='leftBarFriend'>
                        <img className='leftBarFirendImg' src ='/Assets/Person/man2profile.jpg' alt = ''></img>
                        <span className='leftBarFriendName'>Joaquin Mancheno</span>
                    </li>
                    <li className='leftBarFriend'>
                        <img className='leftBarFirendImg' src ='/Assets/Person/man2profile.jpg' alt = ''></img>
                        <span className='leftBarFriendName'>Joaquin Mancheno</span>
                    </li>
                    <li className='leftBarFriend'>
                        <img className='leftBarFirendImg' src ='/Assets/Person/man2profile.jpg' alt = ''></img>
                        <span className='leftBarFriendName'>Joaquin Mancheno</span>
                    </li>
                    <li className='leftBarFriend'>
                        <img className='leftBarFirendImg' src ='/Assets/Person/man2profile.jpg' alt = ''></img>
                        <span className='leftBarFriendName'>Joaquin Mancheno</span>
                    </li>
                    <li className='leftBarFriend'>
                        <img className='leftBarFirendImg' src ='/Assets/Person/man2profile.jpg' alt = ''></img>
                        <span className='leftBarFriendName'>Joaquin Mancheno</span>
                    </li>
                    <li className='leftBarFriend'>
                        <img className='leftBarFirendImg' src ='/Assets/Person/man2profile.jpg' alt = ''></img>
                        <span className='leftBarFriendName'>Joaquin Mancheno</span>
                    </li>
                    <li className='leftBarFriend'>
                        <img className='leftBarFirendImg' src ='/Assets/Person/man2profile.jpg' alt = ''></img>
                        <span className='leftBarFriendName'>Joaquin Mancheno</span>
                    </li>
                    <li className='leftBarFriend'>
                        <img className='leftBarFirendImg' src ='/Assets/Person/man2profile.jpg' alt = ''></img>
                        <span className='leftBarFriendName'>Joaquin Mancheno</span>
                    </li>
                    <li className='leftBarFriend'>
                        <img className='leftBarFirendImg' src ='/Assets/Person/man2profile.jpg' alt = ''></img>
                        <span className='leftBarFriendName'>Joaquin Mancheno</span>
                    </li>
                    <li className='leftBarFriend'>
                        <img className='leftBarFirendImg' src ='/Assets/Person/man2profile.jpg' alt = ''></img>
                        <span className='leftBarFriendName'>Joaquin Mancheno</span>
                    </li>
                    <li className='leftBarFriend'>
                        <img className='leftBarFirendImg' src ='/Assets/Person/man2profile.jpg' alt = ''></img>
                        <span className='leftBarFriendName'>Joaquin Mancheno</span>
                    </li>
                    
                    <li className='leftBarFriend'>
                        <img className='leftBarFirendImg' src ='/Assets/Person/man2profile.jpg' alt = ''></img>
                        <span className='leftBarFriendName'>Joaquin Mancheno</span>
                    </li>
                    <li className='leftBarFriend'>
                        <img className='leftBarFirendImg' src ='/Assets/Person/man2profile.jpg' alt = ''></img>
                        <span className='leftBarFriendName'>Joaquin Mancheno</span>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}
