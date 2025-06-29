import { createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/404';
import Homepage from './pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
]);
