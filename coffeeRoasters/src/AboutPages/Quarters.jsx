function Quarters() {
  return (
    <>
      <section className='mt-28 mx-[9.8rem] mb-32 lg:mx-[3rem] '>
        <h3 className='text-[#83888F] font-fraunces text-[1.5rem] font-bold md:text-center'>
          Our headquarters
        </h3>

        <div className='mt-6 flex flex-row gap-40 lg:gap-24 md:flex-col md:items-center md:gap-6'>
          <div>
            <div className='flex justify-center'>
              <img
                src='/images/quarters-img1.png'
                alt='map'
              />
            </div>
            <h2 className='font-fraunces text-[2rem] text-black max-w-[300px] font-bold lg:text-[1.75rem] md:text-center  '>
              United Kingdom
            </h2>
            <div className='mt-2 font-barlow text-[16px] text-center'>
              <p> 68 Asfordby Rd</p>
              <p>Alcaston </p>
              <p>SY6 1YA</p>
              <p>+44 1241 918425</p>
            </div>
          </div>
          {/* second row */}
          <div>
            <div className='flex justify-center'>
              <img
                src='/images/quarters-img2.png'
                alt='map'
              />
            </div>
            <h2 className='font-fraunces text-[2rem] text-black max-w-[200px] font-bold lg:text-[1.75rem] md:text-center md:max-w-[300px]'>
              Canada
            </h2>
            <div className='mt-2  font-barlow text-[16px] text-center'>
              <p> 1528 Eglinton Avenue</p>
              <p>Toronto</p>
              <p>Ontario M4P 1A6</p>
              <p>+1 416 485 2997</p>
            </div>
          </div>

          {/* third row  */}
          <div>
            <div className='flex justify-center'>
              <img
                src='/images/quarters-img3.png'
                alt='map'
              />
            </div>
            <h2 className='font-fraunces text-[2rem] text-black max-w-[200px] font-bold lg:text-[1.75rem] md:text-center md:max-w-[300px]'>
              Australia
            </h2>
            <div className='mt-2 font-barlow text-[16px] text-center'>
              <p> 36 Swanston Streete</p>
              <p>Kewell </p>
              <p>Victoria</p>
              <p>+61 4 9928 3629</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quarters;
