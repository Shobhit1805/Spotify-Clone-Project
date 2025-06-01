import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[100%] h-full flex-col text-white hidden lg:flex">
      
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="pb-14 text-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src="stack.png" alt="stack_icon" />
            <p className="font-semibold">Your Libary</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5 bg-[#121212] " src="plus.png" alt="plus_icon" />
          </div>
        </div>
        <div className="p-4 bg-[#1F1F1F] rounded-xl font-semibold flex flex-col items-start justify-start  pl-4">
            <h1>Create Your first playlist</h1>
            <p className="font-light text-sm">It's easy, we'll help you</p>
            <button className="cursor-pointer px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Create Playlist
            </button>        
        </div>
        <div className="p-4 bg-[#1F1F1F] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
            <h1>Let's find some podcasts to follow</h1>
            <p className="font-light text-sm">We'll keep you updated on new episodes</p>
            <button className="cursor-pointer px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Create Playlist
            </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;