function Commitment() {
  return (
    <>
      <section className='mx-[9.8rem] mt-20 lg:mx-[2rem]'>
        <div className='flex flex-row gap-20 mid:gap-11 lg:gap-10 md:flex-col md:items-center'>
          <div>
            <img
              src='/images/commit.png'
              alt='man'
              className='rounded-sm'
            />
          </div>

          <div>
            <h3 className='font-fraunces font-bold text-[#333D4B] text-[3rem] pt-16 mid:pt-8 lg:pt-6   md:pt-6 md:text-[2rem] fbm:text-[2rem] fbm:pt-4'>
              Our commitment
            </h3>
            <div className='max-w-[520px] pt-6  lg:max-w-[400px] '>
              <p className='font-barlow text-[1rem] text-[#333D4B]'>
                We’re built on a simple mission and a commitment to doing good
                along the way. We want to make it easy for you to discover and
                brew the world’s best coffee at home. It all starts at the
                source. To locate the specific lots we want to purchase, we
                travel nearly 60 days a year trying to understand the challenges
                and opportunities in each of these places. We collaborate with
                exceptional coffee growers and empower a global community of
                farmers through with well above fair-trade benchmarks. We also
                offer training, support farm community initiatives, and invest
                in coffee plant science. Curating only the finest blends, we
                roast each lot to highlight tasting profiles distinctive to
                their native growing region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Commitment;
