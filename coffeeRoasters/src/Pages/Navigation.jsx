import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <nav className='flex flex-row justify-between  mx-20 mt-5'>
      <div className='flex flex-row gap-2 '>
        <div>
          <img
            src='/images/Combined Shape.svg'
            alt='logo'
          />
        </div>
        <h2 className='font-fraunces font-bold text-lg'>Coffeeroasters</h2>
      </div>

      <div className='font-barlow text-[12px] flex flex-row gap-4 uppercase  '>
        <Link to='/'>Home</Link>
        <Link to='/about'>About us</Link>
        <Link to='/create'>Create your plan</Link>
      </div>
    </nav>
  );
}

export default Navigation;
