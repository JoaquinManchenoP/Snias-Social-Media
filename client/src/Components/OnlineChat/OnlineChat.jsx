import './onlinechat.css';

export default function OnlineChat() {
  return (
      <div className="onlineChat">
          <div className="onlineChatFriend">
              <div className="onlineChatImageContainer">
                  <img className='chatOnlineImage' src="https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960" alt="" />
                  <div className="chatOnlineBadge"></div>
              </div>
              <span className="chatOnlineName">John Balauta</span>
          </div>
      </div>
  )
}
