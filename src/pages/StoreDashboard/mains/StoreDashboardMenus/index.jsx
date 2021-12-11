// libs
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
// components
import Loading from '../../../../components/Loading';
import MenuItem from '../../components/MenuItem';

const StoreDashboardMenus = ({ isLoading, menus }) => {
  console.log(menus);
  return (
    <div className="dashboard-tab-wrapper">
      <Loading isLoading={isLoading} isError={menus.length === 0}>
        <div className="dashboard-tab-wrapper-inner">
          <div className="dashboard-menus-wrapper">
            <div className="dashboard-menus-wrapper-inner">
              <div className="dashboard-menus-create-wrapper">
                <Button icon={<PlusOutlined />}> Create menu </Button>
              </div>
              <div className="dashboard-menus-body">
                {menus.map((menu) => (
                  <MenuItem key={menu.id} menuItems={menu} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Loading>
    </div>
  );
};

StoreDashboardMenus.defaultProps = {
  menus: null,
};

StoreDashboardMenus.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  menus: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapStateToProps = (state) => ({
  isLoading: state.storecontrol.isLoadingMenus,
  isError: state.storecontrol.isError,
  menus: state.storecontrol.storeMenus,
});

export default connect(mapStateToProps)(StoreDashboardMenus);
