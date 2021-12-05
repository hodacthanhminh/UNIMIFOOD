// libs
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
// redux
import { AddCart, RemoveCart } from '../../../../actions/store';

const CartItem = ({ cartItem, addCart, removeCart }) => {
  useEffect(() => {}, [cartItem]);

  const handlePlusButton = () => {
    addCart(cartItem.item);
  };
  const handleMinusButton = () => {
    removeCart(cartItem.item);
  };

  const { amount, item } = cartItem;
  return (
    <div className="cart-item-wrapper">
      <div className="cart-item-wrapper-inner">
        <div className="cart-item-avatar">
          <img
            src={`${process.env.REACT_APP_URL}${item.image}`}
            alt={item?.name}
            className="cart-item-avatar-image"
          />
        </div>
        <div className="cart-item-name">{item?.name}</div>
        <div className="cart-item-amount">{amount}</div>
        <div className="cart-item-function">
          <Button
            className="cart-item-button"
            icon={<PlusOutlined />}
            onClick={handlePlusButton}
          />
          <Button
            className="cart-item-button"
            icon={<MinusOutlined />}
            onClick={handleMinusButton}
          />
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    amount: PropTypes.number,
    item: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    }),
  }).isRequired,
  addCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addCart: AddCart,
  removeCart: RemoveCart,
};

export default connect(null, mapDispatchToProps)(CartItem);
