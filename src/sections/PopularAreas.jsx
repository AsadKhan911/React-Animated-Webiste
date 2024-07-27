import React, { useEffect } from 'react';
import { useDarkMode } from '../components/DarkModeContext';
import area1 from '../assets/images/area1.jpg';
import area2 from '../assets/images/area2.jpg';
import area3 from '../assets/images/area3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularAreas = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    // Adding AOS refresh to make sure animations re-trigger on changes
    AOS.refresh();
  }, []);

  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <section className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'}
      lg:w-[90%] w-full h-fit m-auto bg-cover bg-center flex justify-center flex-col
      items-center lg:px-20 px-6 py-20 gap-20 `}>
        <div id='top' className='w-full grid md:grid-cols-3 grid-cols-1 justify-center
        items-center gap-8'>
          <div className='mx-auto'>
            <h1 data-aos='zoom-in' className='text-2xl md:text-5xl text-red-500 dark:text-white
           font-semibold'>
              POPULAR AREAS</h1>
            <h1 data-aos='zoom-in' className='text-black dark:text-slate-400 lg:text-[40px]
            font-semibold lg:leading-10 leading-5  mt-0 lg:mt-4 text-xl'>Explore most popular areas</h1>
          </div>

          <div className='grid md:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6'>
            <div data-aos='zoom-in' data-aos-delay='400' style={{ backgroundImage: `url(${area1})` }}
              className='h-[400px] bg-cover bg-center rounded-xl'>
            </div>

            <div data-aos='zoom-in' data-aos-delay='400' style={{ backgroundImage: `url(${area2})` }}
              className='h-[400px] bg-cover bg-center rounded-xl'>
            </div>

            <div data-aos='zoom-in' data-aos-delay='400' style={{ backgroundImage: `url(${area3})` }}
              className='h-[400px] bg-cover bg-center rounded-xl'>
            </div>
          </div>
          </div>

          {/* BOTTOM */}
        <div id="bottom" className='w-full grid grid-cols-1 md:grid-cols-3 md:justify-center
        justify-start items-start gap-6'>

          <div data-aos='slide-up' data-aos-delay='200' className='flex justify-center lg:items-center
          gap-8 w-full'>
            <h1 className='text-black text-7xl font-semibold dark:text-white'>5K+</h1>
            <h1 className='dark:text-slate-400'>ACTIVE <br />LISTINGS</h1>
          </div>
          <div data-aos='slide-up' data-aos-delay='200' className='flex justify-center lg:items-center
          gap-8 w-full'>
            <h1 className='text-black text-7xl font-semibold dark:text-white'>4K+</h1>
            <h1 className='dark:text-slate-400'>PRIME <br /> LOCATION</h1>
          </div>
          
          <div data-aos='slide-up' data-aos-delay='200' className='flex justify-center lg:items-center
          gap-8 w-full'>
            <h1 className='text-black text-7xl font-semibold dark:text-white'>2K+</h1>
            <h1 className='dark:text-slate-400'>RECENTLY <br /> SOLD</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularAreas;
