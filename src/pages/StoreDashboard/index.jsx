// libs
import React from 'react';
import { Tabs } from 'antd';

const StoreDashboard = () => (
  <div className="store-dashboard-wrapper">
    <div className="store-dashboard-wrapper-inner">
      <Tabs defaultActiveKey="1" type="card">
        <Tabs.TabPane tab="Thông tin cửa hàng" key="1">
          Content of tab 1
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">
          Content of tab 2
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="3">
          Content of tab 3
        </Tabs.TabPane>
      </Tabs>
    </div>
  </div>
);

export default StoreDashboard;
