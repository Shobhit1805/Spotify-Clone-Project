import React from 'react'
import Sidebar from './Sidebar'

const Body = () => {
  return (
    <div className=' h-full pb-1.5 text-white  px-1 flex gap-1.5 bg-black'>
      
      {/* left side bg-[#242424]*/}
      <div className='h-full w-1/4 bg-[rgb(18,18,18)] p-2 pt-4 flex flex-col gap-4 rounded-xl' >
        <Sidebar />
      </div>

        {/* right side */}
        <div style={{ background: 'linear-gradient(180deg,rgba(31, 31, 31, 1) 17%, rgba(18, 18, 18, 1) 30%)',}}
             className="text-white w-3/4 rounded-xl">
                    
        </div>


    </div>
  )
}

export default Body
