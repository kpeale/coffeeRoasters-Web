import { useState } from 'react';

function CoffeePackg() {
  const [show, setShow] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [showThirdAnswers, setShowThirdAnswers] = useState(false);
  const [showFourthAnswers, setShowFourthAnswers] = useState(false);
  const [showFifthAnswers, setShowFifthAnswers] = useState(false);
  const [preference, setPreference] = useState('');
  const [beanType, setBeanType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [grindOption, setGrindOption] = useState('');
  const [deliveries, setDeliveries] = useState('');

  // State variables to keep track of selected options
  const [selectedPreference, setSelectedPreference] = useState('');
  const [selectedBeanType, setSelectedBeanType] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [selectedGrindOption, setSelectedGrindOption] = useState('');
  const [selectedDeliveries, setSelectedDeliveries] = useState('');

  // state for modal and functionality
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  function toggleArrow() {
    setShow(!show);
  }

  function toggleAnswers() {
    setShowAnswers(!showAnswers);
  }

  function toggleThirdAnswer() {
    setShowThirdAnswers(!showThirdAnswers);
  }

  function toggleFourthAnswer() {
    setShowFourthAnswers(!showFourthAnswers);
  }

  function toggleFifthAnswer() {
    setShowFifthAnswers(!showFifthAnswers);
  }

  function handleAnswerSelection(question, answer) {
    switch (question) {
      case 'preferences':
        setPreference(answer);
        setSelectedPreference(answer); // Update selected option
        break;
      case 'beanType':
        setBeanType(answer);
        setSelectedBeanType(answer); // Update selected option
        break;
      case 'quantity':
        setQuantity(answer);
        setSelectedQuantity(answer); // Update selected option
        break;
      case 'grindOption':
        setGrindOption(answer);
        setSelectedGrindOption(answer); // Update selected option
        break;
      case 'deliveries':
        setDeliveries(answer);
        setSelectedDeliveries(answer); // Update selected option
        break;
      default:
        break;
    }
  }

  return (
    <>
      <section className='mt-28 mx-32 lg:mx-8 md:mt-10'>
        <div className='flex flex-row gap-32 lg:flex-col'>
          {/* div for the numbers */}
          <div className='lg:hidden'>
            <div className='flex flex-row   '>
              <h3 className='text-[#83888F] font-fraunces text-[1.5rem] font-bold border-b border-[#979797]'>
                01
              </h3>
              <h3 className='text-[#333D4B] font-fraunces text-[1.5rem] font-bold border-b border-[#979797] pl-5'>
                Preferences
              </h3>
            </div>
            {/* second div */}
            <div className='flex flex-row '>
              <h3 className='text-[#83888F] font-fraunces text-[1.5rem] font-bold border-b border-[#979797]'>
                02
              </h3>
              <h3 className='text-[#333D4B] font-fraunces text-[1.5rem] font-bold border-b border-[#979797] pl-5'>
                Bean Type
              </h3>
            </div>

            {/* third div */}
            <div className='flex flex-row '>
              <h3 className='text-[#83888F] font-fraunces text-[1.5rem] font-bold border-b border-[#979797]'>
                03
              </h3>
              <h3 className='text-[#333D4B] font-fraunces text-[1.5rem] font-bold border-b border-[#979797] pl-5'>
                Quantity{' '}
              </h3>
            </div>
            {/* fourth div */}
            <div className='flex flex-row '>
              <h3 className='text-[#83888F] font-fraunces text-[1.5rem] font-bold border-b border-[#979797]'>
                04
              </h3>
              <h3 className='text-[#333D4B] font-fraunces text-[1.5rem] font-bold border-b border-[#979797] pl-5'>
                Grind Option{' '}
              </h3>
            </div>

            {/* fifth div */}
            <div className='flex flex-row '>
              <h3 className='text-[#83888F] font-fraunces text-[1.5rem] font-bold '>
                05
              </h3>
              <h3 className='text-[#333D4B] font-fraunces text-[1.5rem] font-bold  pl-5'>
                Deliveries
              </h3>
            </div>
          </div>
          {/* div for Q and A */}
          <div className='flex flex-col'>
            {/* first question */}
            <div>
              {/* this div is for the questions */}
              <div className='flex flex-row gap-8 lg:gap-[16.8rem] md:gap-8 xsm:gap-[8px]'>
                <h3 className='font-fraunces text-[2.5rem] text-[#83888F] font-bold lg:text-[2rem] md:text-[1.5rem]'>
                  How do you drink your coffee?
                </h3>
                <div className='mt-5'>
                  <button onClick={toggleArrow}>
                    {show ? (
                      <img
                        src='images/path-open.png'
                        alt='arrow'
                      />
                    ) : (
                      <img
                        src='images/path-close.png'
                        alt='arrow'
                      />
                    )}
                  </button>
                </div>
              </div>
              {/* this div is for the answers */}
              {/* the container */}
              {show && (
                <div className='flex flex-row gap-6 mt-5 md:flex-col'>
                  <div
                    className={`max-w-[200px] rounded-md lg:max-w-[240px] md:max-w-[612px]  ${
                      selectedPreference === 'Capsule'
                        ? 'bg-[#0E8784]'
                        : 'bg-[#979797]'
                    }`}
                    onClick={() =>
                      handleAnswerSelection('preferences', 'Capsule')
                    }
                  >
                    <h3 className='text-[#333D4B] text-[1.5rem] font-bold pt-4 pl-3'>
                      Capsule
                    </h3>
                    <p className='font-barlow text-[#333D4B] text-[16px] pl-3 pb-10 pt-3'>
                      Compatible with Nespresso systems and similar brewers
                    </p>
                  </div>
                  {/* second box */}
                  <div
                    className={`max-w-[200px] rounded-md lg:max-w-[240px]  md:max-w-[612px]  ${
                      selectedPreference === 'Filter'
                        ? 'bg-[#0E8784]'
                        : 'bg-[#979797]'
                    }`}
                    onClick={() =>
                      handleAnswerSelection('preferences', 'Filter')
                    }
                  >
                    <h3 className='text-[#333D4B] text-[1.5rem] font-bold pt-4 pl-3'>
                      Filter
                    </h3>
                    <p className='font-barlow text-[#333D4B] text-[16px] pl-3 pb-10 pt-3'>
                      For pour over or drip methods like Aeropress, Chemex, and
                      V60
                    </p>
                  </div>
                  {/* third box */}
                  <div
                    className={`max-w-[200px] rounded-md lg:max-w-[240px] md:max-w-[612px]  ${
                      selectedPreference === 'Espresso'
                        ? 'bg-[#0E8784]'
                        : 'bg-[#979797]'
                    }`}
                    onClick={() =>
                      handleAnswerSelection('preferences', 'Espresso')
                    }
                  >
                    <h3 className='text-[#333D4B] text-[1.5rem] font-bold pt-4 pl-3'>
                      Espresso
                    </h3>
                    <p className='font-barlow text-[#333D4B] text-[16px] pl-3 pb-10 pt-3'>
                      Dense and finely ground beans for an intense, flavorful
                      experience
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* second question */}
            <div>
              {/* this div is for the questions */}
              <div className='flex flex-row gap-[14.5rem] lg:gap-[26.5rem] md:gap-[9.5rem] xsm:gap-[3.5rem]'>
                <h3 className='font-fraunces text-[2.5rem] text-[#83888F] font-bold lg:text-[2rem] md:text-[1.5rem]'>
                  What type of coffee?
                </h3>
                <div className='mt-5'>
                  <button onClick={toggleAnswers}>
                    {showAnswers ? (
                      <img
                        src='images/path-open.png'
                        alt='arrow'
                      />
                    ) : (
                      <img
                        src='images/path-close.png'
                        alt='arrow'
                      />
                    )}
                  </button>
                </div>
              </div>
              {/* this div is for the answers */}
              {/* the container */}
              {showAnswers && (
                <div className='flex flex-row gap-6 mt-5  md:flex-col'>
                  <div
                    className={`max-w-[200px] rounded-md lg:max-w-[240px] md:max-w-[612px]  ${
                      selectedBeanType === 'Single Origin'
                        ? 'bg-[#0E8784]'
                        : 'bg-[#979797]'
                    }`}
                    onClick={() =>
                      handleAnswerSelection('beanType', 'Single Origin')
                    }
                  >
                    <h3 className='text-[#333D4B] text-[1.5rem] font-bold pt-4 pl-3'>
                      Single Origin
                    </h3>
                    <p className='font-barlow text-[#333D4B] text-[16px] pl-3 pb-10 pt-3'>
                      Distinct, high quality coffee from a specific family-owned
                      farm
                    </p>
                  </div>
                  {/* second box */}
                  <div
                    className={`max-w-[200px] rounded-md lg:max-w-[240px] md:max-w-[612px]  ${
                      selectedBeanType === 'Decaf'
                        ? 'bg-[#0E8784]'
                        : 'bg-[#979797]'
                    }`}
                  >
                    <h3
                      className='text-[#333D4B] text-[1.5rem] font-bold pt-4 pl-3'
                      onClick={() => handleAnswerSelection('beanType', 'Decaf')}
                    >
                      Decaf
                    </h3>
                    <p className='font-barlow text-[#333D4B] text-[16px] pl-3 pb-10 pt-3'>
                      Just like regular coffee, except the caffeine has been
                      removed
                    </p>
                  </div>
                  {/* third box */}
                  <div
                    className={`max-w-[200px] rounded-md lg:max-w-[240px] md:max-w-[612px]  ${
                      selectedBeanType === 'Blended'
                        ? 'bg-[#0E8784]'
                        : 'bg-[#979797]'
                    }`}
                    onClick={() => handleAnswerSelection('beanType', 'Blended')}
                  >
                    <h3 className='text-[#333D4B] text-[1.5rem] font-bold pt-4 pl-3'>
                      Blended
                    </h3>
                    <p className='font-barlow text-[#333D4B] text-[16px] pl-3 pb-10 pt-3'>
                      Combination of two or three dark roasted beans of organic
                      coffees
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* third question */}
            <div>
              {/* this div is for the questions */}
              <div className='flex flex-row gap-28 lg:gap-[20.5rem] md:gap-[5rem] xsm:gap-[1.5rem]'>
                <h3 className='font-fraunces text-[2.5rem] text-[#83888F] font-bold lg:text-[2rem] md:text-[1.5rem]'>
                  How much would you like?
                </h3>
                <div className='mt-5'>
                  <button onClick={toggleThirdAnswer}>
                    {showThirdAnswers ? (
                      <img
                        src='images/path-open.png'
                        alt='arrow'
                      />
                    ) : (
                      <img
                        src='images/path-close.png'
                        alt='arrow'
                      />
                    )}
                  </button>
                </div>
              </div>
              {/* this div is for the answers */}
              {/* the container */}
              {showThirdAnswers && (
                <div className='flex flex-row gap-6 mt-5  md:flex-col'>
                  <div
                    className={`max-w-[200px] rounded-md lg:max-w-[240px] md:max-w-[612px]  ${
                      selectedQuantity === '250g'
                        ? 'bg-[#0E8784]'
                        : 'bg-[#979797]'
                    }`}
                    onClick={() => handleAnswerSelection('quantity', '250g')}
                  >
                    <h3 className='text-[#333D4B] text-[1.5rem] font-bold pt-4 pl-3'>
                      250g
                    </h3>
                    <p className='font-barlow text-[#333D4B] text-[16px] pl-3 pb-10 pt-3'>
                      Perfect for the solo drinker. Yields about 12 delicious
                      cups.
                    </p>
                  </div>
                  {/* second box */}
                  <div
                    className={`max-w-[200px] rounded-md lg:max-w-[240px] md:max-w-[612px]  ${
                      selectedQuantity === '500g'
                        ? 'bg-[#0E8784]'
                        : 'bg-[#979797]'
                    }`}
                    onClick={() => handleAnswerSelection('quantity', '500g')}
                  >
                    <h3 className='text-[#333D4B] text-[1.5rem] font-bold pt-4 pl-3'>
                      500g
                    </h3>
                    <p className='font-barlow text-[#333D4B] text-[16px] pl-3 pb-10 pt-3'>
                      Perfect option for a couple. Yields about 40 delectable
                      cups.
                    </p>
                  </div>
                  {/* third box */}
                  <div
                    className={`max-w-[200px] rounded-md lg:max-w-[240px] md:max-w-[612px]  ${
                      selectedQuantity === '1000g'
                        ? 'bg-[#0E8784]'
                        : 'bg-[#979797]'
                    }`}
                    onClick={() => handleAnswerSelection('quantity', '1000g')}
                  >
                    <h3 className='text-[#333D4B] text-[1.5rem] font-bold pt-4 pl-3'>
                      1000g
                    </h3>
                    <p className='font-barlow text-[#333D4B] text-[16px] pl-3 pb-10 pt-3'>
                      Perfect for offices and events. Yields about 90 delightful
                      cups.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* fourth question */}
            <div>
              {/* this div is for the questions */}
              <div className='flex flex-row gap-[11.2rem] lg:gap-[24rem] md:gap-[7.6rem] xsm:gap-[1.5rem]'>
                <h3 className='font-fraunces text-[2.5rem] text-[#83888F] font-bold lg:text-[2rem] md:text-[1.5rem]'>
                  Want us to grind them?
                </h3>
                <div className='mt-5'>
                  <button onClick={toggleFourthAnswer}>
                    {showFourthAnswers ? (
                      <img
                        src='images/path-open.png'
                        alt='arrow'
                      />
                    ) : (
                      <img
                        src='images/path-close.png'
                        alt='arrow'
                      />
                    )}
                  </button>
                </div>
              </div>
              {/* this div is for the answers */}
              {/* the container */}
              {showFourthAnswers && (
                <div className='flex flex-row gap-6 mt-5  md:flex-col'>
                  <div
                    className={`max-w-[200px] rounded-md lg:max-w-[240px] md:max-w-[612px]  ${
                      selectedGrindOption === 'Wholebean'
                        ? 'bg-[#0E8784]'
                        : 'bg-[#979797]'
                    }`}
                    onClick={() =>
                      handleAnswerSelection('grindOption', 'Wholebean')
                    }
                  >
                    <h3 className='text-[#333D4B] text-[1.5rem] font-bold pt-4 pl-3'>
                      Wholebean
                    </h3>
                    <p className='font-barlow text-[#333D4B] text-[16px] pl-3 pb-10 pt-3'>
                      Best choice if you cherish the full sensory experience
                    </p>
                  </div>
                  {/* second box */}
                  <div
                    className={`max-w-[200px] rounded-md lg:max-w-[240px] md:max-w-[612px]  ${
                      selectedGrindOption === 'Filter'
                        ? 'bg-[#0E8784]'
                        : 'bg-[#979797]'
                    }`}
                    onClick={() =>
                      handleAnswerSelection('grindOption', 'Filter')
                    }
                  >
                    <h3 className='text-[#333D4B] text-[1.5rem] font-bold pt-4 pl-3'>
                      Filter
                    </h3>
                    <p className='font-barlow text-[#333D4B] text-[16px] pl-3 pb-10 pt-3'>
                      For drip or pour-over coffee methods such as V60 or
                      Aeropress
                    </p>
                  </div>
                  {/* third box */}
                  <div
                    className={`max-w-[200px] rounded-md lg:max-w-[240px] md:max-w-[612px]  ${
                      selectedGrindOption === 'Cafetiére'
                        ? 'bg-[#0E8784]'
                        : 'bg-[#979797]'
                    }`}
                    onClick={() =>
                      handleAnswerSelection('grindOption', ' Cafetiére')
                    }
                  >
                    <h3 className='text-[#333D4B] text-[1.5rem] font-bold pt-4 pl-3'>
                      Cafetiére
                    </h3>
                    <p className='font-barlow text-[#333D4B] text-[16px] pl-3 pb-10 pt-3'>
                      Course ground beans specially suited for french press
                      coffee
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* fifth question */}
            <div>
              {/* this div is for the questions */}
              <div className='flex flex-row gap-[4rem] lg:gap-[17.8rem] md:gap-[3rem] xsm:gap-3'>
                <h3 className='font-fraunces text-[2.5rem] text-[#83888F] font-bold lg:text-[2rem] md:text-[1.5rem]'>
                  How often should we deliver?
                </h3>
                <div className='mt-5'>
                  <button onClick={toggleFifthAnswer}>
                    {showFifthAnswers ? (
                      <img
                        src='images/path-open.png'
                        alt='arrow'
                      />
                    ) : (
                      <img
                        src='images/path-close.png'
                        alt='arrow'
                      />
                    )}
                  </button>
                </div>
              </div>
              {/* this div is for the answers */}
              {/* the container */}
              {showFifthAnswers && (
                <div className='flex flex-row gap-6 mt-5  md:flex-col'>
                  <div
                    className={`max-w-[200px] rounded-md lg:max-w-[240px] md:max-w-[612px]  ${
                      selectedDeliveries === 'Every week'
                        ? 'bg-[#0E8784]'
                        : 'bg-[#979797]'
                    }`}
                    onClick={() =>
                      handleAnswerSelection('deliveries', '  Every week')
                    }
                  >
                    <h3 className='text-[#333D4B] text-[1.5rem] font-bold pt-4 pl-3'>
                      Every week
                    </h3>
                    <p className='font-barlow text-[#333D4B] text-[16px] pl-3 pb-10 pt-3'>
                      $7.20 per shipment. Includes free first-class shipping.
                    </p>
                  </div>
                  {/* second box */}
                  <div
                    className={`max-w-[200px] rounded-md lg:max-w-[240px] md:max-w-[612px]  ${
                      selectedDeliveries === 'Every 2 week'
                        ? 'bg-[#0E8784]'
                        : 'bg-[#979797]'
                    }`}
                    onClick={() =>
                      handleAnswerSelection('deliveries', 'Every 2 week')
                    }
                  >
                    <h3 className='text-[#333D4B] text-[1.5rem] font-bold pt-4 pl-3'>
                      Every 2 weeks
                    </h3>
                    <p className='font-barlow text-[#333D4B] text-[16px] pl-3 pb-10 pt-3'>
                      $9.60 per shipment. Includes free priority shipping.
                    </p>
                  </div>
                  {/* third box */}
                  <div
                    className={`max-w-[200px] rounded-md lg:max-w-[240px] md:max-w-[612px] ${
                      selectedDeliveries === 'Every month'
                        ? 'bg-[#0E8784]'
                        : 'bg-[#979797]'
                    }`}
                    onClick={() =>
                      handleAnswerSelection('deliveries', 'Every month')
                    }
                  >
                    <h3 className='text-[#333D4B] text-[1.5rem] font-bold pt-4 pl-3'>
                      Every month
                    </h3>
                    <p className='font-barlow text-[#333D4B] text-[16px] pl-3 pb-10 pt-3'>
                      Every month $12.00 per shipment. Includes free priority
                      shipping.
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/*Order description  */}
            <div className='bg-[#2C343E] max-w-[645px] mt-10 rounded-md lg:max-w-[955px] md:max-w-[700px]'>
              <div className='px-10 py-8'>
                <h2 className='text-white font-barlow text-[16px] '>
                  ORDER SUMMARY
                </h2>
                <p className='text-white font-fraunces text-[1.5rem]'>
                  {'"I drink my coffee as a '}
                  <span
                    className={
                      selectedPreference ? 'text-[#0E8784] font-bold' : ''
                    }
                  >
                    {preference}
                  </span>
                  {`, with a `}
                  <span
                    className={
                      selectedBeanType ? 'text-[#0E8784] font-bold' : ''
                    }
                  >
                    {beanType}
                  </span>
                  {' type of bean. '}
                  <span
                    className={
                      selectedQuantity ? 'text-[#0E8784] font-bold' : ''
                    }
                  >
                    {quantity}
                  </span>
                  {' aka '}
                  <span
                    className={
                      selectedGrindOption ? 'text-[#0E8784] font-bold' : ''
                    }
                  >
                    {grindOption}
                  </span>
                  {`, sent to me `}
                  <span
                    className={
                      selectedDeliveries ? 'text-[#0E8784] font-bold' : ''
                    }
                  >
                    {deliveries}
                  </span>
                  {'"'}
                </p>
              </div>
            </div>
            {/* button */}
            <div className='mt-5 flex justify-end mb-20 mr-2 lg:justify-center'>
              <button
                onClick={toggleModal}
                className='text-white py-2 px-4 rounded-md bg-[#0e8781] font-fraunces text-[1.125rem] md:text-[1rem]'
              >
                Create my plan!
              </button>
            </div>
            <div
              className={`overlay ${showModal ? 'show' : ''}`}
              onClick={toggleModal}
            ></div>
            {/* Step 3: Modal component */}
            {showModal && (
              <div className='modal'>
                <div className='modal-content'>
                  {/* Modal content */}
                  <span
                    className='close'
                    onClick={toggleModal}
                  ></span>
                  <div>
                    <div className='bg-[#333d4b] px-10 xsm:px-4'>
                      <h2 className='font-fraunces text-white text-[2.5rem] '>
                        Order Summary
                      </h2>
                    </div>
                    <div className='px-10 pt-8 xsm:px-4 xsm:pt-4 '>
                      <p className=' font-fraunces text-[1.5rem] text-[#83888f]'>
                        {'"I drink my coffee as a '}
                        <span
                          className={
                            selectedPreference ? 'text-[#0E8784] font-bold' : ''
                          }
                        >
                          {preference}
                        </span>
                        {`, with a `}
                        <span
                          className={
                            selectedBeanType ? 'text-[#0E8784] font-bold' : ''
                          }
                        >
                          {beanType}
                        </span>
                        {' type of bean. '}
                        <span
                          className={
                            selectedQuantity ? 'text-[#0E8784] font-bold' : ''
                          }
                        >
                          {quantity}
                        </span>
                        {' aka '}
                        <span
                          className={
                            selectedGrindOption
                              ? 'text-[#0E8784] font-bold'
                              : ''
                          }
                        >
                          {grindOption}
                        </span>
                        {`, sent to me `}
                        <span
                          className={
                            selectedDeliveries ? 'text-[#0E8784] font-bold' : ''
                          }
                        >
                          {deliveries}
                        </span>
                        {'"'}
                      </p>
                    </div>
                    <div className='px-10 xsm:px-4'>
                      <p className='font-barlow text-[16px]'>
                        Is this correct? You can proceed to checkout or go back
                        to plan selection if something is off. Subscription
                        discount codes can also be redeemed at the checkout.{' '}
                      </p>
                    </div>
                    <div className='flex flex-row gap-4 px-10 py-6 ssm:px-4'>
                      <p className='font-fraunces text-black text-[2rem] md:hidden'>
                        $14.00/ mo
                      </p>
                      <button className='text-white py-2 px-4 rounded-md bg-[#0e8781] font-fraunces text-[1.125rem] md:text-[1rem] md:hidden'>
                        check out
                      </button>
                      <button className='text-white py-2 px-4 rounded-md bg-[#0e8781] font-fraunces text-[1.125rem] md:text-[1rem] newmw:hidden'>
                        Checkout- $14.00/ mo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default CoffeePackg;
