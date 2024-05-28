import React, { FC } from "react";

interface UserData {
  name: string;
  phone: string;
  email: string;
  address: string;
  position_name: string;
  department: string;
  hire_date: string;
}

interface UserCardFullProps {
  userData: UserData;
  handleShowOvelay: () => void;
}

const UserCardFull: FC<UserCardFullProps> = ({
  userData,
  handleShowOvelay,
}) => {
  const { name, phone, email, address, position_name, department, hire_date } =
    userData;

  return (
    <div className="user-overlay">
      <div className="user-card full">
        <div className="top-section">
          <h2 className="header-name">{name}</h2>{" "}
          <button onClick={handleShowOvelay} className="text">
            X
          </button>
        </div>
        <div className="middle-section">
          <div className="details">
            <span className="title">Телефон:</span>
            <span className="text">{phone}</span>
          </div>
          <div className="details">
            <span className="title">Почта:</span>
            <span className="text">{email}</span>
          </div>
          <div className="details">
            <span className="title">Дата приема:</span>
            <span className="text">{hire_date}</span>
          </div>
          <div className="details">
            <span className="title">Должность:</span>
            <span className="text">{position_name}</span>
          </div>
          <div className="details">
            <span className="title">Подразделение:</span>
            <span className="text">{department}</span>
          </div>
        </div>
        <div className="bottom-section">
          <span className="title">Дополнительная информация:</span>
          <p className="text">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCardFull;
