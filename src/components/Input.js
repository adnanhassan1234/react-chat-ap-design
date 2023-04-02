import React from "react";
import folder from '.././assets/image/folder-plus.svg';
import media from '.././assets/image/paperclip.svg';

const Input = () => {
  return (
    <>
      <div className="input">
        <input type="text" placeholder="Type something..." />
        <div className="send">
          <img src={folder} alt="" />
          <input type="file" name="" id="file" style={{ display: "none" }} />
          <label htmlFor="file"></label>
          <img src={media} alt="" />
          <button>Send</button>
        </div>
      </div>
    </>
  );
};

export default Input;
