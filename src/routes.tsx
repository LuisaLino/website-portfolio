import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import NotFound from './pages/404';
import AboutMe from './pages/AboutMe';
import Homepage from './pages/Home';
import Projects from './pages/Projects';
import S4NG from './pages/S4NG';
import ViaMap from './pages/ViaMap';
import Vizzi from './pages/Vizzi';

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
        {
          path: 'projects',
          children: [
            {
              index: true,
              element: <Projects />,
            },
            { path: 'via-map-workflow-designer', element: <ViaMap /> },
            { path: 'vizzi-bacloffice-ui-redesign', element: <Vizzi /> },
            {
              path: 's4ng-uporto-accessible-platform',
              element: <S4NG />,
            },
            {
              path: 'true-project-platform-for-creating-school-newspapers',
              element: <Vizzi />,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  {
    basename: import.meta.env.MODE === 'DEV' ? '' : '/website-portfolio',
  }
);
