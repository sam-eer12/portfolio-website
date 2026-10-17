import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <ScrollReveal>
      <h4 className='text-center mb-2 text-lg font-ovo'>Experience</h4>
      <h2 className='text-center text-5xl font-ovo'>My recent work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>I am proficient in a variety of programming languages and frameworks in multiple domains like web development, AI/ML, DSA, including JavaScript, React, Node.js, Tensorflow, Python, C++, and more. I also have experience with database management and API integration.</p>
      </ScrollReveal>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
        {workData.map((project,index)=>(
            <ScrollReveal key={project.title} delay={(index % 3) * 0.05} className='mb-10'>
            <div style={{backgroundImage: `url(${project.bgImage})`}} className='w-full relative h-60 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center rounded-xl border border-gray-400 p-3 sm:p-4 md:p-6 flex flex-col justify-end hover:shadow-[4px_4px_0_#000] motion-safe:hover:-translate-y-1 transition-[translate,box-shadow] duration-200 overflow-hidden'>
                <div className={'relative w-full max-w-full border border-gray-500 backdrop-blur-lg rounded-lg py-2 sm:py-3 px-3 sm:px-5 flex items-center justify-between gap-2' + (project.black ? ' bg-black/60' : ' bg-white/70')}>
                    <div className='flex-1 min-w-0'>
                    <h3 className={'text-sm sm:text-lg md:text-xl font-semibold font-ovo mb-1 sm:mb-2 line-clamp-1' + (project.black ? ' text-white' : ' text-black')}>{project.title}</h3>
                    <p className={'text-xs sm:text-sm line-clamp-2 mb-1' + (project.black ? ' text-white' : ' text-black')}>{project.description}</p>
                    <a href={project.link} target='_blank' rel='noopener noreferrer' aria-label={`View ${project.title} (opens in a new tab)`} className={'hover:underline text-xs sm:text-sm' + (project.black ? ' text-blue-300' : ' text-blue-700')}>View Project</a>
                    </div>
                    <div className={'border rounded-full shadow-[2px_2px_0_#000] hover:bg-lime-500 duration-200 border-black w-7 sm:w-8 md:w-9 h-7 sm:h-8 md:h-9 flex items-center justify-center flex-shrink-0 '+ (project.black ? ' bg-white backdrop-blur-xl' : ' ')}>
                        <a target='_blank' rel='noopener noreferrer' href={project.link} aria-label={`Open ${project.title} (opens in a new tab)`} className='w-full h-full flex items-center justify-center'><Image draggable="false" src={assets.send_icon} alt='' className='w-3 sm:w-4 md:w-6'/></a>
                    </div>
                </div>
            </div>
            </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
      <a href="https://github.com/sam-eer12" target='_blank' rel='noopener noreferrer' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20'>
        Show More <Image src={assets.right_arrow_bold} alt='' className='w-4'/>
      </a>
      </ScrollReveal>
    </div>
  )
}

export default Work
