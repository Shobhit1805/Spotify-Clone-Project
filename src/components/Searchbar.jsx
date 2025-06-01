import React from "react";

const Searchbar = () => {
  return (
    <div className="group bg-[#1F1F1F] text-[#B3B3B3] p-3 flex items-center rounded-full h-12 w-full sm:w-[30%] md:w-[40%] lg:w-[65%] ml-2 transition-all duration-200 hover:bg-[#2A2A2A] focus-within:border-2 focus-within:border-white">
      <span className="pl-2">
        <img className="h-5 w-5" src="searchIcon.png" alt="search icon" />
      </span>
      <input
        type="text"
        placeholder="What do you want to play?"
        className="bg-transparent outline-none placeholder-[#B3B3B3] pl-3 w-full"
      />
    </div>
  );
};

export default Searchbar;
