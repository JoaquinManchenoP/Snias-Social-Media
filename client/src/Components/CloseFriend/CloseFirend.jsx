import './closefriend.css';

export default function CloseFirend({user}) {
    return (
        <li className='leftBarFriend'>
            <img className='leftBarFirendImg' src = {user.profilePicture}alt = ''></img>
            <span className='leftBarFriendName'>{user.username}</span>
         </li> 
    )
}
