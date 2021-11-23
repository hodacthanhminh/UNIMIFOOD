import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// style
import './styles/main.scss';
import 'antd/dist/antd.css';
// components
import Layout from './HOC/Layout';
import routes from './Config/routes';

const App = () => (
  <div className="app">
    <Router>
      <Layout>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact
            />
          ))}
        </Switch>
      </Layout>
    </Router>
  </div>
);
export default App;
