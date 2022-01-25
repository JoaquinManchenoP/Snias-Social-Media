import { useRef } from 'react';
import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useState } from 'react';

export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);
    const desc = useRef();
    const [file, setFile] = useState(null);
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src = {user.profilePicture ? user.profilePicture : `${PF}Person/noAvatar.jpeg`} alt =''></img>
                    <input placeholder={"What's on your mind "+user.username+" ? "} className='shareInput' ref = {desc}></input>
                </div>
                <hr className='shareHr'/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <label htmlFor='file' className="shareOption">
                            <PermMediaIcon className='shareIcon' htmlColor='#3E92CC'/>
                            <span className='shareOptionText'>Photo or Video</span>
                            <input style={{display:'none'}} type='file' id = 'file' accept='.png,.jpeg,.jpg' onChange={(e) => setFile(e.target.files[0])}></input>
                        </label>
                        <div className="shareOption">
                            <LabelIcon className='shareIcon' htmlColor='#3E92CC'/>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <LocationOnIcon className='shareIcon' htmlColor='#3E92CC'/>
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon className='shareIcon'htmlColor='#3E92CC'/>
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    )
}
