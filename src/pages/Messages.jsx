import React from 'react'

function Messages() {
  return (
    <div className='bg-blue-200 h-screen'>
      <div className=' grid md:grid-cols-1 xl:grid-cols-2 p-10 py-24 px-20'>
      <div className='flex flex-col justify-start gap-9 p-6 w-[80%]'>
        <h1 className='text-5xl font-semibold'>Free Tailwind CSS Templates</h1>
        <p className='text-md font-semibold text-gray-600'>
          Tailwind CSS is an open-source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching.
        </p>
        <button className='bg-blue-600 py-3 px-6 rounded font-semibold text-white inline-block self-start'>
          All Templates
        </button>
      </div>
 
        <div className='flex gap-6 items-left  w-[100%]'>
         <div className='space-y-6'>
          <div className='bg-white shadow-lg w-[300px] h-[250px] rounded-lg'>

          </div>
          <div className='bg-white shadow-lg w-[300px] h-[150px] rounded-lg'>

          </div>

         </div>
         <div className='bg-white shadow-lg w-[300px] h-[423px] rounded-lg'>

         </div>
          
        </div>
      </div>
    </div>
  )
}

export default Messages