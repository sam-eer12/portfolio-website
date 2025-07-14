import React from 'react';
import CurvedLoop from '../animations/CurvedLoop/CurvedLoop';


const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="text-center max-w-4xl mx-auto px-8">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            <CurvedLoop 
            marqueeText="Welcome to My Portfolio"
            speed={3}
            curveAmount={400}
            direction="left"
            interactive={true}
            className="custom-text-style"
            />
        </h1>
        <p className="text-xl mb-8 text-gray-300 leading-relaxed">
          I'm a passionate developer creating amazing digital experiences. 
          Explore my work, learn about my journey, and let's build something incredible together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="glass-item p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">🚀 Innovation</h3>
            <p className="text-gray-300">
              Cutting-edge solutions with modern technologies and creative approaches.
            </p>
          </div>
          <div className="glass-item p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">💡 Creativity</h3>
            <p className="text-gray-300">
              Transforming ideas into beautiful, functional digital experiences.
            </p>
          </div>
          <div className="glass-item p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">🎯 Excellence</h3>
            <p className="text-gray-300">
              Committed to delivering high-quality work that exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
