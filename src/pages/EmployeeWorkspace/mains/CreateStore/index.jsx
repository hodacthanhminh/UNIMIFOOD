// libs
import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';
// redux
import { connect } from 'react-redux';
import { CreateNewStore } from '../../../../actions/employee';

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch(() => {});
      }}
    >
      <Form form={form}>
        <Form.Item
          name="name"
          label="Store name"
          rules={[
            {
              required: true,
              message: 'Please input the name of store!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Store email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Store phone"
          rules={[
            {
              required: true,
              message: 'Please input the phone of store!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CreateStore = ({ createStore }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onCreate = (values) => {
    createStore(values);
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Store
      </Button>
      <CollectionCreateForm
        visible={isModalVisible}
        onCreate={onCreate}
        onCancel={handleCancel}
      />
    </>
  );
};

CollectionCreateForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

CreateStore.propTypes = {
  createStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  createStore: CreateNewStore,
};

export default connect(null, mapDispatchToProps)(CreateStore);
