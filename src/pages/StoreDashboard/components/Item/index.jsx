// libs
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
// components
import ModuleUpdateItem from '../ModuleUpdateItem';
// redux
import { UpdateItem } from '../../../../actions/storecontrol';

const Item = ({ item, updateItem }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [initialData] = useState({
    name: item.name,
    is_active: item.is_active,
    price: item.price,
  });

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onCreate = (values) => {
    let createForm = null;
    if (values.name !== item.name) {
      createForm = { name: values.name };
    }
    if (values.is_active !== item.is_active) {
      createForm = { ...createForm, is_active: values.is_active };
    }
    if (createForm) updateItem(createForm, item.id);
    setIsModalVisible(false);
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
            onClick={showModal}
          />
          <Button
            className="dashboard-item-button"
            icon={<DeleteFilled />}
            size="small"
          />
        </div>
      </div>
      <ModuleUpdateItem
        visible={isModalVisible}
        onCreate={onCreate}
        onCancel={handleCancel}
        formData={initialData}
      />
    </div>
  );
};

Item.defaultProps = {
  item: null,
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    is_active: PropTypes.bool,
  }),
  updateItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  updateItem: UpdateItem,
};

export default connect(null, mapDispatchToProps)(Item);
