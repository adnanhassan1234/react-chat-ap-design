import React from 'react';
import "./chatt.css";
import video from '../../assets/image/video (1).svg'
import user from '../../assets/image/user-plus (2).svg'
import more from '../../assets/image/more-horizontal (1).svg'
import Messages from '../Messages';
import Input from '../Input';

const Chatt = () => {
  return (
    <div className='chatts'>
      <div className="chatInfo">
        <p> {""} <span>  Maria Aslam</span></p>
        <div className="chattIcon">
          <img src={video} alt="" />
          <img src={user} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chatt;