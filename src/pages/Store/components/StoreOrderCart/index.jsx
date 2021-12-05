// libs
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Empty } from 'antd';
// components
import CardItem from '../CartItem';

const StoreOrderCart = ({ cart }) => {
  useEffect(() => {}, [cart]);
  return (
    <div className="store-order-cart-wrapper">
      <div className="store-order-cart-wrapper-inner">
        {cart.length === 0 && (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
        {cart &&
          cart.map((cartItem) => (
            <CardItem key={cartItem.item.id} cartItem={cartItem} />
          ))}
      </div>
    </div>
  );
};

StoreOrderCart.defaultProps = {
  cart: null,
};

StoreOrderCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapStateToProps = (state) => ({
  cart: state.storeid.cart,
});

export default connect(mapStateToProps, null)(StoreOrderCart);
