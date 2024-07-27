import React, { useEffect } from 'react';
import { useDarkMode } from '../components/DarkModeContext';
import { property } from '../components/export'
import {
  FaBath, FaShareAlt, FaBed, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo,
  FaCamera,
  FaHeart
} from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Properties = () => {

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
      <section id="properties" className='lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col
      justify-center items-start gap-10'>
        <div className='flex flex-col justify-center items-start gap-0 md:gap-4 mx-auto'>
          <h1 data-aos='zoom-in' className='text-2xl md:text-5xl text-red-500 dark:text-white
           font-semibold'>
            PROPERTIES
          </h1>
          <h1 data-aos='zoom-in' className='text-black text-xl md:text-4xl font-semibold dark:text-slate-400'>
            Explore the latest
          </h1>
        </div>

        {/* PROPERTIES GRID SECTION */}
        <div id="grid-box" className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center
        items-center gap-8'>
          {
            property.map((item, index) => (
              <div data-aos='zoom-in' data-aos-delay='200' key={index} className='bg-white dark:bg-gray-800
              rounded-xl w-full'>
                <div className='bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between
                items-end' style={{ backgroundImage: `url(${item.images})` }}>

                  <div id='top' className='flex justify-between items-end w-full'>
                    <div><button className='px-1 py-1 text-[8px] rounded-lg bg-red-600 hover:bg-white hover:text-black
                    text-white sm:rounded-full sm:px-3 sm:py-1 sm:text-[13px]'>Featured</button></div>

                    <div className='flex justify-between items-center gap-3'>
                      <button className='px-1 py-1 text-[8px] rounded-lg bg-red-600 hover:bg-white hover:text-black
                    text-white sm:rounded-full sm:px-3 sm:py-1 sm:text-[13px]'>Sales</button>
                      <button className='px-1 py-1 text-[8px] rounded-lg bg-red-600 hover:bg-white hover:text-black
                    text-white sm:rounded-full sm:px-3 sm:py-1 sm:text-[13px]'>Active</button>
                    </div>
                  </div>

                  <div id='bottom' className='flex justify-between items-end w-full'>
                    <div className='flex justify-start items-center gap-2'>
                      <FaMapMarkerAlt className='size-3 sm:size-4 text-white' />
                      <h1 className='text-white'>{item.address}</h1>
                    </div>

                    <div className='flex justify-center items-center gap-2 sm:gap-4'>
                      <FaVideo className='size-3 sm:size-4 text-white' />
                      <FaCamera className='size-3 sm:size-4 text-white' />
                    </div>
                  </div>
                </div>

                <div className='px-6 py-3 flex flex-col justify-center items-start gap-2 w-full'>
                  <h1 className='text-[14px] leading-[22px] sm: text-xl text-black font-semibold dark:text-white'>{item.name}</h1>
                  <h1 className='text-[14px] leading-[22px] sm: text-xl text-red-600 font-bold dark:text-white'>{item.price}</h1>
                  <p className='text-[14px] leading-[22px] sm: text-xl dark:text-white'>{item.about}</p>
                  <div id='icons' className='flex justify-center items-start gap-4'>

                    <div className='flex justify-center items-center gap-2'>
                      <FaBath className='size-3 sm:size-5 text-red-400' />
                      <h1 className='text-[12px] sm:text-lg dark:text-white'>{item.bath}</h1>
                    </div>

                    <div className='flex justify-center items-center gap-2'>
                      <FaBed className='size-3 sm:size-5 text-red-400' />
                      <h1 className='text-[12px] sm:text-lg dark:text-white'>{item.bed}</h1>
                    </div>

                    <div className='flex sm:justify-center sm:items-center   gap-2'>
                      <MdSpaceDashboard className='size-5 sm:size-5 text-red-400' />
                      <h1 className='text-[12px] sm:text-lg dark:text-white'>{item.area}</h1>
                    </div>
                  </div>

                  <div className='w-full h-[1px] bg-gray-300 mt-8'></div>  {/* Straight line */}

                  <div id='owner-info' className='flex justify-between items-center w-full mt-2'>

                    <div className='flex justify-center items-center gap-2'>
                      <FaUserCircle className='size-5 text-red-400' />
                      <h1 className='dark:text-white'>{item.owner}</h1>
                    </div>

                    <div className='flex justify-center items-center gap-4'>
                      <div className='p-2 border-2 border-gray-200 hover:bg-gray-200 cursor-pointer
                      transform hover:scale-125 transition-transform duration-300 rounded-lg'>
                        <FaHeart className='size-4 text-red-400' /></div>
                      <div className='p-2 border-2 border-gray-200 hover:bg-gray-200 cursor-pointer
                        transform hover:scale-125 transition-transform duration-300 rounded-lg'>
                        <FaPlus className='size-4 text-red-400' /></div>
                      <div className='p-2 border-2 border-gray-200 hover:bg-gray-200 cursor-pointer
                      transform hover:scale-125 transition-transform duration-300 rounded-lg'>
                        <FaShareAlt className='size-4 text-red-400' /></div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Properties;
