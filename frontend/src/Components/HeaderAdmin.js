import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import "../App.css";

const HeaderAdmin = ({ notifications = 0 }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleBellClick = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="header-admin-container">
      <div className="header-left"></div>
      <div className="header-right">
        <div className="icon-wrapper notification-icon-wrapper" onClick={handleBellClick}>
          <FaBell size={24} />
          {notifications > 0 && (
            <span className="notification-badge">{notifications}</span>
          )}
        </div>
        <div>
          <img src="/path/to/logo.png" alt="profil-small" className="logo-profil-small" />
        </div>
      </div>
      {isPopupVisible && (
        <div className="notification-popup">
          <p>You have {notifications} new notifications</p>
          {/* Add more content here as needed */}
        </div>
      )}
      {isPopupVisible && <div className="popup-backdrop" onClick={handleBellClick}></div>}
    </div>
  );
};

export default HeaderAdmin;
