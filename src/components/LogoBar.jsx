import React from 'react'

const LogoBar = () => {
  return (
    <div className='h-20 '>
      <div className='h-full flex flex-col lg:flex-row'>

        {/* Left Section - Visible only on large screens */}
        <div className='bg-red-700 hidden lg:block lg:w-1/4 h-20'></div>

        {/* Center Section */}
        <div className='bg-black w-full h-30 lg:w-1/2 lg:h-20'></div>

        {/* Right Section */}
        <div className='bg-amber-300 w-full h-30 lg:w-1/4 lg:h-20'></div>

      </div>
    </div>
  )
}

export default LogoBar
