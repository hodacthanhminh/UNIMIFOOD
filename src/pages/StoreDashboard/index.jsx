// libs
import React from 'react';
import { Tabs } from 'antd';
// components
import StoreDashboardInfo from './mains/StoreDashboardInfo';
import StoreDashboardOrder from './mains/StoreDashboardOrder';
import StoreDashboardMenus from './mains/StoreDashboardMenus';

const StoreDashboard = () => (
  <div className="store-dashboard-wrapper">
    <div className="store-dashboard-wrapper-inner">
      <Tabs
        defaultActiveKey="1"
        type="card"
        className="store-dashboard-tabs"
      >
        <Tabs.TabPane tab="Thông tin cửa hàng" key="1">
          <StoreDashboardInfo />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Thực đơn" key="2">
          <StoreDashboardMenus />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Đơn hàng" key="3">
          <StoreDashboardOrder />
        </Tabs.TabPane>
      </Tabs>
    </div>
  </div>
);

export default StoreDashboard;
