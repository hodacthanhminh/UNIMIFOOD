// libs
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Empty } from 'antd';
// redux
import { connect } from 'react-redux';
import { LoadEmployee } from '../../actions/employee';
// component
import Loading from '../../components/Loading';
import StoreWorkspace from './mains/StoreWorkspace';
import CreateStore from './mains/CreateStore';

const EmployeeWorkspace = ({
  loadEmployee,
  isLoading,
  isError,
  user,
  isAuth,
  employeeStore,
}) => {
  const history = useHistory();
  if (!isAuth) history.push('/login');
  if (user.account_role !== 'employee') history.push('/');
  useEffect(() => {
    loadEmployee();
  }, []);
  useEffect(() => {}, [isAuth, isLoading, isError, employeeStore]);
  return (
    <div className="employee-workspace-wrapper">
      <Loading isLoading={isLoading} isError={isError}>
        <div className="employee-workspace-wrapper-inner">
          <div className="employee-workspace-header">
            Employee Workspace
          </div>
          <div className="employee-workspace-body">
            <div className="employee-workspace-store-wrapper">
              <div className="employee-workspace-store-header">
                Your Store
              </div>
              <div className="employee-workspace-store-body">
                {!employeeStore.id ? (
                  <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description={<span> No store yet! </span>}
                  >
                    <CreateStore />
                  </Empty>
                ) : (
                  <StoreWorkspace />
                )}
              </div>
            </div>
          </div>
        </div>
      </Loading>
    </div>
  );
};

EmployeeWorkspace.defaultProps = {
  employeeInfo: null,
  employeeStore: null,
  isLoading: true,
  isError: false,
  user: null,
};

EmployeeWorkspace.propTypes = {
  employeeInfo: PropTypes.shape({
    id: PropTypes.string,
  }),
  user: PropTypes.shape({
    account_role: PropTypes.string,
  }),
  isAuth: PropTypes.bool.isRequired,
  loadEmployee: PropTypes.func.isRequired,
  employeeStore: PropTypes.shape({
    id: PropTypes.number,
  }),
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  employeeInfo: state.employee.employeeInfo,
  employeeStore: state.employee.employeeStore,
  isLoading: state.employee.isLoading,
  isError: state.employee.isError,
  user: state.auth.user,
  isAuth: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  loadEmployee: LoadEmployee,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeWorkspace);
