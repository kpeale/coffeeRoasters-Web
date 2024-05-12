import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [showlinks, setShowLinks] = useState(false);
  function displayLinks() {
    setShowLinks(!showlinks);
  }
  return (
    <nav className='flex flex-row justify-between  mx-20 mt-5 lg:mx-8 lg:mt-4  xsm:mx-4 md:flex-col lsm:mx-2'>
      <div className='flex flex-row gap-2 justify-between xsm:mx-4'>
        <div className='flex flex-row gap-2 '>
          <img
            src='/images/Combined Shape.svg'
            alt='logo'
          />
          <h2 className='font-fraunces font-bold text-lg'>Coffeeroasters</h2>
        </div>
        <div className='hidden md:block md:mt-1'>
          <button onClick={displayLinks}>
            <img
              src='/images/navbar.svg'
              alt='navbar'
            />
          </button>
        </div>
      </div>

      <div
        className={`font-barlow text-[12px] flex flex-row gap-4 mt-2 uppercase md:flex-col md:mt-10  ${
          showlinks ? 'block' : 'md:hidden'
        }`}
      >
        <Link to='/'>Home</Link>
        <Link to='/about'>About us</Link>
        <Link to='/create'>Create your plan</Link>
      </div>
    </nav>
  );
}

export default Navigation;
