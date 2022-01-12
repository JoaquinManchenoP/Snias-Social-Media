import './rightbar.css';
import Online from '../Online/Online';
import { Users } from '../../dummyData';

export default function RightBar({profile}) {

    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src = '/Assets/Icons/cake.png' alt = ''></img>
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other firends</b> have a birthday today
                    </span>
                </div>
                    <img className="rightbarAd" src='/Assets/Ads/sneakerAd.png' alt=""/>
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
                <h4 className='rightbarTitle'> User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"> City</span>
                        <span className="rightbarInfoValue"> New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightbarInfoKey">Relationship</span>
                        <span className="rightbarInfoValue">Married</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'> User Firends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img className = 'rightbarFollowingImg' src = "/Assets/Person/person2.jpeg" alt=''></img>
                        <span className="rightbarFollowName">John Balauta</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className = 'rightbarFollowingImg' src = "/Assets/Person/person2.jpeg" alt=''></img>
                        <span className="rightbarFollowName">John Balauta</span>
                    </div>   
                    <div className="rightbarFollowing">
                        <img className = 'rightbarFollowingImg' src = "/Assets/Person/person2.jpeg" alt=''></img>
                        <span className="rightbarFollowName">John Balauta</span>
                    </div>   
                    <div className="rightbarFollowing">
                        <img className = 'rightbarFollowingImg' src = "/Assets/Person/person2.jpeg" alt=''></img>
                        <span className="rightbarFollowName">John Balauta</span>
                    </div>   
                    <div className="rightbarFollowing">
                        <img className = 'rightbarFollowingImg' src = "/Assets/Person/person2.jpeg" alt=''></img>
                        <span className="rightbarFollowName">John Balauta</span>
                    </div>   
                    <div className="rightbarFollowing">
                        <img className = 'rightbarFollowingImg' src = "/Assets/Person/person2.jpeg" alt=''></img>
                        <span className="rightbarFollowName">John Balauta</span>
                    </div> 
                    <div className="rightbarFollowing">
                        <img className = 'rightbarFollowingImg' src = "/Assets/Person/person2.jpeg" alt=''></img>
                        <span className="rightbarFollowName">John Balauta</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className = 'rightbarFollowingImg' src = "/Assets/Person/person2.jpeg" alt=''></img>
                        <span className="rightbarFollowName">John Balauta</span>
                    </div>    
                </div>
            </>
        );
    };

    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightBar/> : <HomeRightBar/>}
            </div>
        </div>
    )
}
