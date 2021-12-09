// libs
// components
import Login from '../pages/Login';
import Register from '../pages/Register';
import LandingPage from '../pages/LandingPage';
import Home from '../pages/Home';
import Store from '../pages/Store';
import UserProfile from '../pages/UserProfile';
import EmployeeWorkspace from '../pages/EmployeeWorkspace';

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
  {
    path: '/account/profile',
    component: UserProfile,
  },
  {
    path: '/employee',
    component: EmployeeWorkspace,
  },
];

export default routes;
