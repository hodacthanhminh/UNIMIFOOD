// libs
import React from 'react';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
// components
import StoreOrderCart from '../StoreOrderCart';

const StoreOrderBody = () => (
  <div className="store-order-body-wrapper">
    <div className="store-order-body-wrapper-inner">
      <StoreOrderCart />
      <Button
        className="store-order-body-button"
        icon={<ShoppingCartOutlined />}
      >
        Đặt hàng
      </Button>
    </div>
  </div>
);

export default StoreOrderBody;
