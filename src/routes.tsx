import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import NotFound from './pages/404';
import AboutMe from './pages/AboutMe';
import Homepage from './pages/Home';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: 'about-me',
          element: <AboutMe />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  {
    basename: '/website-portfolio',
  }
);
