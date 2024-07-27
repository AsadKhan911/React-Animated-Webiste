import React , { useState , useEffect } from 'react'
import { service } from '../components/export'
import { useDarkMode } from '../components/DarkModeContext';
import AOS from 'aos';

 


const Services = () => {

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
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} pb-20`}>
        <section id='services' className={`${darkMode ? 'dark: bg-gray-800' : 'light bg-red-100'} lg:w-[95%]
        w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20
        gap-10`}>

          <div className='flex flex-col justify-center items-start gap-0 md:gap-4 mx-auto'>
            <h1 data-aos='zoom-in' className='text-2xl md:text-5xl text-red-500 dark:text-white
           font-semibold'>OUR SERVICES</h1>
            <h1 data-aos='zoom-in' className='text-black text-xl md:text-4xl font-semibold
             dark:text-slate-400'>Explore our best services</h1>
          </div>

          <div id="service-box" className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center
          items-center gap-8'>
            {
              service.map((item,index)=>(
                <div data-aos='zoom-in' data-aos-delay='200' key={index} className='bg-white 
                dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4
                rounded-xl border-b-[5px] border-red-600 hover:bg-red-200 cursor-pointer'>

                  <div className='p-6 rounded-full bg-red-100'>
                    <item.icon className='text-red-600 size-10 transform hover:scale-110 transition-transform
                    duration-300 cursor-pointer'/>
                  </div>

                  <h1 className='text-black text-[22px] font-semibold dark:text-white'>{item.title}</h1>
                  <h1 className='text-lg text-slate-700 dark:text-white'>{item.desc}</h1>
                  <button className='border-b-2 border-red-600 text-red-600 font-semibold p-0 
                  dark:text-slate-400'>READ MORE</button>
                </div>
              ))
            }
          </div>
        </section>
    </div>
  )
}

export default Services
