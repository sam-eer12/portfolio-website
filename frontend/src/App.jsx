import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Shuffle from './animations/Shuffle/Shuffle'
import LaserFlow from './animations/LaserFlow/LaserFlow'


function App() {

  return (
    <div className='bg-black text-white h-screen' style={{'--border-color': '#FF79C6'}}>
      <div className='w-3/5 h-full overflow-y-auto mr-1 overflow-x-hidden relative z-10'>
        <div className='flex  flex-col inset-shadow-[var(--border-color)] items-center justify-center min-h-full p-8'>
          <div 
            style={{
              borderRight: '2px solid var(--border-color)', 
              borderBottom: '2px solid var(--border-color)',
              borderImage: 'linear-gradient(20deg, var(--border-color), white) 1',
              paddingRight: '8px',
              paddingBottom: '7px'
            }}

            className='shadow-xl/40 shadow-[color:var(--border-color)] radius-[8px]'
          >
            <Shuffle
              text="PORTFOLIO WEBSITE"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
            /> 
          </div>
          
          
          {/* Add more content here that will be scrollable */}
          <div className='mt-16 space-y-8'>
            <section className='text-center'>
              <h2 className='text-4xl font-bold mb-4'>About</h2>
              <p className='text-lg text-gray-300 max-w-lg'>
                Welcome to my portfolio website. This is the scrollable content area where you can add your projects, about section, contact information, and more.
              </p>
            </section>
            
            <section className='text-center'>
              <h2 className='text-4xl font-bold mb-4'>Projects</h2>
              <div className='space-y-4'>
                <div className='p-6 border border-gray-600 rounded-lg'>
                  <h3 className='text-xl font-semibold mb-2'>Project 1</h3>
                  <p className='text-gray-300'>Description of your first project...</p>
                </div>
                <div className='p-6 border border-gray-600 rounded-lg'>
                  <h3 className='text-xl font-semibold mb-2'>Project 2</h3>
                  <p className='text-gray-300'>Description of your second project...</p>
                </div>
                <div className='p-6 border border-gray-600 rounded-lg'>
                  <h3 className='text-xl font-semibold mb-2'>Project 3</h3>
                  <p className='text-gray-300'>Description of your third project...</p>
                </div>
              </div>
            </section>
            
            <section className='text-center'>
              <h2 className='text-4xl font-bold mb-4'>Contact</h2>
              <p className='text-lg text-gray-300'>
                Get in touch with me for collaboration opportunities.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      {/* Right side - Fixed LaserFlow component (40%) */}
      <div id='laser-flow' className='w-2/5 h-[1200px] fixed right-0 top-0 z-20'>
        <LaserFlow 
          className="w-full h-full"
          horizontalBeamOffset={0.1}
          verticalBeamOffset={0.0}
          color="#FF79C6"
        />
      </div>
    </div>
  )
}

export default App
