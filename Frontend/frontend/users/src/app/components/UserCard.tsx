import React, { FC } from "react";
import mailIcon from '../assets/mail.svg';
import phoneIcon from '../assets/phone.svg';

interface UserData {
  name: string;
  phone: string;
  email: string;
  address: string;
  position_name: string;
  department: string;
  hire_date: string;
}

interface UserCardProps {
  userData: UserData;
  onHandleShowUser: (userData: UserData) => void;
}

const UserCard: FC<UserCardProps> = ({ userData, onHandleShowUser }) => {
   
  const { name, phone, email } = userData;

  return (
    <>
    <div onClick={() => onHandleShowUser(userData)} tabIndex={0}  className="user-card btn">
      <div className="top-section">
        <h2 className="header-name">{name}</h2>
      </div>
      <div className="middle-section">
        <div className="details">
        <img
          src={phoneIcon}
          alt={'email'}
          className="icon"
        />
          <span className="text">{phone}</span>
        </div>
        <div className="details">
        <img
          src={mailIcon}
          alt={'email'}
          className="icon"
        />
          <span className="text">{email}</span>
        </div>
      </div>
    </div>
   
    </>
  );
};

export default UserCard;
