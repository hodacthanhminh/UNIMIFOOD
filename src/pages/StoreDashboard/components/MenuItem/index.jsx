/* eslint-disable react/jsx-wrap-multilines */
// libs
import React, { useState } from 'react';
import { Card, Button, Badge } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// components
import Item from '../Item';
import { UpdateMenu } from '../../../../actions/storecontrol';
import ModuleUpdateMenu from '../ModuleUpdateMenu';

const MenuItem = ({ menuItems, updateMenu }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [initialData] = useState({
    name: menuItems.name,
    is_active: menuItems.is_active,
  });

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onCreate = (values) => {
    let createForm = null;
    if (values.name !== menuItems.name) {
      createForm = { name: values.name };
    }
    if (values.is_active !== menuItems.is_active) {
      createForm = { ...createForm, is_active: values.is_active };
    }
    if (createForm) updateMenu(createForm, menuItems.id);
    setIsModalVisible(false);
  };
  return (
    <div className="menu-item-wrapper">
      <Badge.Ribbon
        text={menuItems.is_active ? 'Avalible' : 'Not Available'}
        color={menuItems.is_active ? 'green' : 'red'}
      >
        <Card
          title={
            <>
              {menuItems.name}
              <Button
                icon={<EditOutlined />}
                className="dashboard-menu-card-button"
                onClick={showModal}
              />
            </>
          }
          className="dashboard-menu-item-wrapper"
        >
          <div className="dashboard-menu-item-wrapper-inner">
            {menuItems?.items.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </Card>
      </Badge.Ribbon>
      <ModuleUpdateMenu
        visible={isModalVisible}
        onCreate={onCreate}
        onCancel={handleCancel}
        formData={initialData}
      />
    </div>
  );
};

MenuItem.propTypes = {
  updateMenu: PropTypes.func.isRequired,
  menuItems: PropTypes.shape({
    is_active: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.number,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      }),
    ),
  }).isRequired,
};

const mapDispatchToProps = {
  updateMenu: UpdateMenu,
};

export default connect(null, mapDispatchToProps)(MenuItem);
