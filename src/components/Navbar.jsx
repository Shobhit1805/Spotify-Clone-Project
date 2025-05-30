import React from 'react';
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <div className='h-[8%] bg-black text-[#B3B3B3] px-4 flex justify-between items-center w-full'>
      
      {/* Left Side */}
      <div className='h-full w-6/12 flex items-center'>
        <img
          className='h-[50%] rounded-full ml-1 gap-1 cursor-pointer 
                     hover:scale-110 hover:text-white 
                     transition-all duration-200 ease-in-out'
          src="image.png"
          alt="Spotify Logo"
        />
        <div className='h-12 w-12 rounded-full ml-8 bg-[#1F1F1F] flex items-center 
                        cursor-pointer hover:scale-110 hover:text-white 
                        transition-all duration-200 ease-in-out'>
          <img className='h-6 m-auto' src="homeIcon.png" alt="Home" />
        </div>
        <Searchbar />
      </div>

      {/* Right Side */}
      <div className='h-full w-6/12 flex items-center justify-end text-[#B3B3B3] font-semibold'>
        <div className='flex justify-between items-center gap-4 text-2sm font-semibold'>
          {['Premium', 'Support', 'Download'].map((text, idx) => (
            <span
              key={idx}
              className='cursor-pointer hover:scale-110 hover:text-white 
                         transition-all duration-200 ease-in-out'
            >
              {text}
            </span>
          ))}
          <span className='text-3xl font-light'>
            <img src="shortLine.png" alt="" />
          </span>
        </div>

        <div className='flex items-center gap-2 ml-4 h-full text-sm mr-2 font-sm 
                        cursor-pointer hover:scale-110 hover:text-white 
                        transition-all duration-200 ease-in-out'>
          <img className='ml-4 text-sm mr-1 h-4' src="install.png" alt="" />
          Install App
        </div>

        <div className='gap-2 ml-4 text-sm mr-4 cursor-pointer 
                        hover:scale-110 hover:text-white 
                        transition-all duration-200 ease-in-out'>
          Sign up
        </div>

        <div>
          <button className='bg-white font-bold text-black px-8 py-3 rounded-full 
                             hover:bg-gray-200 hover:scale-110 
                             transition-all duration-200 ease-in-out cursor-pointer'>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
