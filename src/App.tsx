import React from 'react';
import { Github, Linkedin, Download, CheckCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-20 py-6">
        <h1 className="text-2xl font-semibold">Ike Imala</h1>
        <div className="flex gap-8">
          <a href="#about" className="hover:text-gray-600">About</a>
          <a href="#skills" className="hover:text-gray-600">Skills</a>
          <a href="#experience" className="hover:text-gray-600">Experience</a>
          <a href="#projects" className="hover:text-gray-600">Projects</a>
          <a href="#badges" className="hover:text-gray-600">Badges</a>
          <a href="#contact" className="hover:text-gray-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex justify-center items-center py-20 px-20">
        <div className="flex flex-col items-center gap-8">
          <div className="w-64 h-64 rounded-full border-4 border-indigo-900 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-gray-700 text-xl mb-2">Hello, I'm</h2>
            <h1 className="text-5xl font-bold mb-4">Ike Imala</h1>
            <p className="text-xl text-gray-600 mb-6">Azure AI Architect</p>
            <div className="flex gap-4 justify-center mb-6">
              <button className="px-6 py-2 border-2 border-gray-200 rounded-full hover:bg-gray-50">
                Download CV
              </button>
              <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
                Contact Info
              </button>
            </div>
            <div className="flex gap-4 justify-center">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-gray-600 mb-2">Get To Know More</h2>
          <h1 className="text-4xl font-bold text-center mb-16">About Me</h1>
          
          <div className="grid grid-cols-2 gap-20">
            <div className="rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-gray-700" />
                  </div>
                  <h3 className="text-center font-bold mb-2">Experience</h3>
                  <p className="text-center text-gray-600">10+ years</p>
                  <p className="text-center text-gray-600">Azure AI Architect and Technology Solutions Expert</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-gray-700" />
                  </div>
                  <h3 className="text-center font-bold mb-2">Education</h3>
                  <p className="text-center text-gray-600">•Bachelor of Science, Physics</p>
                  <p className="text-center text-gray-600">• Master of Science, Geoscience/Geophysics</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Innovative Azure AI Architect and Technology Solutions Expert with over a decade of experience dedicated to shaping the future of technology through strategic solutions. I excel in driving business growth by integrating cutting-edge AI technologies into Azure Cloud Architecture. I'm passionate about leveraging GenAI, OpenAI - GPT, Azure AI Services, Azure AI Search, Azure Cognitive Services, and AzureML to drive digital transformation and solve real-world challenges. I've led cross-functional teams, ensuring the implementation of digital solutions and best practices and delivering customized solutions aligned with business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-gray-600 mb-2">Explore My</h2>
          <h1 className="text-4xl font-bold text-center mb-16">Skills</h1>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-8">Programming Languages</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: 'Python', level: 'Experienced' },
                  { name: 'SQL', level: 'Experienced' },
                  { name: 'Linus', level: 'Experienced' },
                  { name: 'Scikit-Learn', level: 'Intermediate' },
                  { name: 'TensorFlow', level: 'Intermediate' },
                  { name: 'Pandas', level: 'Intermediate' },
                  { name: 'Numpy', level: 'Intermediate' },
                  { name: 'PySpark', level: 'Intermediate' },
                  { name: 'Power BI', level: 'Intermediate' },
                  { name: 'Synapse Analytics', level: 'Intermediate' },
                ].map((skill) => (
                  <div key={skill.name} className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-gray-700 mt-1" />
                    <div>
                      <p className="font-medium">{skill.name}</p>
                      <p className="text-gray-600 text-sm">{skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-8">DevOps Tools</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: 'CI/CD', level: 'Experienced' },
                  { name: 'Github Actions', level: 'Experienced' },
                  { name: 'GitHub / Git', level: 'Intermediate' },
                  { name: 'VS Code', level: 'Intermediate' },
                  { name: 'Google Colab', level: 'Experienced' },
                  { name: 'MLOps', level: 'Experienced' },
                ].map((skill) => (
                  <div key={skill.name} className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-gray-700 mt-1" />
                    <div>
                      <p className="font-medium">{skill.name}</p>
                      <p className="text-gray-600 text-sm">{skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-gray-600 mb-2">Explore My</h2>
          <h1 className="text-4xl font-bold text-center mb-16">Experience</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">2022 – Present</h3>
              <h2 className="text-2xl font-bold mt-2">Principal Technical Support Engineer | Science and Engineering Solutions Consulting</h2>
              <p className="text-gray-600 mt-1">ASPEN TECHNOLOGY INC | HOUSTON, TX</p>
            </div>
            
            <p className="text-gray-600 mb-6">
              At this leading software technology consulting firm, I was promoted to provide data services to global oil & gas clients utilizing data processing and imaging solutions, through technical communication and offer of practical expertise which contributed to major client success cases.
            </p>
            
            <ul className="space-y-4 text-gray-600">
              <li>• Led technical engagements to architect and implement complex Data & AI solutions on Azure cloud platform, driving significant revenue growth by enhancing data processing capabilities and increasing software user adoption by 15%.</li>
              <li>• Engaged in continuous vendor evaluation and technology integration, ensuring alignment with enterprise architecture and compliance standards. Translated the vision of business leaders into realistic technical implementations</li>
              <li>• Led in-depth analysis of client challenges, delivering actionable insights on advanced technologies, analytics, and operational strategies, driving informed decisions that maximized oil reservoir production.</li>
              <li>• Led technology initiatives in collaboration with Product Managers, R&D, AI Engineers, and Data Scientists to pilot a use case of GenAI-powered application, enhancing new employee onboarding experience and engagement.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-gray-600 mb-2">Browse My Recent</h2>
          <h1 className="text-4xl font-bold text-center mb-16">Projects</h1>
          
          <div className="grid grid-cols-4 gap-8">
            {[
              {
                title: 'Generative AI-Powered Support Ticket Resolution',
                image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80',
              },
              {
                title: 'AI-Powered Question Answering Chat Application',
                image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80',
              },
              {
                title: 'Aspect-based Sentiment Classification and Summarization',
                image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80',
              },
              {
                title: 'Twitter US Airline Sentiment Analysis',
                image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80',
              },
            ].map((project) => (
              <div key={project.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-4">{project.title}</h3>
                  <button className="px-6 py-2 border-2 border-gray-200 rounded-full text-sm hover:bg-gray-50">
                    Link
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;