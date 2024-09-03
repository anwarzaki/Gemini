import React, { useContext, useState } from "react";
import "./Sidbar.css";
import { Context } from "../../src/context/Context";

function Sidbar() {
  const [extended, setExtended] = useState(false);
  const {
    onSent,
    previousPrompt,
    setPreviousPrompt,
    setRecentPrompt,
    newChat,
  } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidbar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src="./img/humberg-img.png"
          alt="Menu"
        />
        <div onClick={() => newChat()} className="new-chat">
          <img className="plus-img" src="./img/plus-img.png" alt="Plus" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompt.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src="./img/comment-img.png" alt="Comment" />
                  <p>{item.slice(0, 18)}... </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-item">
          <img src="./img/question-img.png" alt="Help" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-item">
          <img src="./img/time-img.png" alt="Activity" />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-item">
          <img src="./img/setting-img.png" alt="Settings" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidbar;
// hnji
