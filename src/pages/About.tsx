import React from 'react';
import { ExternalLink } from 'lucide-react';

import ProfileSection from '@/components/about/ProfileSection';
import CertificationsSection from '@/components/about/CertificationsSection';
import ExperienceSection from '@/components/about/ExperienceSection';
import EducationSection from '@/components/about/EducationSection';
import StartupExperienceSection from '@/components/about/StartupExperienceSection';

const certifications = [
  {
    name: "PMP (Project Management Professional)",
    issuer: "PMI (Project Management Institute)",
    date: "2022 - Present",
    link: "https://www.credly.com/badges/24d63ef5-45a4-408c-b62e-82202790696d",
    credentialId: "3247538"
  },
  {
    name: "PMI-ACP (Agile Certified Practitioner)",
    issuer: "PMI (Project Management Institute)",
    date: "2022 - Present",
    link: "https://www.credly.com/badges/869f628f-1c99-44bc-b56c-7213d87b10b6/public_url",
    credentialId: "3236038"
  },
  {
    name: "CS50X (Introduction to Computer Science)",
    issuer: "Harvard University",
    date: "2025",
    link: "placeholder",
    credentialId: "CS50X-2025"
  },
  {
    name: "Decentralized Finance (DeFi) and Blockchain Executive Course",
    issuer: "Chulalongkorn Business School",
    date: "2023"
  }
];

const experiences = [
  {
    company: "SCB 10X",
    position: "Senior Product Manager, AI",
    period: "2022 - 2024",
    description: [
      "Leading development of Thai language LLM ecosystem including data collection, model training, and developer platforms",
      "Launched AI-powered customer support solution for Thailand's largest bank, reducing response time by 40%"
    ]
  },
  {
    company: "Finnomena",
    position: "Product Manager",
    period: "2021 - 2022",
    description: [
      "Led development of ML-based investment optimization engine for wealth management platform",
      "Analyze behavior of 150k+ users to enhance UX, reducing drop-off rate by 12%",
      "Collaborated with Franklin Templeton to develop recommendation algorithms for 2.2K+ financial advisors"
    ]
  },
  {
    company: "Sertis",
    position: "AI Product Manager",
    period: "2019 - 2021",
    description: [
      "Developed conversational AI chatbot for major retail chain with 14K+ branches nationwide",
      "Implemented product recommendation systems processing 13M+ daily transactions",
      "Conducted user research to identify pain points and opportunities for digital transformation"
    ]
  }
];

const startups = [
  {
    company: "Speedboat Studio",
    position: "Co-founder & Product Manager",
    period: "2021 - 2023",
    description: [
      "Co-founded a no-code NFT platform that enabled creators to generate over $2M in NFT sales volume",
      "Built and scaled the MVP from 0 to 18,000 users in 6 months",
      "Led a team of 5 blockchain engineers and product designers in building the core platform"
    ]
  }
];

const education = [
  {
    institution: "University of Washington",
    degree: "Master of Science in Information Management",
    period: "2024 - 2025",
    major: "Major: Data Science and AI"
  },
  {
    institution: "Chulalongkorn University",
    degree: "Bachelor of Business Administration",
    period: "2015 - 2019",
    major: "Major: Finance and Accounting"
  }
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream-50">
      <div className="container">
        {/* Profile Section */}
        <section className="mb-16">
          <ProfileSection />
        </section>
        
        {/* Certifications Section */}
        <CertificationsSection certifications={certifications} />
        
        {/* Work Experience Section */}
        <ExperienceSection experiences={experiences} />
        
        {/* Startup Experience Section */}
        <StartupExperienceSection startups={startups} />
        
        {/* Education Section */}
        <EducationSection education={education} />
      </div>
    </div>
  );
};

export default About;
