import React, { useState } from "react";
import './faceCard.css';
import User from '../../images/user.png';
import Email from '../../images/envelope-open.png';
import Calendar from '../../images/calendar.png';
import Address from '../../images/map.png';
import Phone from '../../images/call-incoming.png';
import Password from '../../images/lock.png';

const FaceCard = () => {

  const [randomUser, setRandomUser] = useState();

  return (
    <div className="card-body">
      <div className="image-div">
        <img className="" src="" alt=""/>
      </div>

      <div className="user-info">
        <p>My name is</p>
        <h1>Tony Matterhorn</h1>
      </div>

      <div className="icons-container">
        <img className="icons" src={User} alt="user" />
        <img className="icons" src={Email} alt="email" />
        <img className="icons" src={Calendar} alt="birthday" />
        <img className="icons" src={Address} alt="address" />
        <img className="icons" src={Phone} alt="phone" />
        <img className="icons" src={Password} alt="password"/>
      </div>

      <div className="button-container">
        <button className="random-button">Random User</button>
      </div>
    </div>
  );
};

export default FaceCard;
