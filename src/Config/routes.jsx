// libs
// components
import Login from '../pages/Login';
import Register from '../pages/Register';
import LandingPage from '../pages/LandingPage';
import Home from '../pages/Home';
import Store from '../pages/Store';

const routes = [
  {
    path: '/account/login',
    component: Login,
  },
  {
    path: '/account/register',
    component: Register,
  },
  {
    path: '/about',
    component: LandingPage,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/store/:id',
    component: Store,
  },
];

export default routes;
