import React from 'react';
import './message.css';

export default function Message({own}) {
  return(
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
            <img src="https://www.cnet.com/a/img/TnW_gx8ktqEt_yunuj2hCj_yTpY=/940x0/2016/12/14/8ea41d9d-2a76-4f35-9d9d-1ef472f7d9dc/car-photography-how-to.jpg" alt="" className="messageImg" />
            <span className="messageText">this is a test message to see if this works</span>
        </div> 
         <div className="messageBottom">1 hour ago</div> 
      </div>
  )
}
