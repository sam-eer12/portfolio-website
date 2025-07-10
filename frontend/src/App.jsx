import React from 'react';
import Particles from './Particles/Particles';
import Dock from './Dock/Dock';
import './App.css';


const HomeIcon = () => <img src="/home.png" alt="Home" className="w-6 h-6" />;
const ArchiveIcon = () => <img src="/resume.png" alt="Resume" className="w-6 h-6" />;
const ProfileIcon = () => <img src="/about.png" alt="Contact" className="w-6 h-6" />;
const SettingsIcon = () => <img src="/projects.png" alt="Projects" className="w-6 h-6" />;

const items = [
  { icon: <HomeIcon />, label: 'Home', onClick: () => alert('Home!') },
  { icon: <ArchiveIcon />, label: 'Resume', onClick: () => alert('Archive!') },
  { icon: <ProfileIcon />, label: 'Contact', onClick: () => alert('Profile!') },
  { icon: <SettingsIcon />, label: 'Projects', onClick: () => alert('Settings!') },
];
const App = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-gray-900 h-screen w-screen relative overflow-hidden">
      <Particles 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        particleColors={['#ffffff', '#ffffff']}
        particleCount={300}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <Dock 
        items={items}
        panelHeight={78}
        baseItemSize={55}
        magnification={65}
      />
    </div>
  );
};

export default App;