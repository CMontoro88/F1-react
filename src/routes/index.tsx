import { createBrowserRouter } from 'react-router-dom';
import DriversView from '@/views/Drivers/Drivers';

export const router = createBrowserRouter([
  { path: '/', element: <DriversView /> },
]);
