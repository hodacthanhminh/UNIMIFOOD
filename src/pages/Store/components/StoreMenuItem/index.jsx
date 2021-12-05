// libs
import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';
// components
import StoreItem from '../StoreItem';

const StoreMenuItem = ({ menuItem }) => (
  <Card title={menuItem.name} className="store-menu-item-wrapper">
    <div className="store-menu-item-wrapper-inner">
      {menuItem.items.map((item) => (
        <StoreItem key={item.id} storeItem={item} />
      ))}
    </div>
  </Card>
);

StoreMenuItem.propTypes = {
  menuItem: PropTypes.shape({
    name: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      }),
    ),
  }).isRequired,
};

export default StoreMenuItem;
