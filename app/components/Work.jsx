import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Experience</h4>
      <h2 className='text-center text-5xl font-ovo'>My recent work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>I am proficient in a variety of programming languages and frameworks in multiple domains like web development, AI/ML, DSA, including JavaScript, React, Node.js, Tensorflow, Python, C++, and more. I also have experience with database management and API integration.</p>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 my-10'>
        {workData.map((project,index)=>(
            <div key={index} style={{backgroundImage: `url(${project.bgImage})`}} className='w-full relative h-60 sm:h-72 md:h-80 lg:h-96 mb-10 bg-cover bg-center rounded-xl border border-gray-400 p-6 flex flex-col justify-end hover:shadow-[4px_4px_0_#000] hover:-translate-y-1 duration-500 cursor-pointer'>
                <div className='absolute bottom-5 border border-gray-500 backdrop-blur-lg rounded-lg hover:-translate-y-1 duration-500 py-3 px-5 flex items-center justify-center'>
                    <div>
                    <h3 className='text-xl font-semibold font-ovo mb-2'>{project.title}</h3>
                    <p className='max-w-2xl text-sm text-gray-600'>{project.description}</p>
                    <a href={project.link} className='text-blue-500 hover:underline'>View Project</a>
                    </div>
                    <div className='border rounded-full shadow-[2px_2px_0_#000] hover:bg-lime-500 duration-200 border-black w-9 p-2 flex items-center justify-center '>
                        <a href={project.link}><Image src={assets.send_icon} alt='' className='w-6'/></a>
                    </div>
                </div>
            </div>
        ))}
      </div>

      <a href="https://github.com/sam-eer12" target='_blank' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full y-3 px-10 mx-auto my-20'>
        Show More <Image src={assets.right_arrow_bold} alt='' className='w-4'/>
      </a>
    </div>
  )
}

export default Work
