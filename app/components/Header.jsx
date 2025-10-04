import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div>
      <div>
        <Image src={assets.profile_img} alt = "Profile Image" className='w-32 h-32 rounded-full'/>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hello! I'm Sameer Gupta <Image src={assets.hand_icon} alt='' className='w-6'/></h3>
        <h1 className='text-4xl md:text-5xl font-Ovo'>Welcome to My Portfolio</h1>
      </div>
    </div>
  )
}

export default Header
