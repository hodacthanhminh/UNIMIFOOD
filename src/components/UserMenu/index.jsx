import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Logout } from '../../actions/auth';

// const UserMenu = ({ logout, user, isLoading }) => {
const UserMenu = ({ LogoutAction, user, isLoading }) => {
  const [show, setShow] = useState(null);
  const handleShow = () => {
    setShow(!show);
  };
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(user);
  }, [user]);
  const handleLogout = () => {
    LogoutAction();
  };
  if (isLoading || userData === null) {
    return <> </>;
  }
  return (
    <div className="user__account">
      <div
        className="dropdown"
        onClick={handleShow}
        role="menuitem"
        tabIndex="-1"
      >
        <div className="dropdown-toggle" id="user__dropdown">
          <div className="image">
            <img
              src={`${process.env.REACT_APP_URL}${userData.avatar}`}
              alt="avatar"
            />
          </div>
          <span className="name">{userData?.username}</span>
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

UserMenu.propTypes = {
  LogoutAction: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    avatar: PropTypes.string,
  }),
  isLoading: PropTypes.bool.isRequired,
};

UserMenu.defaultProps = {
  user: {
    avatar: null,
    username: 'anonymous',
  },
};

const mapDispatchToProps = {
  LogoutAction: Logout,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isLoading: state.auth.isLoadingAccount,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
