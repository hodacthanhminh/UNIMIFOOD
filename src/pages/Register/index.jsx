// libs
import React from 'react';
// components
import RegisterForm from './mains/RegisterForm';
// other
import Svg4 from '../../assets/Take Away-pana.svg';

const Login = () => (
  <div className="login-wrapper">
    <div className="login-wrapper-inner container">
      <div className="login-image-wrapper">
        <img src={Svg4} alt="" className="login-image" />
      </div>
      <RegisterForm />
    </div>
  </div>
);

export default Login;
