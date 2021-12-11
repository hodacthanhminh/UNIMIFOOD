/* eslint-disable react/jsx-wrap-multilines */
// libs
import React from 'react';
import { Card, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
// components
import Item from '../Item';

const MenuItem = ({ menuItems }) => (
  <Card
    title={menuItems.name}
    extra={
      <Button
        icon={<EditOutlined />}
        className="dashboard-menu-card-button"
      >
        Edit
      </Button>
    }
    className="dashboard-menu-item-wrapper"
  >
    <div className="dashboard-menu-item-wrapper-inner">
      {menuItems.items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  </Card>
);

MenuItem.propTypes = {
  menuItems: PropTypes.shape({
    name: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      }),
    ),
  }).isRequired,
};

export default MenuItem;
