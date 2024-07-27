import { React , useEffect } from 'react'
import { client } from '../components/export'
import { useDarkMode } from '../components/DarkModeContext'
import { FaStar } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Clients = () => {

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
      <section id='testimonials' className='lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl
      flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20 -mt-10 md:-m-5'>

        <div className='flex flex-col justify-center items-start gap-0 md:gap-4 mx-auto'>
          <h1 data-aos='zoom-in' className='mx-auto text-2xl md:text-5xl text-red-500 dark:text-white
           font-semibold'>OUR CLIENTS</h1>
           <h1 data-aos='zoom-in' className= 'mx-auto text-black text-xl md:text-4xl font-semibold dark:text-slate-400'>
            What our clients saying about us
           </h1>
        </div>

        <div id='clients-box' className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center
        gap-8 w-full'>
          {
            client.map((item,index)=>(
              <div data-aos='zoom-in' data-aos-delay='200' key={index} className='bg-white
              dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center
              items-center gap-6 rounded-xl w-full'>

                <div className='flex justify-start items-center w-full gap-4'>
                  <img src={item.image} className='w-[70px] transform hover:scale-110 transition-transform
                  duration-300' alt="" />

                  <div className='flex flex-col justify-center items-start gap-1'>
                    <h1 className='text-xl text-black font-semibold dark:text-white'>{item.name}</h1>
                    <h1 className='text-slate-600 dark:text-slate-400'>{item.text}</h1>
                  </div>
                </div>

                <p className='text-base text-justify text-slate-600 dark:text-white'>{item.feedback}</p>

                <div className='flex justify-start items-start gap-1 w-full'>
                  <FaStar className='size-4 text-yellow-400' />
                  <FaStar className='size-4 text-yellow-400' />
                  <FaStar className='size-4 text-yellow-400' />
                  <FaStar className='size-4 text-yellow-400' />
                  <FaStar className='size-4 text-yellow-400' />
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Clients
