'use client';

import React from 'react';
import { Button } from './Button';
import { Github, Linkedin, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    // Download resume from /public/resume.pdf
    window.open('/resume.pdf', '_blank');
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-slate-900">
      {/* DEBUG: Hero Section Active */}
      <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs">HERO ACTIVE</div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <div className="mb-4">
          <span className="text-slate-400 text-lg font-medium">Hello, I'm</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">
            Vipin Thingalaya
          </span>
        </h1>

        {/* Role */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-100 font-semibold">
            AI/ML Engineer | Aspiring Full-Stack Developer
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about building intelligent applications using <span className="text-cyan-400">FastAPI</span>, TensorFlow, and modern web technologies. 
          Specializing in <span className="text-indigo-400">machine learning</span>, REST APIs, and data-driven solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white border-0"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleScrollToContact}
            className="w-full sm:w-auto border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
          >
            Get In Touch
          </Button>
          <a
            href="/resume.pdf"
            download="Vipin_Thingalaya_Resume.pdf"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 w-full sm:w-auto"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://github.com/VipinT-ZYPH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/vipin-thingalaya-100594329/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
            <div className="w-0.5 h-4 bg-slate-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
