
import React from 'react';
import { Award, Briefcase, ExternalLink, Github, GraduationCap, Linkedin, Mail, MapPin, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const experiences = [
  {
    company: "AI Innovation Labs",
    position: "Senior Product Manager",
    period: "2022 - Present",
    location: "Seattle, WA",
    description: [
      "Leading development of Thai language LLM ecosystem including data collection, model training, and deployment platforms",
      "Launched AI-powered customer support solution for Thailand's largest bank, reducing response time by 45%",
      "Managing cross-functional team of engineers, data scientists, and designers across 3 countries"
    ]
  },
  {
    company: "FinTech Solutions Inc.",
    position: "Product Manager",
    period: "2020 - 2022",
    location: "San Francisco, CA",
    description: [
      "Led development of ML-based investment optimization engine for wealth management platform",
      "Increased client retention by 35% and improved average portfolio performance by 12%",
      "Collaborated with financial advisors to create user-friendly interfaces for complex financial data"
    ]
  },
  {
    company: "E-commerce Innovations",
    position: "Associate Product Manager",
    period: "2018 - 2020",
    location: "New York, NY",
    description: [
      "Developed conversational AI chatbot for major retail chain with 14K+ branches nationwide",
      "Implemented product recommendation systems processing 13M+ daily transactions",
      "Conducted user research to identify pain points and opportunities for digital transformation"
    ]
  }
];

const education = [
  {
    institution: "Stanford University",
    degree: "M.S. in Computer Science, AI Specialization",
    period: "2016 - 2018",
    achievements: [
      "Research Assistant at Stanford AI Lab",
      "Best Capstone Project Award for AI-powered financial advisor",
      "President of Product Management Club"
    ]
  },
  {
    institution: "University of California, Berkeley",
    degree: "B.S. in Computer Science and Business Administration",
    period: "2012 - 2016",
    achievements: [
      "Graduated with Honors, GPA 3.85/4.0",
      "Member of Entrepreneurship Association",
      "Founded campus tech innovation club"
    ]
  }
];

const certifications = [
  {
    name: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "#"
  },
  {
    name: "Professional Product Manager",
    issuer: "Product School",
    date: "2022",
    link: "#"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera (Stanford)",
    date: "2021",
    link: "#"
  },
  {
    name: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Alliance",
    date: "2020",
    link: "#"
  }
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container">
        {/* Header Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="md:flex">
              <div className="md:shrink-0 md:w-1/3">
                <img
                  className="h-48 w-full object-cover md:h-full"
                  src="/placeholder.svg"
                  alt="Profile"
                />
              </div>
              <div className="p-8 md:p-10 md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">John Doe</h1>
                <h2 className="text-xl text-gray-700 mb-4">Product Manager in AI/ML</h2>
                <p className="text-gray-600 mb-6">
                  I create intelligent products that solve complex problems, with 5 years 
                  of experience across ecommerce and fintech. Currently focused on building 
                  open-source AI ecosystems to democratize access to cutting-edge language technologies.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-navy-600 hover:text-navy-800 transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-navy-600 hover:text-navy-800 transition-colors">
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                  <a href="mailto:contact@example.com" className="flex items-center gap-2 text-navy-600 hover:text-navy-800 transition-colors">
                    <Mail className="h-5 w-5" />
                    <span>Email</span>
                  </a>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>Seattle, WA</span>
                  </div>
                </div>
                
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Download Resume <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="section-title">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-evergreen-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{cert.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Work Experience Section */}
        <section className="mb-16">
          <h2 className="section-title">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-64 shrink-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="h-5 w-5 text-evergreen-600" />
                      <h3 className="font-bold text-lg">{exp.company}</h3>
                    </div>
                    <p className="text-gray-700 font-medium mb-1">{exp.position}</p>
                    <p className="text-gray-600 mb-1">{exp.period}</p>
                    <p className="text-gray-600 flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {exp.location}
                    </p>
                  </div>
                  <div className="flex-1">
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-evergreen-500 mt-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Education Section */}
        <section className="mb-16">
          <h2 className="section-title">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-64 shrink-0">
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="h-5 w-5 text-evergreen-600" />
                      <h3 className="font-bold text-lg">{edu.institution}</h3>
                    </div>
                    <p className="text-gray-700 font-medium mb-1">{edu.degree}</p>
                    <p className="text-gray-600">{edu.period}</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2">Achievements & Activities</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-evergreen-500 mt-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Beyond Work Section */}
        <section className="bg-gray-50 rounded-xl p-8 md:p-10 text-center">
          <User className="h-8 w-8 mx-auto mb-4 text-evergreen-600" />
          <h2 className="text-2xl font-bold mb-4">Beyond Work</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            When I'm not building products, I enjoy exploring the beautiful Pacific Northwest 
            through hiking and photography. I'm an avid traveler, always planning my next adventure 
            to experience new cultures and capture the beauty of our world.
          </p>
          <Link to="/blog" className="btn-outline">
            Read My Travel Blog
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
