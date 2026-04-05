'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Intelligent Expense Analyzer',
      description: 'AI-powered financial analytics platform using FastAPI, PostgreSQL, and Streamlit with secure APIs and interactive dashboards for expense tracking and insights.',
      techStack: ['FastAPI', 'PostgreSQL', 'Streamlit', 'TensorFlow', 'JWT'],
      category: 'Full-Stack',
      githubUrl: 'https://github.com/VipinT-ZYPH/Intelligent-Expense-Analyzer',
      featured: true
    },
    {
      id: 2,
      title: 'DocuMind',
      description: 'RAG-based document intelligence system using embeddings and LLMs for semantic search and contextual Q&A. Enables intelligent document querying and analysis.',
      techStack: ['Python', 'RAG', 'NLP', 'Embeddings', 'FastAPI'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/VipinT-ZYPH/DocuMind-Retrieval-Augmented-Document-Chatbot',
      featured: true
    },
    {
      id: 3,
      title: 'Customer Churn Prediction System',
      description: 'Machine learning system that predicts customer churn using classification algorithms. Features data preprocessing, model training, and performance analytics.',
      techStack: ['Scikit-Learn', 'Pandas', 'FastAPI', 'Power BI', 'REST APIs'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/VipinT-ZYPH/FUTURE_ML_01',
      featured: false
    }
  ];

  const categories = ['All', 'Frontend', 'Full-Stack', 'AI/ML'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-900">
      {/* DEBUG: Projects Section Active */}
      <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 text-xs">PROJECTS ACTIVE</div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">Projects</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development and AI/ML integration
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-slate-700 p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-indigo-500 transition-all duration-300 hover:scale-102">
              <h3 className="text-lg font-semibold text-slate-100 mb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full border border-slate-600 hover:bg-slate-600 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                {project.description.length > 120 
                  ? project.description.substring(0, 120) + '...' 
                  : project.description}
              </p>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300"
                  >
                    <Github size={14} className="mr-1" />
                    Source Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                )}
              </div>
            </div>
            ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <p className="text-slate-300 mb-4">
            Want to see more projects?
          </p>
          <a 
            href="https://github.com/VipinT-ZYPH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300"
          >
            <Github size={20} className="mr-2" />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
