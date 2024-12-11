import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
<header className='w-[1920px] h-[92px] bg-[#043873] flex justify-between left-1 pt-4 pr-56 pl-56 pb-4'>
      {/* Logo Section */}
      <div>
        <Image 
          src="/Logo.png" 
          alt="logo" 
          width={191} 
          height={34} 
          className="pt-2"
        />
      </div>

      {/* Navigation & Button */}
      <div className='flex gap-10 w-[737.5] h-[60px] bg-[#043873]'>
        <div className='w-[549px] h-[23px] mt-4'>
          <ul className='flex gap-8 cursor-pointer'>
            <li className='text-white font-medium text-lg'>Products</li>
            <li className="text-white font-medium text-lg">Solutions</li>
            <li className="text-white font-medium text-lg">Resources</li>
            <li className="text-white font-medium text-lg">Pricing</li>
          </ul>
          </div>
        <button 
          className='w-[126px] h-[60px] mx-6 rounded-lg bg-[#FFE492] text-[#043873]'>
          Login
        </button>
      </div>
    </header>
  )
}

export default Header