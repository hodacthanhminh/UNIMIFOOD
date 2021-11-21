// libs
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// components
import UserMenu from '../UserMenu';
// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

// const Login = () => (
//   <Link to="/login" className="btn btn-primary">
//     Đăng nhập
//   </Link>
// );

// const Header = ({ isAuthenticated }) => {
const Header = () => (
  <div className="header">
    <div className="container">
      <div className="header__main">
        <Link className="header__logo" to="/">
          Unimi
        </Link>
        <div className="header__menu">
          <NavLink className="menu__link" activeClassName="active" to="/" exact>
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
            <UserMenu />
            {/* <Login /> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
// export default connect(mapStateToProps, null)(Header);
