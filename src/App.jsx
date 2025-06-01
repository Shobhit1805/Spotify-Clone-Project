import React from 'react'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Body from './components/Body';

const App = () => {
  return (
    <div className='h-screen overflow-hidden bg-black text-white'>
      <Navbar />
      <Body />
      {/* <MediaPlayer /> */}
    </div>
  )
}

export default App
