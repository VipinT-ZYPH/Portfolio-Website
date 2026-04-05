import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vipinthingalaya7@gmail.com',
      href: 'mailto:vipinthingalaya7@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7400479245',
      href: 'tel:+917400479245'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      href: '#'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my projects',
      href: 'https://github.com/VipinT-ZYPH',
      external: true
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/vipin-thingalaya-100594329/',
      external: true
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      {/* DEBUG: Contact Section Active */}
      <div className="absolute top-4 left-4 bg-purple-500 text-white px-2 py-1 text-xs">CONTACT ACTIVE</div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.external ? '_blank' : '_self'}
              rel={item.external ? 'noopener noreferrer' : ''}
              className="group text-decoration-none"
            >
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:bg-slate-700 hover:border-indigo-500 transition-all duration-300 hover:scale-102 group-hover:shadow-lg group-hover:shadow-indigo-500/20">
                <div className="text-center">
                  <div className="p-3 bg-slate-700 rounded-full inline-block mb-4 text-indigo-400 group-hover:text-cyan-400 transition-colors duration-300">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors duration-300">{item.label}</h3>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">{item.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
