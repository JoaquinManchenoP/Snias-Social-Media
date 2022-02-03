import './rightbar.css';
import Online from '../Online/Online';
import { Users } from '../../dummyData';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FilterBAndWSharp, Remove } from '@mui/icons-material';
import {Link} from "react-router-dom"
import { AuthContext } from '../../Context/AuthContext';
import AddIcon from '@mui/icons-material/Add';

export default function RightBar({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setFriends] = useState([]);
    const {user:currentUser, dispatch} = useContext(AuthContext);
    const [followed, setFollowed] = useState()
    

    useEffect(() => {
        const getFriends = async () => {
            setFollowed(currentUser.following.includes(user?._id))
            try {
                const friendList = await axios.get('/api/users/friends/'+currentUser._id)
                setFriends(friendList.data)
            } catch (error) {
                console.log(error)
            }
        }
        getFriends();
    },[user])


    const handleClick = async () => {
        try {
            if(followed){
                const unfollowUser = await axios.put('/api/users/'+user._id+'/unfollow', {userId:currentUser._id});
                console.log(unfollowUser)
                dispatch({type: 'UNFOLLOW', payload:user._id})
            }else{
                const followUser = await axios.put('/api/users/'+user._id+'/follow',  {userId:currentUser._id});
                dispatch({type: 'FOLLOW', payload:user._id})
                console.log(followUser)
            }     
        } catch (error) {
            console.log(error)   
        }
        setFollowed(!followed);
    }

    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src = {`${PF}Icons/cake.png`} alt = ''></img>
                    <span className="birthdayText">
                        <b>3 friends</b> have a birthdays today
                    </span>
                </div>
                    <img className="rightbarAd" src={`${PF}Ads/sneakerAd.png`} alt=""/>
                    <h4 className="rightbarTitle">Online Friends</h4>
                    <ul className='rightbarFriendList'>
                        {Users.map(user => (
                            <Online key = {user.id} user = {user}/>
                        ))}
                    </ul>
            </>
        );
    };

    const ProfileRightBar = () => {
        return(
            <>
            {user.username !== currentUser.username && (
                <button className='rightBarFollowButton' onClick={handleClick}>
                    {followed ? 'Unfollow' : 'Follow'}
                    {followed ? <Remove/> : <AddIcon/>}
                </button>
            )}
                <h4 className='rightbarTitle'> User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"> City</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightbarInfoKey">Relationship</span>
                        <span className="rightbarInfoValue">
                            {user.relationship === 1
                                ? 'Single'
                                : user.relationship === 2
                                ? 'In a Relationship'
                                : ' - '
                            }
                        </span>
                    </div>
                </div>
                <h4 className='rightbarTitle'> User Firends</h4>
                <div className="rightbarFollowings">
                    {friends.map(friend => (
                        <Link to = {'/profile/'+friend.username} >
                        <div className="rightbarFollowing">
                        <img className = 'rightbarFollowingImg' src = {friend.profilePicture ? friend.profilePicture :`${PF}Person/noAvatar.jpeg`} alt=''></img>
                        <span className="rightbarFollowName">{friend.username}</span>
                        </div>
                        </Link>
                    ))}
                </div>
            </>
        );
    };

    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {user ? <ProfileRightBar/> : <HomeRightBar/>}
            </div>
        </div>
    )
}
