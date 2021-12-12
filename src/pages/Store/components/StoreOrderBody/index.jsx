// libs
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Divider } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
// components
import StoreOrderCart from '../StoreOrderCart';
import ModuleOrder from '../ModuleOrder';
// redux
import { CreateOrder } from '../../../../actions/order';

const StoreOrderBody = ({
  totalCart,
  cart,
  storeId,
  createOrder,
}) => {
  useEffect(() => {}, [totalCart]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onCreate = (values) => {
    if (cart.length > 0) {
      const createForm = {
        store: storeId.id,
        customer_address: values.customer_address,
        order_items: cart.map((cartItem) => ({
          item: cartItem.item.id,
          quantity: cartItem.amount,
        })),
      };
      createOrder(createForm);
    }
    setIsModalVisible(false);
  };
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
          onClick={showModal}
        >
          Đặt hàng
        </Button>
      </div>
      <ModuleOrder
        visible={isModalVisible}
        onCreate={onCreate}
        onCancel={handleCancel}
      />
    </div>
  );
};

StoreOrderBody.propTypes = {
  totalCart: PropTypes.number.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      amount: PropTypes.number,
      menu: PropTypes.number,
    }),
  ).isRequired,
  storeId: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  createOrder: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  totalCart: state.storeid.totalCart,
  cart: state.storeid.cart,
  storeId: state.storeid.storeId,
});

const mapDispatchToProps = {
  createOrder: CreateOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoreOrderBody);
