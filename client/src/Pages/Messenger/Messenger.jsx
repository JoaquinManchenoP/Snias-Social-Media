import React from 'react';
import '../Messenger/messenger.css';
import TopBar from '../../Components/TopBar/TopBar';
import Conversations from '../../Components/Conversations/Conversations';
import Message from '../../Components/Message/Message';

export default function Messenger() {
  return(
        <>
        <TopBar/>
        <div className='messenger'>
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder = 'Search for friends' className= "chatMenuInput"/>
                    <Conversations/>
                    <Conversations/>
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                    <Message own = {true}/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
                <div className="chatBoxBottom">
                    <textarea className='chatMessageInput' placeholder='write something...'/> 
                    <button className="chatSumbitButton">Send</button>
                </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                online
                </div>
            </div>
        </div> 
        </>
  )
}
