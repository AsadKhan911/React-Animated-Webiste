import React from 'react'
import { useEffect } from 'react'
import aboutimg from '../assets/images/about.jpg'
import { useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])

  const { darkMode, toggleDarkMode } = useDarkMode() //Destructing

  return (
    <>
      <section id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full
    m-auto lg:px-40 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
        <div>
          <img data-aos='zoom-in' src={aboutimg} alt="About Image" className='rounded-2xl lg:w-[500px]
        lg:h-[600px]'/>
        </div>

        <div className='flex flex-col justify-center items-start gap-8'>
          <h1 data-aos='zoom-in' className='text-2xl md:text-5xl text-red-500 dark:text-white
           font-semibold mx-auto lg:mx-0'>
            WHO WE ARE?</h1>
          <h1 data-aos='zoom-in' data-aos-delay='200' className='text-black lg:text-[40px] text-[30px] p-2 lg:p-0
        leading-10 dark:text-slate-400'>Trusted property experts in Islamabad and Rawalpindi, helping you find homes.</h1>
          <p data-aos='zoom-in' data-aos-delay='300' className='text-gray-600 dark:text-slate-500
        text-justify lg:text-xl text-xl p-2 lg:p-0'>We are experienced property specialists in Islamabad and Rawalpindi, providing reliable services to help you find the perfect home quickly and effortlessly.
          </p>
          <div className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white
            dark:hover:text-black text-lg p-4 text-white font-semibold rounded-xl cursor-pointer
            transform hover:scale-110 transition-transform duration-300 mx-auto lg:m-0'>
          <button >READ MORE</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
