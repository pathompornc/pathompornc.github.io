
import React from 'react';

interface EducationCardProps {
  school: string;
  degree: string;
  period: string;
  activities?: string[];
  awards?: string[];
  logoSrc?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  school,
  degree,
  period,
  activities,
  awards,
  logoSrc
}) => {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden p-8">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {logoSrc && (
          <div className="flex-shrink-0 w-14 h-14 rounded-md overflow-hidden bg-secondary flex items-center justify-center">
            <img 
              src={logoSrc} 
              alt={`${school} logo`} 
              className="object-contain w-10 h-10"
            />
          </div>
        )}
        
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-4 mb-4">
            <h3 className="font-display text-xl font-medium">{school}</h3>
            <span className="text-sm text-muted-foreground mt-1 md:mt-0">{period}</span>
          </div>
          
          <div className="inline-block px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground mb-4">
            {degree}
          </div>
          
          {activities && activities.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Extracurricular Activities</h4>
              <ul className="list-disc list-inside space-y-1">
                {activities.map((activity, index) => (
                  <li key={index} className="text-sm text-muted-foreground">{activity}</li>
                ))}
              </ul>
            </div>
          )}
          
          {awards && awards.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2">Awards & Achievements</h4>
              <ul className="list-disc list-inside space-y-1">
                {awards.map((award, index) => (
                  <li key={index} className="text-sm text-muted-foreground">{award}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
