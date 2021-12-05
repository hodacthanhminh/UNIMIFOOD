// libs
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// components
import Loading from '../../components/Loading';
import StoreProfile from './mains/StoreProfile';
import StoreMenu from './mains/StoreMenu';
import StoreOrder from './mains/StoreOrder';
// redux
import { storeByID } from '../../actions/store';

const Store = ({ store, getStore, isLoading, isError }) => {
  const { id } = useParams();
  useEffect(() => {
    getStore(id);
  }, []);

  useEffect(() => {}, [store, isLoading, isError]);
  return (
    <div className="store-page-wrapper">
      <Loading isLoading={isLoading} isError={isError}>
        <div className="store-page-wrapper-inner">
          <StoreProfile />
          <StoreMenu />
          <StoreOrder />
        </div>
      </Loading>
    </div>
  );
};

Store.propTypes = {
  store: PropTypes.shape({}),
  getStore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

Store.defaultProps = {
  store: null,
  isLoading: true,
  isError: false,
};

const mapDispatchToProps = {
  getStore: storeByID,
};

const mapStateToProps = (state) => ({
  store: state.storeid.storeId,
  isLoading: state.storeid.isLoading,
  isError: state.storeid.isError,
});

export default connect(mapStateToProps, mapDispatchToProps)(Store);
