import React from 'react';
import { Code, Database, Brain, Cloud, LucideIcon } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  skills: string[];
  color: string;
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'text-indigo-400',
      skills: ['HTML', 'CSS', 'JavaScript', 'React (basic)', 'Next.js (learning)']
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'text-cyan-400',
      skills: ['FastAPI', 'REST APIs', 'JWT Authentication', 'PostgreSQL', 'SQL']
    },
    {
      title: 'AI/ML',
      icon: Brain,
      color: 'text-purple-400',
      skills: ['TensorFlow', 'Scikit-Learn', 'CNNs', 'NLP', 'RAG']
    },
    {
      title: 'Cloud & Tools',
      icon: Cloud,
      color: 'text-orange-400',
      skills: ['AWS (EC2, S3, IAM)', 'Google Cloud', 'GitHub', 'Streamlit', 'Power BI']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">My Skills</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across different domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-indigo-500 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-2 bg-slate-700 rounded-lg mr-3 ${category.color}`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                    <span className="text-slate-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-slate-100 mb-2">
              Currently Learning
            </h3>
            <p className="text-slate-400">
              Technologies I'm actively developing skills in
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-indigo-500 hover:scale-105 transition-all duration-300">
              <h4 className="text-lg font-medium text-slate-100 mb-3">
                Next.js
              </h4>
              <p className="text-slate-400 text-sm">
                Advanced React framework for full-stack applications
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-indigo-500 hover:scale-105 transition-all duration-300">
              <h4 className="text-lg font-medium text-slate-100 mb-3">
                Frontend Development
              </h4>
              <p className="text-slate-400 text-sm">
                Modern CSS, responsive design, and component architecture
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-indigo-500 hover:scale-105 transition-all duration-300">
              <h4 className="text-lg font-medium text-slate-100 mb-3">
                UI/UX Fundamentals
              </h4>
              <p className="text-slate-400 text-sm">
                User-centered design principles and accessibility
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;