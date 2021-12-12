import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form, Modal, Input, Alert } from 'antd';

const ModuleOrder = ({ visible, onCreate, onCancel }) => {
  const formRef = useRef(null);
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Confirmed order"
      okText="Comfirmed"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onCreate(values);
            form.resetFields();
          })
          .catch(() => {});
      }}
    >
      <Alert
        message="Please enter your address to comfirm order"
        type="info"
        showIcon
      />
      <Form form={form} layout="vertical" ref={formRef}>
        <Form.Item
          label="Adress"
          name="customer_address"
          rules={[
            { required: true, message: 'Please input your address!' },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

ModuleOrder.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ModuleOrder;
