import React from 'react'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Player from "./components/Player"
import { PlayerContext } from "./context/PlayerContext"
import { useContext } from 'react';


const App = () => {
  const {audioRef,track} = useContext(PlayerContext)

  return (
    <div className='h-screen overflow-hidden bg-black text-white'>
      <Navbar />
      <div className='h-[83%]'>
        <Body />
      </div>
      
      <Player/>
      <audio ref={audioRef} src={track.file} preload="auto"></audio>

    </div>
  )
}

export default App
