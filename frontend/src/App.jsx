import React from 'react';
import Particles from './Particles/Particles';
import './App.css';

const App = () => {
  return (
    <div className=' bg-[#262626] h-full'>
      <Particles style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
    </div>
  );
};

export default App;