function Collection() {
  return (
    <>
      <section className='mx-[9.8rem] mt-20 absolute lg:mx-8'>
        <div className='md:flex md:justify-center md:justify-items-center md'>
          <h1 className='text-gradient font-fraunces blur-0 text-[8rem] font-bold tracking-[1.2rem]  xl:text-[5.8rem] wbm:text-[5.6rem] z-30 lg:text-[6rem] lg:tracking-[10px] md:text-[4rem] md:z-0 sm:md:text-[3rem] sm:tracking-[0] md:text-center'>
            our collection
          </h1>
        </div>
        <div className='flex flex-row mt-[-5rem]  lg:flex-col md:mt-4 md:justify-center md:justify-items-center md:items-center'>
          <div className='md:flex md:flex-col md:justify-center md:justify-items-center md:my-0 md:mx-auto md:items-center'>
            <div className='relative'>
              <img
                src='../public/images/gran-expr.png'
                alt='coffe'
                className='z-60 ml-[-1.5rem] md:z-0 md:ml-0'
              />
            </div>
            <div className='mt-10 lg:flex lg:flex-col lg:justify-center lg:justify-items-center lg:mt-[-9.5rem] md:mt-0'>
              <h2 className='font-fraunces text-[1.5rem] font-bold text-center'>
                Gran Expresso
              </h2>
              <p className='mt-2 max-w-[510px] font-barlow text-[1rem] text-center lg:max-w-[300px] lg:ml-[15.5rem] lg:mt-4 md:max-w-[300px] md:ml-0 md:text-center '>
                Light and flavorful blend with cocoa and black pepper for an
                intense experience
              </p>
            </div>
          </div>

          <div className='md:flex md:flex-col md:justify-center md:justify-items-center md:my-0 md:mx-auto'>
            <div className='relative'>
              <img
                src='../public/images/planalto.png'
                alt='coffe'
                className='z-60 ml-[-1.5rem] lg:mt-12 md:z-0 md:ml-0'
              />
            </div>
            <div className='mt-10 lg:flex lg:flex-col lg:justify-center lg:justify-items-center lg:mt-[-9.5rem] md:mt-0'>
              <h2 className='font-fraunces text-[1.5rem] font-bold text-center lg:ml-[-4rem]'>
                Planalto
              </h2>
              <p className='mt-2 max-w-[510px] font-barlow text-[1rem] text-center lg:max-w-[300px] lg:ml-[15.5rem] lg:mt-4 md:max-w-[300px] md:ml-0 md:text-center'>
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts
              </p>
            </div>
          </div>

          <div className='md:flex md:flex-col md:justify-center md:justify-items-center md:my-0 md:mx-auto'>
            <div className='relative'>
              <img
                src='../public/images/picollo.png'
                alt='coffe'
                className='z-60 ml-[-1.5rem] lg:mt-12 md:z-0 md:ml-0'
              />
            </div>
            <div className='mt-10 lg:flex lg:flex-col lg:justify-center lg:justify-items-center lg:mt-[-9.5rem] md:mt-0'>
              <h2 className='font-fraunces text-[1.5rem] font-bold text-center lg:ml-[-5rem]'>
                Picollo
              </h2>
              <p className='mt-2 max-w-[510px] font-barlow text-[1rem] text-center lg:max-w-[300px] lg:ml-[15.5rem] lg:mt-4 md:max-w-[300px] md:ml-0 md:text-center'>
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry
              </p>
            </div>
          </div>

          <div className='md:flex md:flex-col md:justify-center md:justify-items-center md:my-0 md:mx-auto'>
            <div className='relative'>
              <img
                src='../public/images/danche.png'
                alt='coffe'
                className='z-60 ml-[-1.5rem] lg:mt-12 md:z-0 md:ml-'
              />
            </div>
            <div className='mt-10 lg:flex lg:flex-col lg:justify-center lg:justify-items-center lg:mt-[-9.5rem] md:mt-0'>
              <h2 className='font-fraunces text-[1.5rem] font-bold text-center lg:ml-[-5rem]'>
                Danche
              </h2>
              <p className='mt-2 max-w-[510px] font-barlow text-[1rem] text-center lg:max-w-[300px] lg:ml-[15.5rem] lg:mt-4 md:max-w-[300px] md:ml-0 md:text-center'>
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Collection;
