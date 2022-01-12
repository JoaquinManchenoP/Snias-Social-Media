import './profile.css';
import TopBar from "../../Components/TopBar/TopBar";
import LeftBar from "../../Components/LeftBar/LeftBar";
import Feed from "../../Components/Feed/Feed";
import RightBar from "../../Components/RightBar/RightBar";
import './profile.css';

export default function Profile() {
    return (
        <>
        <TopBar/>
        <div className='profile'>
            <LeftBar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className='profileCoverImg' src = '/Assets/Posts/thiagoGoal.jpeg' alt = ''></img>
                        <img className='profileUserImg' src = '/Assets/Person/thiago.jpg' alt = ''></img>
                    </div>
                    <div className="profileInfo">
                        <h4 className='profileInfoName'>Thiago Alcantara</h4>
                        <span className="profileInfoDesc">hello firneds</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                <Feed/>
                <RightBar profile/>
                </div>
            </div>
        </div>
    </>
    )
}
