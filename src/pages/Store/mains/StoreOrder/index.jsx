// libs
import React from 'react';
// import PropTypes from 'prop-types';
// components
import StoreOrderBody from '../../components/StoreOrderBody';

const StoreOrder = () => (
  <div className="store-order-wrapper">
    <div className="store-order-wrapper-inner">
      <div className="store-order-heading">Giỏ hàng</div>
      <StoreOrderBody />
    </div>
  </div>
);

export default StoreOrder;
