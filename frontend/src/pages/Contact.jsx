import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent text-center">
          Contact Me
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-item p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4 text-pink-300">Get In Touch</h2>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">hello@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="glass-item p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="glass-item p-3 rounded-lg hover:bg-white/20 transition-all duration-200">
                  <span className="text-xl">💼</span>
                </a>
                <a href="#" className="glass-item p-3 rounded-lg hover:bg-white/20 transition-all duration-200">
                  <span className="text-xl">🐙</span>
                </a>
                <a href="#" className="glass-item p-3 rounded-lg hover:bg-white/20 transition-all duration-200">
                  <span className="text-xl">🐦</span>
                </a>
                <a href="#" className="glass-item p-3 rounded-lg hover:bg-white/20 transition-all duration-200">
                  <span className="text-xl">📘</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-item p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6 text-pink-300">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:border-white/40 focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:border-white/40 focus:outline-none"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:border-white/40 focus:outline-none"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:border-white/40 focus:outline-none resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full glass-item p-3 rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
