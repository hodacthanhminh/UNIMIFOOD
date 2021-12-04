// libs
import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Alert, Empty } from 'antd';

const Loading = ({ isLoading, isError, ...props }) => {
  if (isLoading) {
    return (
      <Alert
        type="info"
        className="loading-alert alert-info"
        action={<Spin tip="Loading..." className="show-banner" />}
      />
    );
  }

  if (isError) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  return { ...props.children };
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Loading;
