// libs
// components
import Login from '../pages/Login';
import Register from '../pages/Register';
import LandingPage from '../pages/LandingPage';
import Home from '../pages/Home';

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
];

export default routes;
