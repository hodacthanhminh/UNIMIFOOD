// libs
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Checkbox, Space, Button, Divider } from 'antd';
import {
  FacebookFilled,
  GoogleCircleFilled,
} from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// redux
import { Login } from '../../../../actions/auth';

const LoginForm = ({ loginAction, isAuth }) => {
  const [form, setForm] = useState({
    email: null,
    password: null,
  });

  if (isAuth) return <Redirect to="/" />;

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit = () => {
    loginAction(form);
  };

  return (
    <div className="login-form-wrapper">
      <Space
        direction="vertical"
        className="login-form-wrapper-inner"
      >
        <h3 className="login-form-title">Đăng nhập </h3>
        <Input
          className="login-form-input"
          placeholder="Email / tên đăng nhập"
          name="email"
          onChange={handleOnChange}
        />
        <Input.Password
          className="login-form-input"
          placeholder="Mật khẩu"
          name="password"
          onChange={handleOnChange}
        />
        <div className="login-form-functional">
          <Checkbox>Nhớ Tôi</Checkbox>
          <Link className="login-form-forgot" to="/account/forgot">
            Quên mật khẩu
          </Link>
        </div>
        <Button
          className="login-form-submit"
          onClick={handleOnSubmit}
        >
          Đăng nhập
        </Button>
        <Divider className="login-form-divider">HOẶC</Divider>
        <div className="login-form-functional">
          <Button
            className="login-form-facebook"
            icon={<FacebookFilled />}
          >
            Facebook
          </Button>
          <Button
            className="login-form-google"
            icon={<GoogleCircleFilled />}
          >
            Google
          </Button>
        </div>
        <div className="login-form-register">
          <span> Bạn mới đến Unimi? </span>
          <span>
            <Link
              to="/account/register"
              className="form-change-label"
            >
              Đăng ký
            </Link>
          </span>
        </div>
      </Space>
    </div>
  );
};

LoginForm.propTypes = {
  loginAction: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
};

LoginForm.defaultProps = { isAuth: null };

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  loginAction: Login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
