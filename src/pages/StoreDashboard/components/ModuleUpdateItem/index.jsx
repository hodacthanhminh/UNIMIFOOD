import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Modal, Input, Select } from 'antd';
// dataSources
import { isActive } from '../../../../dataSources/isActive';

const ModuleUpdateItem = ({
  visible,
  onCreate,
  onCancel,
  formData,
}) => {
  const formRef = useRef(null);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(formData);
  }, [visible, formData]);

  return (
    <Modal
      visible={visible}
      title="Edit item"
      okText="Edit"
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
        <Form.Item label="Item Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item name="is_active" label="Item status">
          <Select placeholder="Menu status">
            {isActive.map((option) => (
              <Select.Option value={option.value} key={option.id}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Item price" name="price">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

ModuleUpdateItem.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  formData: PropTypes.shape({}).isRequired,
};

export default ModuleUpdateItem;
