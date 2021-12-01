// libs
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';
// components
import StoreCard from '../../../../components/StoreCard';
import Loading from '../../../../components/Loading';
import { usePagination } from '../../../../hooks/usePagination';
// redux

const HomeBody = ({ storeViewList, isLoading }) => {
  const [currentPage, pageSize, beginItem, endItem, handleOnChange] =
    usePagination({
      current: 1,
      itemsPerPage: 15,
      totalItem: storeViewList.length,
    });

  useEffect(() => {}, [storeViewList]);

  return (
    <div className="home-body-wrapper">
      <Loading
        isLoading={isLoading}
        isError={storeViewList.length === 0}
      >
        <div className="home-body-wrapper-inner">
          <div className="store-list-wrapper">
            {storeViewList &&
              storeViewList
                .slice(beginItem, endItem)
                .map((store) => (
                  <StoreCard
                    key={store.id}
                    storeAddress={store.address}
                    storeName={store.name}
                    storeImage={store.logo}
                    storeAltImage={`${store.name}-picture`}
                    storeId={store.id}
                    storeCategory={store.store_category}
                  />
                ))}
          </div>
          <div className="store-pagination-wrapper">
            <Pagination
              className="store-pagination"
              defaultPageSize={pageSize}
              defaultCurrent={1}
              total={storeViewList.length}
              current={currentPage}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </Loading>
    </div>
  );
};

HomeBody.propTypes = {
  storeViewList: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool,
};

HomeBody.defaultProps = {
  storeViewList: null,
  isLoading: false,
};

const mapStateToProps = (state) => ({
  storeViewList: state.storeview.storeList,
  isLoading: state.storeview.isLoading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeBody);
