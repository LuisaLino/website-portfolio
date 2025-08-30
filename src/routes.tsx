import { createBrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import ProjectsLayout from './layouts/ProjectsLayout';
import NotFound from './pages/404';
import AboutMe from './pages/AboutMe';
import Homepage from './pages/Home';
import Projects from './pages/Projects/Projects';
import S4NG from './pages/Projects/S4NG';
import TrueProject from './pages/Projects/TrueProject';
import ViaMap from './pages/Projects/ViaMap';
import Vizzi from './pages/Projects/Vizzi';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <>
          <ScrollToTop />
          <MainLayout />
        </>
      ),
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
            {
              element: <ProjectsLayout />,
              children: [
                { path: 'via-map-workflow-designer', element: <ViaMap /> },
                { path: 'vizzi-bacloffice-ui-redesign', element: <Vizzi /> },
                {
                  path: 's4ng-uporto-accessible-platform',
                  element: <S4NG />,
                },
                {
                  path: 'true-project-platform-for-creating-school-newspapers',
                  element: <TrueProject />,
                },
              ],
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
