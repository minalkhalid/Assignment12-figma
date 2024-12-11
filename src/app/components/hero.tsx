import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='flex justify-center items-center w-[1920px] h-[829px] px-56 py-56 bg-[#043873]'>
        <div className='text-white w-[656px] h-[361px] mt-40'>
          <h2 className='mb-8 text-6xl font-bold w-[556px] h-[154px]'>
            Get More Done with Whitepace
          </h2>
          <p className='text-lg mb-8 w-[656px] h-[60px]'>
            Project management software that enables your teams to collaborate, plan, <br className='hidden md:block' /> 
            analyze, and manage everyday tasks.
          </p>
          <button 
            className='bg-[#4F9CF9] font-medium text-base md:text-lg rounded-lg w-[180px] md:w-[219px] h-12 md:h-16 flex items-center justify-center space-x-2 hover:bg-[#3e8ae4] focus:ring-2 focus:ring-white'>
            <span>Try Whitepace free</span> 
            <FaArrowRight className="h-4 w-4 text-white" />
          </button>
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
          <Image 
            src="/Image-container.png" 
            alt="Project management illustration" 
            width={824} 
            height={549} 
            className='max-w-full h-auto'
          />
        </div>
      </div>

      
    </>
  );
};

export default Hero;