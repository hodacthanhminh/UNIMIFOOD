// libs
import React, { useState } from 'react';
import {
  Input,
  Checkbox,
  Space,
  Button,
  Divider,
  Select,
} from 'antd';
import {
  FacebookFilled,
  GoogleCircleFilled,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [form, setForm] = useState({
    username: null,
    password: null,
    role: null,
  });

  const { Option } = Select;

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnChangeRole = (respone) => {
    setForm({
      ...form,
      role: respone.value,
    });
  };

  return (
    <div className="login-form-wrapper">
      <Space
        direction="vertical"
        className="login-form-wrapper-inner"
      >
        <div className="login-form-heading">
          <h3 className="login-form-title">Đăng ký </h3>
          <Select
            className="login-form-select "
            labelInValue
            defaultValue={{ value: 'customer' }}
            style={{ width: 120 }}
            onChange={handleOnChangeRole}
          >
            <Option value="customer">Customer</Option>
            <Option value="store">Store</Option>
            <Option value="shipper"> Shipper</Option>
          </Select>
        </div>
        <Input
          className="login-form-input"
          placeholder="Email / tên đăng nhập"
          name="username"
          onChange={handleOnChange}
        />
        <Input.Password
          className="login-form-input"
          placeholder="Mật khẩu"
          name="password"
          onChange={handleOnChange}
        />
        <Input.Password
          className="login-form-input"
          placeholder="Nhập mật khẩu"
          name="password"
          onChange={handleOnChange}
        />
        <div className="login-form-functional">
          <Checkbox>Nhớ Tôi</Checkbox>
          <Link
            className="login-form-forgot"
            to="/account/forgot"
          >
            Quên mật khẩu
          </Link>
        </div>
        <Button className="login-form-submit">
          Đăng ký
        </Button>
        <Divider className="login-form-divider">
          HOẶC
        </Divider>
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
          <span> Bạn đã có tài khoản Unimi? </span>
          <span>
            <Link
              to="/account/login"
              className="form-change-label"
            >
              Đăng nhập
            </Link>
          </span>
        </div>
      </Space>
    </div>
  );
};
export default RegisterForm;
