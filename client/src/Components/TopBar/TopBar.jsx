import './topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function TopBar() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const location = useLocation();


    return (
        <div className='topbarContainer'>
          <div className="topbarLeft">
            <Link to = '/' style={{textDecoration:'none'}}>
              <span className='logo'>Snias</span>
            </Link>
          </div>
          <div className="topbarCenter">
            <div className="searchbar">
              <Search className='searchIcon'/>
              <input placeholder='Search for friends or posts' className='searchInput'/>
            </div>
          </div>
          <div className="topbarRight">
            <div className="topbarLinks">
              <span className='topbarLink'>Homepage</span>
              <span className='topbarLink'>Timeline</span>
            </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">3</span>
              </div>
              <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">2</span>
              </div>
            </div>
            <Link to = {(`/profile/${user.username}/` === location.pathname) ? '' : `/profile/${user.username}/`} > 
            <img src={ user.profilePicture ? user.profilePicture :`${PF}Person/noAvatar.jpeg`} alt="" className="topbarProfileImage" />
            </Link>
          </div>
        </div>
    )
}
