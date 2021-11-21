// libs
// components
import Login from '../pages/Login';
import Register from '../pages/Register';
import LandingPage from '../pages/LandingPage';

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
    path: '/',
    component: LandingPage,
  },
];

export default routes;
