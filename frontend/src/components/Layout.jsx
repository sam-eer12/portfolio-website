import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Particles from '../animations/Particles/Particles';
import Dock from '../animations/Dock/Dock';

const Layout = () => {
  const navigate = useNavigate();

  const HomeIcon = () => <img src="/home.png" alt="Home" className="w-6 h-6" />;
  const ArchiveIcon = () => <img src="/resume.png" alt="Resume" className="w-6 h-6" />;
  const ProfileIcon = () => <img src="/about.png" alt="Contact" className="w-6 h-6" />;
  const SettingsIcon = () => <img src="/projects.png" alt="Projects" className="w-6 h-6" />;

  const items = [
    { 
      icon: <HomeIcon />, 
      label: 'Home', 
      onClick: () => navigate('/') 
    },
    { 
      icon: <ArchiveIcon />, 
      label: 'Resume', 
      onClick: () => navigate('/resume') 
    },
    { 
      icon: <ProfileIcon />, 
      label: 'Contact', 
      onClick: () => navigate('/contact') 
    },
    { 
      icon: <SettingsIcon />, 
      label: 'Projects', 
      onClick: () => navigate('/projects') 
    },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-600 to-gray-900 h-screen w-screen relative overflow-hidden">
      {/* Particles background */}
      <div className="absolute inset-0 z-10">
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
      </div>
      
      {/* Main content area */}
      <div className="relative z-10 h-full overflow-y-auto">
        <Outlet />
      </div>
      
      {/* Dock navigation */}
      <Dock 
        items={items}
        panelHeight={78}
        baseItemSize={60}
        magnification={70}
      />
    </div>
  );
};

export default Layout;
