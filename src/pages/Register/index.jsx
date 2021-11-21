import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FacebookFilled, GoogleCircleFilled } from '@ant-design/icons';
// other
import Svg4 from '../../assets/Take Away-pana.svg';

const Register = () => {
  const initialData = Object.freeze({
    email: '',
    password: '',
    repassword: '',
    account_role: 'customer',
  });
  const [data, setData] = useState(initialData);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login__main">
          <div className="login__left-side">
            <img src={Svg4} alt="" className="login__image" />
          </div>
          <div className="login__right-side">
            <h1 className="login__heading">Đăng ký</h1>
            <div className="login__form">
              <input
                type="email"
                name="email"
                className="login__form-input mt-16"
                placeholder="Email / Tên đăng nhập "
                value={data.email}
                onChange={onChange}
              />
              <input
                type="password"
                className="login__form-input mt-16"
                placeholder="Mật khẩu "
                name="password"
                value={data.password}
                onChange={onChange}
              />
              <input
                type="password"
                className="login__form-input mt-16"
                placeholder="Nhập lại mật khẩu "
                name="repassword"
                value={data.repassword}
                onChange={onChange}
              />
              <div className="login__form-help mt-8">
                <div className="login__checkbox">
                  <label
                    htmlFor="remember-checkbox"
                    className="login__checkbox-label ml-4"
                  >
                    <input type="checkbox" id="remember-checkbox" />
                  </label>
                  Nhớ tôi
                </div>
                <Link
                  to="/user/forgotpassword"
                  className="login__forgotpassword"
                >
                  Quên mật khẩu?
                </Link>
              </div>
              <button
                type="button"
                className="btn btn-secondary mt-16"
                onClick={onSubmit}
              >
                Đăng ký
              </button>
              <div className="login__divider mt-16">
                <div className="login__divider-line" />
                <span className="login__divider-text">Hoặc</span>
                <div className="login__divider-line" />
              </div>
              <div className="login__another mt-16">
                <a href="www.google.com" className="btn btn-facebook">
                  <FacebookFilled className="social-icon facebook-icon" />
                  Facebook
                </a>
                <a href="www.goolge.com" className="btn btn-google">
                  <GoogleCircleFilled className="social-icon google-icon" />
                  Google
                </a>
              </div>
              <div className="login__policy mt-16">
                <p>
                  Bằng việc đăng kí, bạn đã đồng ý với Unimi về
                  <br />
                  <Link to="/login" className="login__policy-text">
                    Điều khoản dịch vụ
                  </Link>
                  {' & '}
                  <Link to="/login" className="login__policy-text">
                    Chính sách bảo mật
                  </Link>
                </p>
              </div>
              <div className="login__register mt-16">
                <span>Bạn đã có tài khoản Unimi? </span>
                <Link to="/account/login" className="login__register-text">
                  Đăng nhập
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
