import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form, Modal, Input, Select, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// dataSources
import { isActive } from '../../../../dataSources/isActive';
// hooks
import { useImageUpload } from '../../../../hooks/useImageUpload';

const ModuleCreateItem = ({ visible, onCreate, onCancel }) => {
  const formRef = useRef(null);
  const [form] = Form.useForm();

  const dummyRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  const { selectedFile, onSelectFile } = useImageUpload();

  return (
    <Modal
      visible={visible}
      title="Create item"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            console.log(values);
            onCreate(values);
            form.resetFields();
          })
          .catch(() => {});
      }}
    >
      <Form form={form} layout="vertical" ref={formRef}>
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
        <Form.Item
          name="image"
          label="Item image"
          valuePropName="file"
          getValueFromEvent={selectedFile}
        >
          <Upload
            name="logo"
            customRequest={dummyRequest}
            listType="picture"
            fileList={selectedFile}
          >
            <Button icon={<UploadOutlined />} onClick={onSelectFile}>
              Click to upload
            </Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

ModuleCreateItem.defaultProps = {
  formData: null,
};

ModuleCreateItem.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  formData: PropTypes.shape({}),
};

export default ModuleCreateItem;
