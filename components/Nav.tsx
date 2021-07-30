import React from 'react'
import Link from 'next/link'

const Navbar = () => (
  <div className='px-28 w-full h-[100px] flex items-center justify-end'>
    <div className='flex items-center space-x-8'>
      <Link href='/about'>
        <span className=' cursor-pointer'>A propos de ce site</span>
      </Link>
      <Link href='/contact'>
        <div className='w-40 h-12 py-3 px-6 bg-white hover:bg-blue-500 border-2 border-blue-500 rounded-full font-semibold text-blue-500 hover:text-white transition duration-500 ease-in-out cursor-pointer'>
          Contactez moi
        </div>
      </Link>
    </div>
  </div>
)

export default Navbar
