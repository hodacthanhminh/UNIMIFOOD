// libs
import React from 'react';
// components
import Loading from '../../../../components/Loading';

const StoreDashboardMenus = () => {
  const loading = true;
  return (
    <div className="dashboard-tab-wrapper">
      <Loading isLoading={loading}>
        <div className="dashboard-tab-wrapper-inner">
          This is store menus
        </div>
      </Loading>
    </div>
  );
};

export default StoreDashboardMenus;
