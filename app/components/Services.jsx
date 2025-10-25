import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div id='skills' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>What I offer</h4>
      <h2 className='text-center text-5xl font-ovo'>My Skills</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>I am proficient in a variety of programming languages and frameworks in multiple domains like web development, AI/ML, DSA, including JavaScript, React, Node.js, Tensorflow, Python, C++, and more. I also have experience with database management and API integration.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10'>
        {serviceData.map(({icon,title,description,link},index)=>(
            <div key={index} className='border border-gray-400 rounded-lg px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 hover:bg-[var(--lightHover)] hover:-translate-y-1 hover:shadow-[4px_4px_0_#000] duration-500 cursor-pointer'>
                <Image draggable="false" src={icon} alt={title} className='w-12 '/>
                <h3 className='text-center my-4 text-gray-700 text-lg font-ovo'>{title}</h3>
                <p className='text-center text-sm leading-5 text-gray-600'>{description}</p>
                <a href={link} target='_blank' className='text-blue-500 flex items-center gap-2 text-sm mt-5 hover:underline'>Learn More <Image draggable="false" src={assets.right_arrow} alt='' className='w-5'/> </a>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Services
