import React, { useState } from 'react';
import { images } from '../assets';
import Banner from './Banner';
import { Menu, X } from 'lucide-react'; // using lucide-react for icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className='w-[95%] m-auto p-5'>
        <div className="container-topbar flex flex-col md:flex-row items-center justify-between p-2 gap-2 md:gap-0">
          <div className="text-center md:text-left">
            <p className='text-gray-600 text-sm md:text-base'>
              World's Largest Medical Equipment Market Place
            </p>
          </div>
          <div className="text-center md:text-right">
            <span className='hover:text-red-600 cursor-pointer font-semibold text-sm md:text-md'>My account</span> |{' '}
            <span className='hover:text-red-600 cursor-pointer font-semibold text-sm md:text-md'>Contact Us</span>
          </div>
        </div>
        <hr className='w-[100%] m-auto' />
      </div>

      {/* Navbar */}
      <nav className="p-5 flex items-center justify-between bg-white z-10 sticky top-0 w-full shadow-md">
        {/* Logo */}
        <div>
          <img src={images.logo} className='w-[120px] md:w-[150px] ml-2 md:ml-8' alt="logo" />
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-5 mr-10'>
          <li className='text-gray-600 hover:text-red-600 cursor-pointer font-semibold text-sm md:text-md'>About Us</li>
          <li className='text-gray-600 hover:text-red-600 cursor-pointer font-semibold text-sm md:text-md'>Our Story</li>
          <li className='text-gray-600 hover:text-red-600 cursor-pointer font-semibold text-sm md:text-md'>Sell on IMDM</li>
          <li className='text-gray-600 hover:text-red-600 cursor-pointer font-semibold text-sm md:text-md'>Pricing</li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className='md:hidden mr-4'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white shadow-lg st'>
          <ul className='flex flex-col items-start gap-3 px-6 py-4'>
            <li className='text-gray-600 hover:text-red-600 cursor-pointer font-semibold text-sm'>About Us</li>
            <li className='text-gray-600 hover:text-red-600 cursor-pointer font-semibold text-sm'>Our Story</li>
            <li className='text-gray-600 hover:text-red-600 cursor-pointer font-semibold text-sm'>Sell on IMDM</li>
            <li className='text-gray-600 hover:text-red-600 cursor-pointer font-semibold text-sm'>Pricing</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
