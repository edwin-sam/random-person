import React, { useState, useEffect } from "react";
import { getRandomUser } from "./actions/randomUserActions";
import "./faceCard.css";
import User from "../../images/user.png";
import Email from "../../images/envelope-open.png";
import Calendar from "../../images/calendar.png";
import Address from "../../images/map.png";
import Phone from "../../images/call-incoming.png";
import Password from "../../images/lock.png";

const FaceCard = () => {
  const [randomUser, setRandomUser] = useState();
  const [userInfo, setUserInfo] = useState();
  const [infoPretext, setInfoPretext] = useState('My name is');

  useEffect(() => {
    getRandomUser().then((user) => {
      setRandomUser(user.results[0]);
      setUserInfo(user.results[0].name.first + ' ' + user.results[0].name.last);
      setInfoPretext(infoPretext);
    });
  }, []);

  return (
    <div className="card-body">
      <div className="image-div">
        <img className="image" src={randomUser ? randomUser.picture.large: ''} alt="" />
      </div>

      <div className="user-info">
        <p>{infoPretext}</p>
        <h1>{randomUser ? userInfo : ''}</h1>
      </div>

      <div className="icons-container">
        <img className="icons" src={User} alt="user" onClick={() => {
          setUserInfo(randomUser.name.first + ' ' + randomUser.name.last);
          setInfoPretext('My name is');
        }}/>
        <img className="icons" src={Email} alt="email" onClick={() => {
          setUserInfo(randomUser.email);
          setInfoPretext('My email is');
        }}/>
        <img className="icons" src={Calendar} alt="birthday" onClick={() => {
          setUserInfo(randomUser.dob.age);
          setInfoPretext('My age is');
        }}/>
        <img className="icons" src={Address} alt="address" onClick={() => {
          setUserInfo(randomUser.location.street.number + ' ' + randomUser.location.street.name);
          setInfoPretext('My street is');
        }}/>
        <img className="icons" src={Phone} alt="phone" onClick={() => {
          setUserInfo(randomUser.phone);
          setInfoPretext('My phone is');
        }}/>
        <img className="icons" src={Password} alt="password" onClick={() => {
          setUserInfo(randomUser.login.password);
          setInfoPretext('My password is');
        }}/>
      </div>

      <div className="button-container">
        <button 
          onClick={() => {
            getRandomUser().then((user) => {
              setRandomUser(user.results[0]);
              setUserInfo(user.results[0].name.first + ' ' + user.results[0].name.last);
              setInfoPretext('My name is');
            });
          }} className="random-button">{randomUser ? 'Random User' : 'Loading...'}</button>
      </div>
    </div>
  );
};

export default FaceCard;
