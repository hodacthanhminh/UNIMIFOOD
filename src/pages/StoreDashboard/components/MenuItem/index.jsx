/* eslint-disable react/jsx-wrap-multilines */
// libs
import React, { useState } from 'react';
import { Card, Button, Badge } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// components
import Item from '../Item';
import {
  UpdateMenu,
  CreateItem,
} from '../../../../actions/storecontrol';
import ModuleUpdateMenu from '../ModuleUpdateMenu';
import ModuleCreateItem from '../ModuleCreateItem';

const MenuItem = ({ menuItems, updateMenu, createItem }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalCreateItem, setModalCreateItem] = useState(false);
  const [initialData] = useState({
    name: menuItems.name,
    is_active: menuItems.is_active,
  });

  const showModalCreateItem = () => setModalCreateItem(true);
  const handleCancelItem = () => {
    setModalCreateItem(false);
  };
  const onCreateItem = (values) => {
    const createForm = new FormData();
    createForm.append('name', values.name);
    createForm.append('is_active', values.is_active);
    createForm.append('price', values.price);
    createForm.append('menu', menuItems.id);
    if (values.image !== null) {
      createForm.append('image', values.image.file.originFileObj);
    }
    if (!createForm.entries().next().done) {
      createItem(createForm);
    }
    setModalCreateItem(false);
  };

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
            <div className="dashboard-menu-item-list">
              {menuItems?.items.map((item) => (
                <Item key={item.id} item={item} />
              ))}
            </div>
            <Button
              icon={<PlusOutlined />}
              className="dashboard-menu-item-add-button"
              onClick={showModalCreateItem}
            >
              Add Item
            </Button>
          </div>
        </Card>
      </Badge.Ribbon>
      <ModuleUpdateMenu
        visible={isModalVisible}
        onCreate={onCreate}
        onCancel={handleCancel}
        formData={initialData}
      />
      <ModuleCreateItem
        visible={isModalCreateItem}
        onCreate={onCreateItem}
        onCancel={handleCancelItem}
      />
    </div>
  );
};

MenuItem.propTypes = {
  updateMenu: PropTypes.func.isRequired,
  createItem: PropTypes.func.isRequired,
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
  createItem: CreateItem,
};

export default connect(null, mapDispatchToProps)(MenuItem);
