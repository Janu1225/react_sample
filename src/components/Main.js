import React from 'react'
import videoBg from '../assets/videoBg.mp4'

const Main = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-2/3 object-cover ' src={videoBg} autoPlay loop muted/>
      
      <div className='absolute w-full h-2/3 top-0 left-0 bg-gray-300/30'> </div>

      <div className='absolute w-full h-2/3 top-0 flex flex-col justify-center text-center'>
      <div className='text-wrap px-7'>
        <h1 className='text-4xl md:text-5xl font-bold text-center py-10'>
          BE FREE FROM GLASSES AND CONTACTS
        </h1>
      </div>
      <div className='text-wrap px-5'>  
        <p1 className=' text-xl md:text-2xl font-semibold'>
          SCHEDULE COMPLETELY ONLINE, NO PHONE CALLS NECESSARY
        </p1>
        </div>
        <form className=''>
          <div className=''>
            <ul>
              <li><button >DOWNLOAD OUR APP</button></li>
              <li className='pr-3'><button className='wd:h-20 wd:h-92'>TAKE THE VISION CORRECTION ASSESSMENT</button></li>
              <li><button >SCHEDULE A CONSULTATION</button></li>
            </ul>
          </div>
        </form>
      </div>

      <div className=' w-full h-full bg-sky-200'>

      </div>      
    </div>
  )
}

export default Main
