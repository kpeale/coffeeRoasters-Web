function Hero() {
  return (
    <>
      <section className='hero-section mx-20 mt-8 lg:mx-8 lg:mt-6 md:flex md:flex-col md:justify-center md:justify-items-center  md:align-middle'>
        <div className='text-white ml-20 pt-20 lg:ml-16 lg:pt-24 md:pt-8 md:ml-0'>
          <div className='font-fraunces text-[4.5rem] font-bold lg:text-[3rem]  md:text-center md:text-[2.5rem] xsm:text-[2rem]'>
            <h2>Great coffee </h2>
            <h2 className='mt-[-2rem] lg:mt-[-1.2rem] xsm:mt-[-10px]'>
              made simple.
            </h2>
          </div>

          <div className='max-w-[400px] lg:pt-4 md:max-w-[300px] md:flex md:flex-col md:justify-center  md:my-0 md:mx-auto xsm:max-w-[200px]'>
            <p className='font-barlow text-[1rem] lg:text-[15px]  md:text-justify '>
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
          </div>

          <div className='mt-10 lg:mt-10 md:flex md:flex-row md:justify-center'>
            <button className='text-white py-2 px-4 rounded-md bg-[#0e8781] font-fraunces text-[1.125rem] md:text-[1rem]'>
              Create your plan
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
