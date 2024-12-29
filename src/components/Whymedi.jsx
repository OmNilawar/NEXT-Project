import React from 'react'
import { PiArrowCircleUpRight } from "react-icons/pi";

const Whymedi = () => {
    return (
        <>
            <div className='w-full h-auto mt-[100px] flex items-center justify-center'>
                <div className='w-[90%] mx-auto h-auto flex flex-col lg:flex-row'>
                    {/* Left Section */}
                    <div className='w-full lg:w-[50%] h-auto'>
                        <div className='w-[90%] lg:w-[80%] h-full mx-auto flex flex-col gap-6 lg:gap-8 justify-center py-8'>
                            <h1 className='text-3xl sm:text-4xl font-bold leading-tight'>
                                Why <span className='text-teal-500'>Uzbekistan Medi?</span>
                            </h1>
                            <div className='text-base sm:text-lg flex flex-col gap-3'>
                                <h1 className='flex gap-2 items-start'>
                                    <span className="text-teal-500">✔</span>
                                    A one-stop solution for students specializing in MBBS overseas education counseling and admission.
                                </h1>
                                <h1 className='flex gap-2 items-start'>
                                    <span className="text-teal-500">✔</span>
                                    Complete support for the necessary documentation.
                                </h1>
                                <h1 className='flex gap-2 items-start'>
                                    <span className="text-teal-500">✔</span>
                                    Guaranteed Admission in top MBBS universities in Uzbekistan with low fees for Indian students.
                                </h1>
                                <h1 className='flex gap-2 items-start'>
                                    <span className="text-teal-500">✔</span>
                                    Free counseling and assistance to help students grow their careers.
                                </h1>
                            </div>
                            <button className='bg-teal-500 w-[140px] sm:w-[160px] h-[45px] rounded-md text-white text-lg sm:text-xl font-semibold transition-transform transform hover:scale-105'>
                                Read More
                            </button>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className='w-full lg:w-[50%] h-auto flex items-center justify-center relative py-8'>
                        <img
                            id='curveImg'
                            className='z-10 object-cover w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] rounded-md shadow-lg'
                            src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Uzbekistan University"
                        />
                        {/* Background Circle/Shadow Effect he kela ahe */}
                        <div id='curveBgImg' className='absolute bg-teal-500 rounded-full w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] opacity-40 -z-10'></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Whymedi;
