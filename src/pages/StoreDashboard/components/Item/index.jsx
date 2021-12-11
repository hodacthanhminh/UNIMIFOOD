// libs
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';

const Item = ({ item }) => {
  const handleOnClick = () => {
    console.log(item);
  };

  return (
    <div className="dashboard-item-wrapper">
      <div className="dashboard-item-wrapper-inner">
        <div className="dashboard-item-avatar">
          <img
            src={`${process.env.REACT_APP_URL}${item.image}`}
            alt={item?.name}
            className="dashboard-item-avatar-image"
          />
        </div>
        <div className="dashboard-item-name">{item?.name}</div>
        <div className="dashboard-item-price">
          {item?.price}
          <span>đ</span>
        </div>
        <div className="dashboard-item-function">
          <Button
            className="dashboard-item-button"
            icon={<EditFilled />}
            size="small"
            onClick={handleOnClick}
          />
          <Button
            className="dashboard-item-button"
            icon={<DeleteFilled />}
            size="small"
            onClick={handleOnClick}
          />
        </div>
      </div>
    </div>
  );
};

Item.defaultProps = {
  item: null,
};

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }),
};

const mapDispatchToProps = {};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
