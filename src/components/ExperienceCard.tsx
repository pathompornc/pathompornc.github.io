
import React from 'react';

interface ExperienceCardProps {
  company: string;
  period: string;
  role: string;
  description: string[];
  logoSrc?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  period,
  role,
  description,
  logoSrc
}) => {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden p-8">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {logoSrc && (
          <div className="flex-shrink-0 w-14 h-14 rounded-md overflow-hidden bg-secondary flex items-center justify-center">
            <img 
              src={logoSrc} 
              alt={`${company} logo`} 
              className="object-contain w-10 h-10"
            />
          </div>
        )}
        
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-4 mb-4">
            <h3 className="font-display text-xl font-medium">{company}</h3>
            <span className="text-sm text-muted-foreground mt-1 md:mt-0">{period}</span>
          </div>
          
          <div className="inline-block px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground mb-4">
            {role}
          </div>
          
          <div className="space-y-2">
            {description.map((item, index) => (
              <p key={index} className="text-muted-foreground">{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
