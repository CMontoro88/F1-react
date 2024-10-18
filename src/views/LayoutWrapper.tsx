import { Outlet } from 'react-router-dom';
import LayoutHeader from '@/components/LayoutHeader';

const LayoutWrapper = () => {
  return (
    <div>
      <LayoutHeader />
      <Outlet />
    </div>
  );
};

export default LayoutWrapper;
