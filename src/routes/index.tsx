import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/404';
import Error from '../pages/Error';
import Homepage from '../pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      {
        index: true,
        element: <Homepage />,
      },
    ],
    errorElement: <Error />,
  },
]);

export { router };
