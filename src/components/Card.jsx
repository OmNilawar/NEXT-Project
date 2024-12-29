import Image from 'next/image';
import React from 'react';
import collegeImg from "../../public/Images/cambridge.jpeg";

const Card = () => {
  return (
    <div className='w-[270px] bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
      <div className='relative w-full h-[180px]'>
        <Image
          src={collegeImg}
          alt="University Image"
          layout="fill"
          objectFit="cover"
          className='rounded-t-lg'
        />
      </div>
      <div className='p-5'>
        <h1 className='text-teal-700 font-semibold text-xl mb-2 hover:text-teal-600 transition-colors'>
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className='text-gray-700 font-medium'>Fees Structure: <span className='text-teal-500'>₹5,22,000</span></p>
        <p className='text-gray-700 font-medium'>Duration: 4 years</p>
        <div className='flex justify-between mt-6'>
          <button className='bg-teal-500 px-5 py-2 text-sm font-semibold text-white rounded-md hover:bg-teal-600 transition-all duration-200'>
            Apply Now
          </button>
          <button className='border border-teal-500 px-5 py-2 text-sm font-semibold text-teal-500 rounded-md hover:bg-teal-50 transition-all duration-200'>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
