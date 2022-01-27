import { useRef } from 'react';
import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useState } from 'react';
import axios from 'axios';

export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
          userId: user._id,
          desc: desc.current.value,
        };
        if (file) {
          const data = new FormData();
          const fileName = file.name;
          data.append("name", fileName);
          data.append("file", file);
          newPost.img = fileName;
          try {
            await axios.post("/api/upload/", data);
          } catch (err) {
              console.log(err)
          }
        }
        try {
          await axios.post("/api/posts/", newPost);
          console.log(newPost)
          window.location.reload();
        } catch (err) {
            console.log(err)
        }
      };
    console.log(file);
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src = {user.profilePicture ? user.profilePicture : `${PF}Person/noAvatar.jpeg`} alt =''></img>
                    <input placeholder={"What's on your mind "+user.username+" ? "} className='shareInput' ref = {desc}></input>
                </div>
                <hr className='shareHr'/>
                <form className="shareBottom" onSubmit={submitHandler}>
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
                    <button className='shareButton' type = 'submit'>Share</button>
                </form>
            </div>
        </div>
    )
}
