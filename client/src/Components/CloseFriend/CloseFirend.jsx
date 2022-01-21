import './closefriend.css';

export default function CloseFirend({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className='leftBarFriend'>
            <img className='leftBarFirendImg' src = {PF +user.profilePicture}alt = ''></img>
            <span className='leftBarFriendName'>{user.username}</span>
         </li> 
    )
}
