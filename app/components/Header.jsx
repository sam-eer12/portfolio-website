import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl mx-auto text-center h-screen flex flex-col items-center justify-center gap-4 '>
      <div>
        <Image src={assets.profile_img} alt = "Profile Image" className='w-32 h-32 rounded-full'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hello! I'm Sameer Gupta <Image src={assets.hand_icon} alt='' className='w-6'/></h3>
        <h1 className='text-4xl md:text-5xl sm:text-6xl font-Ovo'>Welcome to My Portfolio</h1>
        <p className='mx-auto font-Ovo max-w-2xl'>I'm an Instrumentation and Control Engineer from NSUT, passionate about crafting innovative solutions through technology and creativity.</p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border bg-black text-white rounded-full border-gray-500 flex items-center gap-2'>Contact me <Image src={assets.right_arrow_white} alt = "arrow icon" className='w-4 '/></a>
            <a href="/RESUME.pdf" download={true} className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My Resume <Image src={assets.download_icon} alt = "download icon" className='w-4 '/></a>
        
      </div>
    </div>
  )
}

export default Header
