import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <footer className='bg-[#2C343E]  mx-20 px-20 py-10 mb-10 lg:mx-[3.5rem] md:mx-10 md:px-0 '>
        <div className='flex flex-row text-white gap-[15rem] xl:gap-[8rem]  lg:flex-col lg:gap-5 lg:justify-center lg:items-center'>
          <div className='flex flex-row gap-2 '>
            <img
              src='/images/Combined Shape.svg'
              alt='logo'
            />
            <h2 className='font-fraunces font-bold text-lg '>Coffeeroasters</h2>
          </div>

          <div className='flex flex-row gap-4 md:flex-col md:items-center'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About us</Link>
            <Link to='/create'>Create your plan</Link>
          </div>

          <div className='flex flex-row gap-4'>
            <img
              src='/images/facebk.png'
              alt='facebk'
            />
            <img
              src='/images/twitter.png'
              alt='twitter'
            />
            <img
              src='/images/instagram.png'
              alt='instagram'
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
