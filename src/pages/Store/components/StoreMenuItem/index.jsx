// libs
import React from 'react';
import { Badge, Card } from 'antd';
import PropTypes from 'prop-types';
// components
import StoreItem from '../StoreItem';

const StoreMenuItem = ({ menuItem }) => (
  <Badge.Ribbon
    text={menuItem.is_active ? 'Avalible' : 'Not Available'}
    color={menuItem.is_active ? 'green' : 'red'}
  >
    <Card title={menuItem.name} className="store-menu-item-wrapper">
      <div className="store-menu-item-wrapper-inner">
        {menuItem.items.map((item) => (
          <StoreItem key={item.id} storeItem={item} />
        ))}
      </div>
    </Card>
  </Badge.Ribbon>
);

StoreMenuItem.propTypes = {
  menuItem: PropTypes.shape({
    name: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      }),
    ),
    is_active: PropTypes.bool,
  }).isRequired,
};

export default StoreMenuItem;
