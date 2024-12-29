import React from 'react'
import { FaSchool } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div className='bg-indigo-50 mt-[100px]'>
        <h1 className='text-4xl font-bold text-center py-[60px] text-indigo-700'>
          Our Valuable <span className='text-indigo-500 underline'>Services</span>
        </h1>
        <div className='flex gap-5 flex-wrap w-[90%] mx-auto items-center justify-center'>
          <div className='bg-white flex flex-col rounded-lg gap-4 items-center justify-center p-8 w-[320px] shadow-xl hover:shadow-2xl transition-all duration-300'>
            <FaSchool className='text-indigo-500 font-bold text-6xl' />
            <h1 className='text-2xl font-semibold text-indigo-700'>Admission</h1>
            <p className='text-center text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className='bg-white flex flex-col rounded-lg gap-4 items-center justify-center p-8 w-[320px] shadow-xl hover:shadow-2xl transition-all duration-300'>
            <FaSchool className='text-indigo-500 font-bold text-6xl' />
            <h1 className='text-2xl font-semibold text-indigo-700'>Admission</h1>
            <p className='text-center text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className='bg-white flex flex-col rounded-lg gap-4 items-center justify-center p-8 w-[320px] shadow-xl hover:shadow-2xl transition-all duration-300'>
            <FaSchool className='text-indigo-500 font-bold text-6xl' />
            <h1 className='text-2xl font-semibold text-indigo-700'>Admission</h1>
            <p className='text-center text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className='bg-white flex flex-col rounded-lg gap-4 items-center justify-center p-8 w-[320px] shadow-xl hover:shadow-2xl transition-all duration-300'>
            <FaSchool className='text-indigo-500 font-bold text-6xl' />
            <h1 className='text-2xl font-semibold text-indigo-700'>Admission</h1>
            <p className='text-center text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className='bg-white flex flex-col rounded-lg gap-4 items-center justify-center p-8 w-[320px] shadow-xl hover:shadow-2xl transition-all duration-300'>
            <FaSchool className='text-indigo-500 font-bold text-6xl' />
            <h1 className='text-2xl font-semibold text-indigo-700'>Admission</h1>
            <p className='text-center text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className='bg-white flex flex-col rounded-lg gap-4 items-center justify-center p-8 w-[320px] shadow-xl hover:shadow-2xl transition-all duration-300'>
            <FaSchool className='text-indigo-500 font-bold text-6xl' />
            <h1 className='text-2xl font-semibold text-indigo-700'>Admission</h1>
            <p className='text-center text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className='w-full flex items-center justify-center'>
          <button className='bg-indigo-500 px-6 py-2.5 font-semibold rounded-md text-white mt-[30px] mb-[60px] hover:bg-indigo-600 transition-all duration-300'>
            Read More
          </button>
        </div>
      </div>
    </>
  )
}

export default Services
