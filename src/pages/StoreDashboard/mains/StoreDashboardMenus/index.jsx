// libs
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Empty,
  Form,
  Modal,
  Input,
  Space,
  Select,
} from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
// components
import Loading from '../../../../components/Loading';
import MenuItem from '../../components/MenuItem';
// redux
import { CreateMenu } from '../../../../actions/storecontrol';
// dataSources
import { isActive } from '../../../../dataSources/isActive';

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const formRef = useRef(null);
  const [formControl] = Form.useForm();
  useEffect(() => {}, [visible]);

  return (
    <Modal
      visible={visible}
      title="Create menu"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        formControl
          .validateFields()
          .then((values) => {
            onCreate(values);
            formControl.resetFields();
          })
          .catch(() => {});
      }}
    >
      <Form
        form={formControl}
        layout="vertical"
        ref={formRef}
        name="create-menu-item"
      >
        <Form.Item
          name="name"
          label="Menu name"
          rules={[{ required: true, message: 'Name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="is_active" label="Menu status">
          <Select placeholder="Menu status">
            {isActive.map((option) => (
              <Select.Option value={option.value} key={option.id}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <p>Menus Item</p>
        <Form.List name="items" label="Menu items">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: 'flex', marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, 'name']}
                    fieldKey={[fieldKey, 'name']}
                    rules={[{ required: true, message: 'Name' }]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'price']}
                    fieldKey={[fieldKey, 'price']}
                    rules={[{ required: true, message: 'Price' }]}
                  >
                    <Input placeholder="Price" />
                  </Form.Item>
                  <Form.Item
                    name={[name, 'is_active']}
                    fieldKey={[fieldKey, 'is_active']}
                  >
                    <Select placeholder="Item status">
                      <Select.Option value>Available</Select.Option>
                      <Select.Option>Not Available</Select.Option>
                    </Select>
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </Modal>
  );
};

CollectionCreateForm.defaultProps = {
  formData: null,
};

CollectionCreateForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  formData: PropTypes.shape({}),
};

const StoreDashboardMenus = ({ isLoading, menus, createMenu }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onCreate = (values) => {
    const createForm = new FormData();
    if (values?.items) createForm.append('items', values.items);
    if (values.name) createForm.append('name', values.name);
    if (values?.is_active) {
      createForm.append('is_active', values.is_active);
    }
    setIsModalVisible(false);
    createMenu(values);
  };

  useEffect(() => {}, [menus]);

  return (
    <div className="dashboard-tab-wrapper">
      <Loading isLoading={isLoading} isError={false}>
        <div className="dashboard-tab-wrapper-inner">
          <div className="dashboard-menus-wrapper">
            <div className="dashboard-menus-wrapper-inner">
              <div className="dashboard-menus-create-wrapper">
                <Button
                  icon={<PlusOutlined />}
                  className="dashboard-menus-create-button"
                  onClick={showModal}
                >
                  Create menu
                </Button>
              </div>
              <div className="dashboard-menus-body">
                {menus.length === 0 && (
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )}
                {menus.map((menu) => (
                  <MenuItem key={menu.id} menuItems={menu} />
                ))}
              </div>
            </div>
          </div>
          <CollectionCreateForm
            visible={isModalVisible}
            onCreate={onCreate}
            onCancel={handleCancel}
          />
        </div>
      </Loading>
    </div>
  );
};

StoreDashboardMenus.defaultProps = {
  menus: null,
};

StoreDashboardMenus.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  menus: PropTypes.arrayOf(PropTypes.shape({})),
  createMenu: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.storecontrol.isLoadingMenus,
  isError: state.storecontrol.isError,
  menus: state.storecontrol.storeMenus,
});

const mapDispatchToProps = {
  createMenu: CreateMenu,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoreDashboardMenus);
