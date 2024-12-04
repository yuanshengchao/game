import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { Admin } from './pages/admin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'admin',
    element: <Admin />
  }
]);

export default router;
