function WorksCrt() {
  return (
    <>
      <section className=' mt-20 px-14 mx-20 mb-6 lg:mx-8 md:mt-10 bg-[#2C343E] rounded-md pb-12'>
        <div className='flex flex-row mt-16  md:mt-0 md:hidden pt-12 '>
          <div className='flex flex-row md:'>
            <img
              src='/images/oval-create.png'
              alt='oval'
              className='text-[#0E8784]'
            />
            <div className='line mt-4'></div>
          </div>
          {/* another line */}
          <div className='flex flex-row'>
            <img
              src='/images/oval-create.png'
              alt='oval'
            />
            <div className='line  mt-4'></div>
          </div>

          {/* another line */}
          <div className='flex flex-row'>
            <img
              src='/images/oval-create.png'
              alt='oval'
            />
          </div>
        </div>

        <div className='mt-6 flex flex-row gap-10 lg:gap-5 md:flex-col md:items-center '>
          <div>
            <h2 className='font-fraunces text-[4.5rem] text-[#FDD6BA] md:text-center'>
              01
            </h2>
            <h2 className='font-fraunces text-[2rem] text-white max-w-[200px] font-bold lg:text-[1.75rem] md:text-center md:max-w-[250px] '>
              Pick your coffee
            </h2>
            <div className='mt-2 max-w-[300px] lg:max-w-[220px] md:max-w-[320px] '>
              <p className='font-barlow text-[16px] text-white'>
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>
          </div>
          {/* second row */}
          <div>
            <h2 className='font-fraunces text-[4.5rem] text-[#FDD6BA] md:text-center'>
              02
            </h2>
            <h2 className='font-fraunces text-[2rem] text-white max-w-[200px] font-bold lg:text-[1.75rem] md:text-center md:max-w-[300px]'>
              Choose the currency
            </h2>
            <div className='mt-2 max-w-[300px] lg:max-w-[220px] md:max-w-[320px]'>
              <p className='font-barlow text-[16px] text-white'>
                Customize your order frequency, quantity, even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal..
              </p>
            </div>
          </div>

          {/* third row  */}
          <div>
            <h2 className='font-fraunces text-[4.5rem] text-[#FDD6BA] md:text-center'>
              03
            </h2>
            <h2 className='font-fraunces text-[2rem]  max-w-[200px] font-bold lg:text-[1.75rem] md:text-center md:max-w-[300px] text-white'>
              Receive and enjoy!
            </h2>
            <div className='mt-2 max-w-[300px] lg:max-w-[220px] md:max-w-[320px]'>
              <p className='font-barlow text-[16px]  text-white'>
                We ship your package within 48 hours, freshly roasted. Sit back
                and enjoy award-winning world-class coffees curated to provide a
                distinct tasting experience..
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorksCrt;
