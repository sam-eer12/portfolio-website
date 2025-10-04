import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt="Logo" className='w-36 mx-auto mb-2 '/>
      
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt="Mail Icon" className='w-6'/>
            sameer870732@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>
            All rights reserved. Designed & Developed by Sameer Gupta
        </p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a href="https://github.com/sam-eer12" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="https://www.linkedin.com/in/sameer-gupta-768b28312/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            
        </ul>
      </div>
    </div>
  )
}

export default Footer
