import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'antd';
import { connect } from 'react-redux';
import { Logout } from '../../actions/auth';

const customerMenu = (LogoutAction) => {
  const handleLogout = () => {
    LogoutAction();
  };
  return (
    <Menu className="customer-dropdown-menu">
      <Menu.Item key="1">
        <Link to="/user/history">
          <div className="dropdown-item">Lịch sử đơn hàng</div>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/account/profile">
          <div className="dropdown-item">Thông tin cá nhân</div>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <div
          className="dropdown-item"
          onClick={handleLogout}
          role="menuitem"
          tabIndex="-1"
        >
          Đăng xuất
        </div>
      </Menu.Item>
    </Menu>
  );
};

const employeeMenu = (LogoutAction) => {
  const handleLogout = () => {
    LogoutAction();
  };
  return (
    <Menu className="customer-dropdown-menu">
      <Menu.Item key="1">
        <Link to="/employee">
          <div className="dropdown-item">Quản lý cửa hàng</div>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/account/profile">
          <div className="dropdown-item">Thông tin cá nhân</div>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <div
          className="dropdown-item"
          onClick={handleLogout}
          role="menuitem"
          tabIndex="-1"
        >
          Đăng xuất
        </div>
      </Menu.Item>
    </Menu>
  );
};

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
  if (isLoading || userData === null) {
    return <> </>;
  }
  return (
    <div className="user-account">
      <div
        className="dropdown"
        onClick={handleShow}
        role="menuitem"
        tabIndex="-1"
      >
        <Dropdown
          className="account-dropdown-menu"
          overlay={
            user.account_role === 'customer'
              ? customerMenu(LogoutAction)
              : employeeMenu(LogoutAction)
          }
        >
          <div className="dropdown-toggle" id="user-dropdown">
            <div className="image">
              <img
                src={`${process.env.REACT_APP_URL + userData.avatar}`}
                alt="avatar"
              />
            </div>
            <span className="name">{userData?.first_name}</span>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

UserMenu.propTypes = {
  LogoutAction: PropTypes.func.isRequired,
  user: PropTypes.shape({
    first_name: PropTypes.string,
    avatar: PropTypes.string,
    account_role: PropTypes.string,
  }),
  isLoading: PropTypes.bool.isRequired,
};

UserMenu.defaultProps = {
  user: {
    avatar: null,
    first_name: 'anonymous',
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
