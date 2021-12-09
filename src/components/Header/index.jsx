// libs
import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Drawer, Button, List } from 'antd';
import { BarsOutlined } from '@ant-design/icons';
// redux thunk
import { LoadUser, Logout } from '../../actions/auth';
// components
import UserMenu from '../UserMenu';

const AccountLogin = () => (
  <Link to="/account/login" className="btn btn-primary">
    Đăng nhập
  </Link>
);

const Header = ({ isAuth, loadUserAction, logout }) => {
  useEffect(() => {
    loadUserAction();
  }, []);

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-main">
          <Link className="header-logo" to="/">
            Unimi
          </Link>
          <div className="header-menu">
            <NavLink
              className="menu-link"
              activeClassName="active"
              to="/"
              exact
            >
              Trang chủ
            </NavLink>
            <NavLink className="menu-link" to="/about">
              About
            </NavLink>
            <div className="menu-auth">
              {isAuth ? <UserMenu /> : <AccountLogin />}
            </div>
          </div>
          <div className="header-drawer-menu">
            <Button
              type="primary"
              onClick={showDrawer}
              icon={<BarsOutlined />}
              className="header-drawer-button"
            />
            <Drawer
              title="Menu"
              placement="right"
              onClose={onClose}
              visible={visible}
              className="header-drawer"
              footer={
                isAuth ? (
                  <Button
                    onClick={logout}
                    className="drawer-logout-btn"
                  >
                    Logout
                  </Button>
                ) : (
                  <AccountLogin />
                )
              }
            >
              <List
                itemLayout="horizontal"
                className="drawer-list-menu"
              >
                {isAuth && (
                  <List.Item>
                    <UserMenu />
                  </List.Item>
                )}
                <List.Item>
                  <NavLink
                    className="menu-link"
                    activeClassName="active"
                    to="/"
                    exact
                  >
                    Trang chủ
                  </NavLink>
                </List.Item>
                <List.Item>
                  <NavLink className="menu-link" to="/about">
                    About
                  </NavLink>
                </List.Item>
              </List>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  isAuth: PropTypes.bool,
  loadUserAction: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};
Header.defaultProps = {
  isAuth: null,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  loadUserAction: LoadUser,
  logout: Logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
