import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Indexpage = () => {
  return (
    <>
      <Navigation />

      <Outlet />

      <Footer />
    </>
  );
};

export default Indexpage;
