// libs
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// components

// redux
import { connect } from 'react-redux';

const UserProfile = ({ user, isLoading, isAuthenticated }) => {
  if (isLoading) console.log(isLoading);
  if (!isAuthenticated) return <Redirect to="/account/login" />;

  return (
    <div className="user-profile-wrapper">
      <div className="user-profile-wrapper-inner">
        {user.username}
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
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

export default connect(mapStateToProps, null)(UserProfile);
