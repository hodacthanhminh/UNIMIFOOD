import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Ava from '../../assets/WOWMINH.png';

// const UserMenu = ({ logout, user, isLoading }) => {
const UserMenu = () => {
  const [show, setShow] = useState(null);
  const handleShow = () => {
    console.log('>>Change show');
    setShow(!show);
  };

  const handleLogout = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  return (
    <div className="user__account">
      <div
        className="dropdown"
        onClick={handleShow}
        onKeyDown={handleShow}
        role="menuitem"
        tabIndex="-1"
      >
        <div className="dropdown-toggle" id="user__dropdown">
          <div className="image">
            <img src={Ava} alt="avatar" />
          </div>
          <span className="name">Thanh Minh</span>
        </div>
        <div className={`dropdown-menu ${show ? 'show' : ''}`}>
          <Link to="/user/history">
            <div className="dropdown-item">Lịch sử đơn hàng</div>
          </Link>
          <Link to="/user/profile">
            <div className="dropdown-item">Thông tin cá nhân</div>
          </Link>
          <div
            className="dropdown-item"
            onClick={handleLogout}
            onKeyDown={handleLogout}
            role="menuitem"
            tabIndex="-1"
          >
            <span> Đăng xuất </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
