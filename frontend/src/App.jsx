import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Shuffle from './animations/Shuffle/Shuffle'
import LaserFlow from './animations/LaserFlow/LaserFlow'
import TiltedCard from './animations/TitledCard/TitledCard'
import ProfileLink from './components/ProfileLink'
import ClickSpark from './animations/ClickSpark/ClickSpark'
import Intro from './components/Intro'
import About from './components/About'
import Stack from './components/Stack'


function App() {

  return (
    <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      ><div className='bg-black text-white h-screen' style={{'--border-color': '#FF79C6'}}>
      
        <div className='w-7/10 h-full overflow-y-auto mr-1 overflow-x-hidden relative z-10'>
          <div style={{boxShadow: 'inset 5px 5px 18px var(--bg-color)', z:'30'}} className='flex  flex-col inset-shadow-[var(--border-color)] items-center justify-center min-h-full p-8'>
            <div 
              style={{
                borderRight: '2px solid var(--border-color)', 
                borderBottom: '2px solid var(--border-color)',
                borderImage: 'linear-gradient(20deg, var(--border-color), white) 1',
                paddingRight: '8px',
                paddingBottom: '7px'
              }}

              className='shadow-xl/40 shadow-[color:var(--border-color)]  radius-[8px]'
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
              <section className='text-center  p-2'>
                <Intro />
                <About />
                <Stack />
               
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
        <div id='laser-flow' className='w-3/10 fixed right-0 top-10  z-20 flex flex-col h-screen'>
          {/* LaserFlow takes up 60% of the right side */}
          <div id='tt' className='h-3/5 w-full'>
            <LaserFlow 
              className="w-full h-full"
              horizontalBeamOffset={0.1}
              verticalBeamOffset={0.0}
              color="#FF79C6"
            />
          </div>
          
          {/* TiltedCard positioned below LaserFlow */}
          <div id='tilted-card' className='h-2/5 w-full border-[var(--border-color)] flex flex-col justify-center items-center p-8'>
            <TiltedCard
                  imageSrc="/unnamed.png"
                  altText="Student at NSUT"
                  captionText="Student Developer"
                  containerHeight="100px"
                  containerWidth="100px"
                  imageHeight="100px"
                  imageWidth="100px"
                  rotateAmplitude={12}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p className="tilted-card-demo-text text-sm">
                      Sameer Gupta
                    </p>
                  }
                />
                <ProfileLink  />
          </div>
        </div>
    </div></ClickSpark>
  )
}

export default App
