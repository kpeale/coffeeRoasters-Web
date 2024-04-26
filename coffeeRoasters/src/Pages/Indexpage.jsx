import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Indexpage = () => {
  return (
    <>
      <Navigation />

      <Outlet />
    </>
  );
};

export default Indexpage;
