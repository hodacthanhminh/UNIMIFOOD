import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form, Modal, Input, Select } from 'antd';
// dataSources
import { isActive } from '../../../../dataSources/isActive';

const ModuleUpdateMenu = ({
  visible,
  onCreate,
  onCancel,
  formData,
}) => {
  const formRef = useRef(null);
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Update menu"
      okText="Update"
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
      <Form
        form={form}
        layout="vertical"
        ref={formRef}
        initialValues={formData}
      >
        <Form.Item label="Menu name" name="name">
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
      </Form>
    </Modal>
  );
};

ModuleUpdateMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  formData: PropTypes.shape({}).isRequired,
};

export default ModuleUpdateMenu;
