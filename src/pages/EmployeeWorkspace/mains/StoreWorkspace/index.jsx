// libs
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// components
import TagList from '../../../../components/TagList';

const StoreWorkspace = ({ store }) => (
  <div className="store-workspace-wrapper">
    <div className="store-workspace-wrapper-inner">
      <div className="store-workspace-image-wrapper">
        <img
          className="store-workspace-image"
          src={`${process.env.REACT_APP_URL + store.logo}`}
          alt="store-avatar"
        />
      </div>
      <div className="store-workspace-name">{store.name}</div>
      <div className="store-workspace-description">
        <p className="store-workspace-paragraph">
          {store.description}
        </p>
      </div>
      <div className="store-card-tag">
        <TagList
          className="store-card-type"
          value={store.store_category}
        />
      </div>
    </div>
  </div>
);

StoreWorkspace.defaultProps = {
  store: null,
};

StoreWorkspace.propTypes = {
  store: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    store_category: PropTypes.shape({}),
  }),
};

const mapStateToProps = (state) => ({
  store: state.employee.employeeStore,
});

export default connect(mapStateToProps, null)(StoreWorkspace);
