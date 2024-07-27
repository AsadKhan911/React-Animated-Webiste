import { React, useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

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

    <div className={`${darkMode ? 'dark: bg-black' : 'light bg-transparent'}`}>
      <section id="contact" className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} lg:w-[95%]
      w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36
      px-6 py-20 gap-10`}>
        <div data-aos='zoom-in' className='bg-white dark:bg-black p-10 flex flex-col justify-center 
        items-start gap-4 rounded-xl'>
          <h1 className='text-2xl text-black font-semibold dark:text-white'>Send us a message today</h1>
          <input type="text" className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'
            placeholder='Enter your full name' />

          <input type="email" className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'
            placeholder='Enter your valid email' />

          <input type="number" className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'
            placeholder='Enter your mobile number' />

          <textarea name="" id="" cols="30" rows="5" className='w-full px-6 py-3 border-2 border-gray-200 
            rounded-xl' placeholder='Enter your message here'></textarea>

          <button className='bg-red-600 w-full text-base px-8 py-3 text-white font-semibold
            rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer'>SUBMIT</button>
        </div>

        <div className='flex flex-col justify-center items-start gap-12 lg:p-10 p-6'>
          <h1 data-aos='zoom-in' data-aos-delay='200' className='text-2xl md:text-5xl text-red-500
           dark:text-white font-semibold'>
            REACH US
          </h1>

          <h1 data-aos='zoom-in' data-aos-delay='400' className='text-black text-[30px] font-semibold
          leading-9 dark:text-slate-300'>Contact us today for expert assistance with properties in Rawalpindi and Islamabad. 
          </h1>

          <p data-aos='fade-up' data-aos-delay='600' className='text-base text-gray-600 text-justify 
          dark:text-slate-400'>Reach us for unparalleled real estate services in Rawalpindi and Islamabad. Our dedicated team is ready to assist with buying, selling, or renting properties, ensuring a seamless experience for you.
          </p>

          <button className='bg-red-600 text-base px-8 py-3 text-white font-semibold rounded-xl hover:bg-black
        dark:hover:bg-red-700 cursor-pointer'>SEND EMAIL</button>
        </div>
      </section>
    </div>
  )
}

export default Contact
