// libs
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Divider } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
// components
import StoreOrderCart from '../StoreOrderCart';

const StoreOrderBody = ({ totalCart }) => {
  useEffect(() => {}, [totalCart]);
  return (
    <div className="store-order-body-wrapper">
      <div className="store-order-body-wrapper-inner">
        <StoreOrderCart />
        <Divider />
        <div className="store-order-body-total">
          <span className="store-order-body-total-label"> Total</span>
          <span className="store-order-body-total-price">
            {totalCart}
            <span>đ</span>
          </span>
        </div>
        <Button
          className="store-order-body-button"
          icon={<ShoppingCartOutlined />}
        >
          Đặt hàng
        </Button>
      </div>
    </div>
  );
};

StoreOrderBody.propTypes = {
  totalCart: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  totalCart: state.storeid.totalCart,
});

export default connect(mapStateToProps, null)(StoreOrderBody);
