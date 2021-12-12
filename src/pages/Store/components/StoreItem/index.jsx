// libs
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { AddCart } from '../../../../actions/store';

const StoreItem = ({ storeItem, isAuth, addCart }) => {
  const history = useHistory();
  const handleOnClick = () => {
    if (isAuth) {
      addCart(storeItem);
    } else {
      const path = '/account/login';
      history.push(path);
    }
  };

  return (
    <div className="store-item-wrapper">
      <div className="store-item-wrapper-inner">
        <div className="store-item-avatar">
          <img
            src={`${process.env.REACT_APP_URL}${storeItem.image}`}
            alt={storeItem?.name}
            className="store-item-avatar-image"
          />
        </div>
        <div className="store-item-name">{storeItem?.name}</div>
        <div className="store-item-price">
          {storeItem?.price}
          <span>đ</span>
        </div>
        <Button
          disabled={!storeItem.is_active}
          className="store-item-button"
          icon={<PlusOutlined />}
          size="small"
          onClick={handleOnClick}
        />
      </div>
    </div>
  );
};

StoreItem.defaultProps = {
  storeItem: null,
  isAuth: false,
};

StoreItem.propTypes = {
  storeItem: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    is_active: PropTypes.bool,
  }),
  addCart: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
};

const mapDispatchToProps = {
  addCart: AddCart,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoreItem);
