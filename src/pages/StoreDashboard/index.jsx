// libs
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Tabs } from 'antd';
import { connect } from 'react-redux';
// components
import StoreDashboardInfo from './mains/StoreDashboardInfo';
import StoreDashboardOrder from './mains/StoreDashboardOrder';
import StoreDashboardMenus from './mains/StoreDashboardMenus';
import Loading from '../../components/Loading';
// redux
import { LoadEmployee } from '../../actions/employee';

const StoreDashboard = ({
  isAuth,
  user,
  loadEmployee,
  employeeStore,
  isLoading,
  isError,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (!isAuth) {
      history.push('/account/login');
    } else if (user && user.account_role !== 'employee') {
      history.push('/');
    } else if (!employeeStore?.id) loadEmployee();
  }, [user, isAuth]);

  useEffect(() => {
    if (isError) history.push('/somethingwrong');
  }, [isLoading, isError]);

  return (
    <div className="store-dashboard-wrapper">
      <Loading isLoading={isLoading} isError={!employeeStore}>
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
      </Loading>
    </div>
  );
};

StoreDashboard.defaultProps = {
  user: null,
  employeeStore: null,
};

StoreDashboard.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    account_role: PropTypes.string,
  }),
  employeeStore: PropTypes.shape({
    id: PropTypes.number,
  }),
  loadEmployee: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  loadEmployee: LoadEmployee,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
  employeeStore: state.employee.employeeStore,
  user: state.auth.user,
  isLoading: state.employee.isLoading,
  isError: state.employee.isError,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoreDashboard);
