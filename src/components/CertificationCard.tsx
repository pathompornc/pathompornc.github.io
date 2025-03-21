
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  credentialUrl?: string;
  logoSrc?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  credential,
  credentialUrl,
  logoSrc
}) => {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden p-6">
      <div className="flex items-start gap-4">
        {logoSrc && (
          <div className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-secondary flex items-center justify-center">
            <img 
              src={logoSrc} 
              alt={`${issuer} logo`} 
              className="object-contain w-8 h-8"
            />
          </div>
        )}
        
        <div className="flex-grow">
          <h3 className="font-display text-lg font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{issuer} • {date}</p>
          
          {credential && (
            <div className="flex items-center text-sm">
              <span className="text-muted-foreground mr-2">Credential ID:</span>
              {credentialUrl ? (
                <a 
                  href={credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center"
                >
                  {credential}
                  <ExternalLink size={14} className="ml-1" />
                </a>
              ) : (
                <span>{credential}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
