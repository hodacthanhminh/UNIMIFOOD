/* eslint-disable jsx-a11y/label-has-associated-control */
// libs
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { UploadOutlined, EditOutlined } from '@ant-design/icons';
import {
  Button,
  Divider,
  Descriptions,
  Badge,
  Form,
  Input,
  Modal,
  TimePicker,
  Select,
} from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
// components
import Loading from '../../../../components/Loading';
import TagList from '../../../../components/TagList';
// hook
import { useImageUpload } from '../../../../hooks/useImageUpload';
import { useStoreTime } from '../../../../hooks/useStoreTime';
// redux
import {
  LoadStore,
  UpdateStore,
} from '../../../../actions/storecontrol';
// dataSource
import { storeCategories } from '../../../../dataSources/TagStore';

const CollectionCreateForm = ({
  visible,
  onCreate,
  onCancel,
  formData,
}) => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(formData);
  }, [formData, visible]);
  return (
    <Modal
      visible={visible}
      title="Edit store"
      okText="Create"
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
      <Form form={form} layout="vertical" initialValues={formData}>
        <Form.Item name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone">
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Address">
          <Input />
        </Form.Item>
        <Form.Item name="store_category" label="Category">
          <Select>
            {storeCategories.map((category) => (
              <Select.Option value={category.id} key={category.id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="open_time" label="Open time">
          <TimePicker />
        </Form.Item>
        <Form.Item name="close_time" label="Close time">
          <TimePicker />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

CollectionCreateForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  formData: PropTypes.shape({}).isRequired,
};

const StoreDashboardInfo = ({
  loadStore,
  employeeStore,
  isLoading,
  isError,
  store,
  updateStore,
}) => {
  const { preview, isUploaded, onSelectFile, selectedFile } =
    useImageUpload();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [updateForm, setUpdateForm] = useState();
  const { updateOpen, updateClose, storeState } = useStoreTime({
    openTime: store?.open_time,
    closeTIme: store?.close_time,
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onCreate = (values) => {
    const intialForm = new FormData();
    if (values.name !== store.name && values.name !== null) {
      intialForm.append('name', values.name);
    }
    if (values.address !== store.address && values.address !== null) {
      intialForm.append('address', values.address);
    }
    if (
      values.description !== store.description &&
      values.description !== null
    ) {
      intialForm.append('description', values.description);
    }
    if (
      values.store_category !== store.store_category &&
      values.category !== null
    ) {
      intialForm.append('store_category', values.store_category);
    }
    if (values.phone !== store.phone && values.phone !== null) {
      intialForm.append('phone', values.phone);
    }
    if (
      values.open_time.format(moment.HTML5_FMT.TIME_SECONDS) !==
        store.open_time &&
      values.open_time.format(moment.HTML5_FMT.TIME_SECONDS) !== ''
    ) {
      intialForm.append(
        'open_time',
        values.open_time.format(moment.HTML5_FMT.TIME_SECONDS),
      );
    }
    if (
      values.close_time.format(moment.HTML5_FMT.TIME_SECONDS) !==
      store.close_time
    ) {
      intialForm.append(
        'close_time',
        values.close_time.format(moment.HTML5_FMT.TIME_SECONDS),
      );
    }
    updateStore(intialForm, store.id);
    setIsModalVisible(false);
  };

  const handleUpdateAvatar = () => {
    const data = new FormData();
    if (selectedFile) data.append('logo', selectedFile);
    updateStore(data, store.id);
  };

  useEffect(() => {
    loadStore(employeeStore.id);
  }, []);
  useEffect(() => {}, [isLoading, isError]);

  useEffect(() => {
    const newForm = {
      name: store?.name,
      email: store?.email,
      phone: store?.phone,
      address: store?.address,
      description: store?.description,
      open_time: moment(
        store.open_time ? store.open_time : 0,
        'HH:mm:ss',
      ),
      close_time: moment(
        store.close_time ? store.close_time : 0,
        'HH:mm:ss',
      ),
      store_category: store?.store_category?.id,
    };
    updateOpen(store.open_time);
    updateClose(store.close_time);
    setUpdateForm(newForm);
  }, [store, employeeStore]);

  return (
    <div className="dashboard-tab-wrapper">
      <Loading isLoading={isLoading} isError={isError}>
        <div className="dashboard-tab-wrapper-inner">
          <div className="dashboard-info-update-wrapper">
            <div className="info-update-header">Store logo</div>
            <div className="info-update-body avatar-wrapper">
              <div className="avatar-wrapper-inner">
                <div className="avatar-view">
                  {!isUploaded ? (
                    <img
                      className="avatar-view-image"
                      src={`${process.env.REACT_APP_URL}${store.logo}`}
                      alt="avatar1"
                    />
                  ) : (
                    <img
                      className="avatar-view-image"
                      src={preview}
                      alt="avatar"
                    />
                  )}
                </div>
                <div className="avatar-function">
                  <input
                    id="store-profile-upload"
                    type="file"
                    accept="image/*"
                    onChange={onSelectFile}
                    hidden
                  />
                  <p className="avatar-function-label">
                    Upload form
                    <label
                      htmlFor="store-profile-upload"
                      className="avatar-function-upload-button"
                    >
                      <UploadOutlined />
                      Chose
                    </label>
                    GIF, JPEG, PNG, BMP accepted
                  </p>
                  <Button
                    className="user-profile-update-button avatar-function-update-button"
                    onClick={handleUpdateAvatar}
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
            <Divider />
            <div className="dashboard-info-update-wrapper">
              <div className="info-update-header">
                <span>Store Information</span>
                <Button
                  className="info-update-header-button"
                  icon={<EditOutlined />}
                  onClick={showModal}
                >
                  Edit
                </Button>
              </div>
              <div className="info-update-body store-profile">
                <Descriptions bordered>
                  <Descriptions.Item label="Name" span={2}>
                    {store?.name}
                  </Descriptions.Item>
                  <Descriptions.Item label="Category">
                    {store?.store_category && (
                      <TagList value={store.store_category.slug} />
                    )}
                  </Descriptions.Item>
                  <Descriptions.Item label="Email" span={2}>
                    {store?.email}
                  </Descriptions.Item>
                  <Descriptions.Item label="Phone" span={2}>
                    {store?.phone}
                  </Descriptions.Item>
                  <Descriptions.Item label="Address" span={3}>
                    {store?.address}
                  </Descriptions.Item>
                  <Descriptions.Item label="Open time" span={1}>
                    {store?.open_time}
                  </Descriptions.Item>
                  <Descriptions.Item label="Close Time" span={1}>
                    {store?.close_time}
                  </Descriptions.Item>
                  <Descriptions.Item label="Status" span={1}>
                    <Badge
                      status={storeState.status}
                      text={storeState.text}
                    />
                  </Descriptions.Item>
                  <Descriptions.Item label="Description" span={3}>
                    {store?.description}
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </div>
          </div>
          <CollectionCreateForm
            visible={isModalVisible}
            onCreate={onCreate}
            onCancel={handleCancel}
            formData={updateForm}
          />
        </div>
      </Loading>
    </div>
  );
};

StoreDashboardInfo.defaultProps = {
  employeeStore: null,
  store: null,
};

StoreDashboardInfo.propTypes = {
  loadStore: PropTypes.func.isRequired,
  updateStore: PropTypes.func.isRequired,
  employeeStore: PropTypes.shape({
    id: PropTypes.number,
  }),
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  store: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    logo: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string,
    open_time: PropTypes.string,
    close_time: PropTypes.string,
    store_category: PropTypes.shape({
      slug: PropTypes.string,
      id: PropTypes.number,
    }),
  }),
};

const mapStateToProps = (state) => ({
  employeeStore: state.employee.employeeStore,
  isLoading: state.storecontrol.isLoadingStore,
  isError: state.storecontrol.isError,
  store: state.storecontrol.storeInfo,
});

const mapDispatchToProps = {
  loadStore: LoadStore,
  updateStore: UpdateStore,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoreDashboardInfo);
