function WhyChooseUs() {
  return (
    <>
      <section className='mx-20 mt-[40rem] lg:mt-[60rem] bg-[#333d4b] rounded-md h-[400px] lg:h-[550px] lg:mx-10 md:mt-[100rem] md:h-[750px]'>
        <div className='text-white pt-20'>
          <h2 className='text-center font-fraunces text-[2.5rem] font-bold xsm:text-[1.8rem]'>
            Why choose us?
          </h2>
          <div className='text-center flex justify-center mt-4'>
            <p className='text-center font-barlow text-[16px] max-w-[520px] xsm:text-[14px]'>
              A large part of our role is choosing which particular coffees will
              be featured in our range. This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level.
            </p>
          </div>
        </div>

        <div className='flex flex-row justify-center gap-[5.8rem] xl:gap-[2rem] wbm:gap-[10px]  lg:gap-6 mt-12 lg:flex-col lg:items-center '>
          <div className='bg-[#0E8784] w-[280px] rounded-md flex flex-col justify-center justify-items-center  text-white lg:w-[600px]  md:w-[300px] xsm:w-[200px] '>
            <div className='my-0 mx-auto lg:flex lg:flex-row gap-8 md:flex-col'>
              <div className='flex justify-center mt-10  lg:mb-8 md:mb-0'>
                <img
                  src='/images/egg.png'
                  alt='egg'
                  className='w-[50px]'
                />
              </div>

              <div className='lg:flex lg:flex-col md:flex md:flex-col md:justify-center '>
                <h3 className='text-center mt-6 font-fraunces text-[1.5rem] font-bold lg:ml-[-10rem] md:ml-0 xsm:text-[1rem]'>
                  Best quality
                </h3>

                <div className='mt-4 mb-8 '>
                  <p className='text-center max-w-[250px] font-barlow text-[16px] lg:max-w-[350px] md:text-center md:max-w-[220px] xsm:text-[14px]'>
                    Discover an endless variety of the world’s best artisan
                    coffee from each of our roasters.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* second card */}
          <div className='bg-[#0E8784] w-[280px] rounded-md flex flex-col justify-center justify-items-center  text-white lg:w-[600px]  md:w-[300px] xsm:w-[200px]'>
            <div className='my-0 mx-auto lg:flex lg:flex-row gap-8 md:flex-col'>
              <div className='flex justify-center mt-10  lg:mb-8 md:mb-0'>
                <img
                  src='/images/box.png'
                  alt='box'
                  className='w-[50px]'
                />
              </div>

              <div className='lg:flex lg:flex-col md:flex md:flex-col md:justify-center'>
                <h3 className='text-center mt-6 font-fraunces text-[1.5rem] font-bold lg:ml-[-10rem]  md:ml-0 xsm:text-[1rem]'>
                  Exclusive benefits
                </h3>

                <div className='mt-4 mb-8  '>
                  <p className='text-center max-w-[250px] font-barlow text-[16px] lg:max-w-[350px] md:text-center md:max-w-[220px] xsm:text-[14px]'>
                    Special offers and swag when you subscribe, including 30%
                    off your first shipment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* third card */}
          <div className='bg-[#0E8784] w-[280px] rounded-md flex flex-col justify-center justify-items-center  text-white lg:w-[600px]  md:w-[300px] xsm:w-[200px]'>
            <div className='my-0 mx-auto lg:flex lg:flex-row gap-8 md:flex-col'>
              <div className='flex justify-center mt-10  lg:mb-8 md:mb-0'>
                <img
                  src='/images/car.png'
                  alt='car'
                  className='w-[50px]'
                />
              </div>

              <div className='lg:flex lg:flex-col md:flex md:flex-col md:justify-center'>
                <h3 className='text-center mt-6 font-fraunces text-[1.5rem] font-bold lg:ml-[-10rem]  md:ml-0 xsm:text-[1rem]'>
                  Free shipping
                </h3>

                <div className='mt-4 mb-8 '>
                  <p className='text-center max-w-[250px] font-barlow text-[16px] lg:max-w-[350px] md:text-center md:max-w-[220px] xsm:text-[14px]'>
                    We cover the cost and coffee is delivered fast. Peak
                    freshness: guaranteed..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
