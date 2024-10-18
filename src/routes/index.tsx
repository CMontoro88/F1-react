import { createBrowserRouter } from 'react-router-dom';
import DriversView from '@/views/Drivers/DriversView';
import ErrorPage from '@/views/ErrorPage';
import LayoutWrapper from '@/views/LayoutWrapper';
import TeamsView from '@/views/Teams/TeamsView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWrapper />,
    children: [
      { path: '/', element: <DriversView />, errorElement: <ErrorPage /> },
      { path: '/drivers', element: <DriversView /> },
      { path: '/teams', element: <TeamsView /> },
    ],
  },
]);
