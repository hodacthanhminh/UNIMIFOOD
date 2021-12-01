// libs
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components
import HomeBody from './mains/HomeBody';
import StoreCategorySelect from '../../components/StoreCategorySelect';
// dataSources
import { tags, tagsValue } from '../../dataSources/TagStore';
// redux
import {
  loadStoreList,
  storeSelectCategory,
} from '../../actions/store';

const Home = ({ storeData, loadStoreData, showStore }) => {
  const [category, setCategory] = useState(tags);

  const handleOnChange = (value) => {
    if (value.length > 0) {
      const newCategoryList = tags.filter((item) => {
        const find = tagsValue[item].value;
        return value.includes(find) ? item : null;
      });
      setCategory(newCategoryList);
    } else {
      setCategory(tags);
    }
  };

  useEffect(() => {
    loadStoreData();
  }, []);

  useEffect(() => {
    if (storeData.length > 0) {
      const showStoreByCategory = storeData.filter((store) => {
        const storeCategory = store.store_category.slug;
        return category.includes(storeCategory) ? store : null;
      });
      showStore(showStoreByCategory);
    }
  }, [category, storeData]);

  return (
    <div className="home-wrapper">
      <div className="home-wrapper-inner">
        <StoreCategorySelect handleOnChange={handleOnChange} />
        <HomeBody />
      </div>
    </div>
  );
};

Home.propTypes = {
  storeData: PropTypes.arrayOf(PropTypes.shape({})),
  loadStoreData: PropTypes.func.isRequired,
  showStore: PropTypes.func.isRequired,
};

Home.defaultProps = {
  storeData: null,
};

const mapStateToProps = (state) => ({
  storeData: state.storedata.storeDataList,
});

const mapDispatchToProps = {
  loadStoreData: loadStoreList,
  showStore: storeSelectCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
