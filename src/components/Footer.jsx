import { React , useEffect }from 'react'
import { useDarkMode } from './DarkModeContext'
import Draggable from 'react-draggable';
import { FaFacebookF , FaInstagram , FaTwitter , FaYoutube , FaBuilding , FaMobile ,
  FaFax , FaArrowUp , FaMoon , FaSun } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { IoMdMail } from 'react-icons/io'
import prop7 from '../assets/images/prop7.jpg'
import prop8 from '../assets/images/prop8.jpg'

const Footer = () => {

  const { darkMode, toggleDarkMode } = useDarkMode();
  
  return (
    <>
    <footer className={`${darkMode ? 'dark bg-black' : 'light bg-gray-800'} w-full m-auto lg:px-20
    px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}>
      <div className='flex flex-col justify-center items-start gap-5'>
        <h1 className='text-white text-2xl font-semibold'>About us</h1>
        <p className='text-slate-200 text-justify'>Dedicated to providing exceptional real estate services in Rawalpindi and Islamabad. Trust our experienced team for all your property needs.</p>
           <div id='social-icons' className='flex justify-start items-center gap-4 mt-4'>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer 
            transform hover:scale-110 transition-transform duration-300'>
              <FaFacebookF className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer 
            transform hover:scale-110 transition-transform duration-300'>
              <FaInstagram className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer 
            transform hover:scale-110 transition-transform duration-300'>
              <FaTwitter className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer 
            transform hover:scale-110 transition-transform duration-300'>
              <FaYoutube className='size-5' />
            </div>
           </div>
           <h1 className='text-white'>Copyright Real Estate, All Rights Reserved</h1>
      </div>

      <div className='flex flex-col justify-center items-start gap-5'>
        <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
        <div className='flex justify-center items-center gap-3'>
          <FaBuilding className='text-white size-5' />
          <p className='text-slate-200'>Reach out for personalized assistance with your real estate inquiries.</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <FaMobile className='text-white size-5' />
          <p className='text-slate-200'>+92-311-5014157</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <FaFax className='text-white size-5' />
          <p className='text-slate-200'>+92-333-1303047</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <IoMdMail className='text-white size-5' />
          <p className='text-slate-200'>asadlinkinpark9@gmail.com</p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-start gap-5'>
        <h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>
        <div className='flex justify-center items-center gap-4'>
          <img src={prop7} alt="villa image" className='w-[120px] rounded-lg transform hover:scale-110
          transition-transform duration-300 cursor-pointer'/>
          <div>
            <h1 className='text-lg text-white'>Villa with amazing views</h1>
            <p className='text-slate-400'>PKR 40 million</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <img src={prop8} alt="villa image" className='w-[120px] rounded-lg transform hover:scale-110
          transition-transform duration-300 cursor-pointer'/>
          <div>
            <h1 className='text-lg text-white'>House with luxirious interior</h1>
            <p className='text-slate-400'>PKR 45 million</p>
          </div>
        </div>
      </div>

      {/* Slide to top buttom */}
      <div id='arrow-icon' className='bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed
    lg:bottom-12 bottom-6 right-6'>
      <Link to='home' spy={true} offset={-200} smooth={true}>
      <FaArrowUp className='size-6 text-white' />
      </Link>
    </div>

    <Draggable>
      <div>
      <button onClick={toggleDarkMode} className='flex items-center p-4 rounded-full bg-orange-500 
      absolute md:-left-[60rem] lg:bottom-[400rem] bottom-[900rem] left-[15rem] z-50 lg:left-[60rem] '>
        {darkMode ? <FaSun size={25} className='text-black' /> : <FaMoon size={25} className='text-black' />}
      </button>
    </div>
      </Draggable>
    </footer>

    {/* Dark Mode button */}
    
   


    </>
  )
}

export default Footer




       
 
