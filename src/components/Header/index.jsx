// libs
import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// redux thunk
import { LoadUser } from '../../actions/auth';
// components
import UserMenu from '../UserMenu';

const AccountLogin = () => (
  <Link to="/account/login" className="btn btn-primary">
    Đăng nhập
  </Link>
);

const Header = ({ isAuth, loadUserAction }) => {
  useEffect(() => {
    loadUserAction();
  }, []);
  return (
    <div className="header">
      <div className="container">
        <div className="header__main">
          <Link className="header__logo" to="/">
            Unimi
          </Link>
          <div className="header__menu">
            <NavLink
              className="menu__link"
              activeClassName="active"
              to="/"
              exact
            >
              Trang chủ
            </NavLink>
            <NavLink className="menu__link" to="/about">
              About
            </NavLink>
            <NavLink className="menu__link" to="/store">
              Cửa hàng
            </NavLink>
            <NavLink className="menu__link" to="/register">
              Thành viên
            </NavLink>
            <div className="menu__auth">
              {isAuth ? <UserMenu /> : <AccountLogin />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  isAuth: PropTypes.bool,
  loadUserAction: PropTypes.func.isRequired,
};
Header.defaultProps = {
  isAuth: null,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  loadUserAction: LoadUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
