import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
          Resume
        </h1>
        
        <div className="space-y-8">
          {/* Experience Section */}
          <section className="glass-item p-6 rounded-xl">
            <h2 className="text-3xl font-semibold mb-6 text-blue-300">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
                <p className="text-gray-300">Tech Solutions Inc. • 2022 - Present</p>
                <ul className="mt-2 text-gray-400 list-disc list-inside">
                  <li>Led development of responsive web applications using React and TypeScript</li>
                  <li>Improved application performance by 40% through optimization techniques</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <p className="text-gray-300">Digital Agency • 2020 - 2022</p>
                <ul className="mt-2 text-gray-400 list-disc list-inside">
                  <li>Developed interactive user interfaces for client projects</li>
                  <li>Collaborated with design teams to implement pixel-perfect designs</li>
                  <li>Worked with REST APIs and GraphQL for data integration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="glass-item p-6 rounded-xl">
            <h2 className="text-3xl font-semibold mb-6 text-blue-300">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React', 'TypeScript', 'Node.js', 'Python', 'GraphQL', 'MongoDB', 'AWS', 'Docker'].map((skill) => (
                <div key={skill} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20">
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="glass-item p-6 rounded-xl">
            <h2 className="text-3xl font-semibold mb-6 text-blue-300">Education</h2>
            <div className="border-l-4 border-purple-400 pl-6">
              <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
              <p className="text-gray-300">University of Technology • 2016 - 2020</p>
              <p className="text-gray-400 mt-2">Graduated Magna Cum Laude • GPA: 3.8/4.0</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
