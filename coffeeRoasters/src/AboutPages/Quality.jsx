import { useState, useEffect } from 'react';

function Quality() {
  const [isTabletView, setIsTabletView] = useState(false);

  // Function to update the screen width state
  const handleResize = () => {
    setIsTabletView(window.innerWidth <= 1023); // Adjust the breakpoint as per your tablet size
  };

  // Add event listener for window resize
  useEffect(() => {
    handleResize(); // Call on initial render
    window.addEventListener('resize', handleResize); // Add event listener
    return () => window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
  }, []);
  return (
    <>
      <section className='mx-20 mt-[10rem]  bg-[#333d4b] rounded-md h-[400px] lg:h-[600px] lg:mx-10  md:h-[600px] '>
        <div className='px-20 tbm:px-12 wbm:px-10 fbm:px-8 flex flex-row mw:gap-40 gap-28 tbm:gap-16 hbm:gap-8 lg:gap-0 lg:flex-col'>
          <div className='pt-16 lg:pt-32 lg:flex lg:flex-col lg:items-center lg:order-2'>
            <h2 className='font-fraunces text-[#FEFCF7] text-[2.5rem] font-bold xl:text-[2rem] tbm:text-[1.8rem] lg:text-center'>
              Uncompromising quality
            </h2>
            <div className='pt-4  max-w-[400px]  wbm:max-w-[300px]    lg:max-w-[1600px] lg:flex lg:justify-center lg:justify-items-center lg:items-center'>
              <p className='font-barlow text-[#FEFCF7] text-[1rem] lg:text-center'>
                Although we work with growers who pay close attention to all
                stages of harvest and processing, we employ, on our end, a
                rigorous quality control program to avoid over-roasting or
                baking the coffee dry. Every bag of coffee is tagged with a
                roast date and batch number. Our goal is to roast consistent,
                user-friendly coffee, so that brewing is easy and enjoyable.
              </p>
            </div>
          </div>

          <div className='m-[-4rem] tbm:mt-[-2rem] lg:order-1 lg:flex lg:justify-center '>
            {isTabletView ? (
              <img
                src='/images/quality-tab.png'
                alt='tea'
                className=' lg:mt-[-2rem]'
              />
            ) : (
              <img
                src='/images/quality.png'
                alt='tea'
                className='wbm:mx-10 '
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Quality;
