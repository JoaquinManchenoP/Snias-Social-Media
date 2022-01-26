import './profile.css';
import TopBar from "../../Components/TopBar/TopBar";
import LeftBar from "../../Components/LeftBar/LeftBar";
import Feed from "../../Components/Feed/Feed";
import RightBar from "../../Components/RightBar/RightBar";
import './profile.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`/api/users?username=${username}`);
          setUser(res.data);
        };
        fetchUser();
      }, [username]);

    return (
        <>
        <TopBar/>
        <div className='profile'>
            <LeftBar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className='profileCoverImg' src = {user.coverPicture ? user.coverPicture : `${PF}Ads/emptyCoverPicture.jpeg`} alt = ''></img>
                        <img className='profileUserImg' src ={user.profilePicture || user.profilePicture :`${PF}Person/noAvatar.jpeg`} alt = ''></img>
                    </div>
                    <div className="profileInfo">
                        <h4 className='profileInfoName'>{username}</h4>
                        <span className="profileInfoDesc">hello friends</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username = {username} />
                    <RightBar user = {user}/>
                </div>
            </div>
        </div>
    </>
    )
}
