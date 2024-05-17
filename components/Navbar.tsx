import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './modeToggle'

const Navbar = () => {
  return (
    <div className='flex  mb-8 justify-between max-w-5xl mx-auto border-b border-gray-200 py-4 px-8 dark:border-gray-700 items-center'>
        <Link href="#">Logo</Link>

        <ModeToggle /> 
    
    </div>
  )
}

export default Navbar