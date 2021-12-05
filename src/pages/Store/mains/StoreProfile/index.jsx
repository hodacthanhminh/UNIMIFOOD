// libs
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Rate, Badge } from 'antd';
import {
  DollarOutlined,
  InfoCircleFilled,
  MailFilled,
  PhoneFilled,
} from '@ant-design/icons';
// components
import TagList from '../../../../components/TagList';

const StoreProfile = ({ store }) => {
  useEffect(() => {}, [store]);

  return (
    <div className="store-profile-wrapper">
      <div className="store-profile-wrapper-inner">
        <div className="store-profile-avatar">
          <img
            className="store-profile-avatar-image"
            src={`${process.env.REACT_APP_URL + store.logo}`}
            alt="logo-store"
          />
        </div>
        <div className="store-profile-info">
          <div className="store-profile-info-tag">
            {store?.store_category && (
              <TagList
                className="profile-tag"
                value={store.store_category.slug}
              />
            )}
          </div>
          <div className="store-profile-info-heading">
            <h2 className="store-name">{store?.name}</h2>
            <span className="store-address">{store?.address}</span>
            <br />
            <Badge
              status="success"
              text="Mở cửa"
              className="store-status"
            />
          </div>
          <div className="store-profile-info-description item-row">
            <InfoCircleFilled />
            <span className="store-description-label">
              {store?.description}
            </span>
          </div>
          <Rate allowHalf defaultValue={2.5} className="store-rate" />
          <div className="store-profile-info-contact">
            <div className="store-price item-row">
              <DollarOutlined />
              10000 - 50000
            </div>
            <div className="store-email item-row">
              <MailFilled />
              {store?.email}
            </div>
            <div className="store-phone item-row">
              <PhoneFilled />
              {store?.phone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StoreProfile.propTypes = {
  store: PropTypes.shape({
    id: PropTypes.number,
    logo: PropTypes.string,
    description: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    store_category: PropTypes.shape({
      slug: PropTypes.string,
    }),
    address: PropTypes.string,
    name: PropTypes.string,
  }),
};

StoreProfile.defaultProps = {
  store: null,
};

const mapStateToProps = (state) => ({
  store: state.storeid.storeId,
});

export default connect(mapStateToProps, null)(StoreProfile);
