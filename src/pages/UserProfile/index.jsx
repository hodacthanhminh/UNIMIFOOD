/* eslint-disable jsx-a11y/label-has-associated-control */
// libs
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Divider, Input } from 'antd';
// redux
import { connect } from 'react-redux';
import { UpdateAccount } from '../../actions/auth';
// hook
import { useImageUpload } from '../../hooks/useImageUpload';
// components

const UserProfile = ({
  user,
  isLoading,
  isAuthenticated,
  updateAccount,
}) => {
  if (isLoading) console.log(isLoading);
  if (!isAuthenticated) return <Redirect to="/account/login" />;

  const [phone, setPhone] = useState(user.phone);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);

  const { preview, isUploaded, onSelectFile, selectedFile } =
    useImageUpload();

  const handleUpdateAvatar = () => {
    const data = new FormData();
    if (selectedFile) data.append('avatar', selectedFile);
    updateAccount(data, user.id);
  };

  const handleUpdateInfo = () => {
    const data = new FormData();
    if (phone !== user.phone && phone !== '') {
      data.append('phone', phone);
    }
    if (firstName !== user.first_name && firstName !== '') {
      data.append('first_name', firstName);
    }
    if (lastName !== user.last_name && lastName !== '') {
      data.append('last_name', lastName);
    }
    updateAccount(data, user.id);
  };
  return (
    <div className="user-profile-wrapper">
      <div className="user-profile-wrapper-inner">
        <div className="user-profile-header">User information</div>
        <div className="user-profile-body">
          <div className="user-profile-update-wrapper">
            <div className="user-profile-update-header">
              Update avatar
            </div>
            <div className="user-profile-update-body avatar-wrapper">
              <div className="avatar-wrapper-inner">
                <div className="avatar-view">
                  {!isUploaded ? (
                    <img
                      className="avatar-view-image"
                      src={`${
                        process.env.REACT_APP_URL + user.avatar
                      }`}
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
                    id="user-profile-upload"
                    type="file"
                    accept="image/*"
                    onChange={onSelectFile}
                    hidden
                  />
                  <p className="avatar-function-label">
                    Upload form
                    <label
                      htmlFor="user-profile-upload"
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
          </div>
          <Divider className="user-profile-update-divider" />
          <div className="user-profile-update-wrapper">
            <div className="user-profile-update-header">
              Update Info
            </div>
            <div className="user-profile-update-body profile-data-wrapper">
              <div className="profile-data-item">
                <div className="profile-data-label"> First Name </div>
                <Input
                  className="profile-data-input"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </div>
              <div className="profile-data-item">
                <div className="profile-data-label"> Last Name </div>
                <Input
                  className="profile-data-input"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </div>
              <div className="profile-data-item">
                <div className="profile-data-label"> Phone </div>
                <Input
                  className="profile-data-input"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>
              <Button
                className="user-profile-update-button profile-data-update-button"
                onClick={handleUpdateInfo}
              >
                Save Change
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    username: PropTypes.string,
    last_name: PropTypes.string,
    first_name: PropTypes.string,
    phone: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  updateAccount: PropTypes.func.isRequired,
};

UserProfile.defaultProps = {
  isLoading: true,
  user: null,
  isAuthenticated: false,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isLoading: state.auth.isLoadingAccount,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  updateAccount: UpdateAccount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);
