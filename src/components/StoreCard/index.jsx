// libs
import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import { Link } from 'react-router-dom';
// components
import TagList from '../TagList';

const StoreCard = ({
  storeImage,
  storeAltImage,
  storeName,
  storeAddress,
  storeId,
  storeCategory,
}) => (
  <Link className="store-card-wrapper" to={`/store/${storeId}`}>
    <div className="store-card-wrapper-inner">
      <div className="store-card-image-wrapper">
        <img
          className="store-card-image"
          src={`${process.env.REACT_APP_URL + storeImage}`}
          alt={storeAltImage}
        />
      </div>
      <div className="store-card-content">
        <div className="store-card-info">
          <h4 className="store-card-name" title={storeName}>
            {storeName}
          </h4>
          <div className="store-card-address" title={storeAddress}>
            {storeAddress}
          </div>
        </div>
        <Divider className="store-card-divider" />
        <div className="store-card-tag">
          <TagList
            className="store-card-type"
            value={storeCategory}
          />
        </div>
      </div>
    </div>
  </Link>
);

StoreCard.propTypes = {
  storeImage: PropTypes.string,
  storeAltImage: PropTypes.string,
  storeName: PropTypes.string,
  storeAddress: PropTypes.string,
  storeId: PropTypes.number,
  storeCategory: PropTypes.string,
};

StoreCard.defaultProps = {
  storeImage: null,
  storeAltImage: 'store Image',
  storeName: 'Default Store',
  storeAddress: 'Default Address',
  storeId: 1,
  storeCategory: 'defaut',
};

export default StoreCard;
