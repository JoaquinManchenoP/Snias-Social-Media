import './online.css';

export default function Online({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="rightBarFirend">
            <div className="rightBarProfileImageContainer">
                <img className="rightBarProfileImage" src={PF+user.profilePicture} alt =''  />
                <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">{user.username}</span>
        </li>
    )
}
