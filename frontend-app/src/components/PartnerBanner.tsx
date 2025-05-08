import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

interface Partner {
  id: number;
  name: string;
  logoUrl?: string;
  width?: number;
  height?: number;
}

interface PartnerBannerProps {
  title?: string;
  partners?: Partner[];
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

export function PartnerBanner({
  title = 'Trusted by Leading Healthcare Institutions',
  partners,
  speed = 'medium',
  className = '',
}: PartnerBannerProps) {
  // Default partners with placeholder logos if none provided
  const defaultPartners: Partner[] = [
    {
      id: 1,
      name: 'Mayo Clinic',
      width: 160,
      height: 80,
      logoUrl:
        'https://assets.mayoclinic.org/content/dam/mayoclinic/images/logos/mayo-clinic-logo.svg',
    },
    { id: 2, name: 'Cleveland Clinic', width: 180, height: 80, logoUrl: 'https://www.mskcc.org/' },
    {
      id: 3,
      name: 'Johns Hopkins',
      width: 160,
      height: 80,
      logoUrl:
        'https://www.jhu.edu/assets/themes/machado/src/assets/images/logos/university-logo-small-horizontal-white.svg',
    },
    {
      id: 4,
      name: 'Massachusetts General Hospital',
      width: 200,
      height: 80,
      logoUrl: 'https://www.massgeneral.org/assets/MGH/images/logos/mgh-logo-rgb.svg',
    },
    {
      id: 5,
      name: 'Stanford Health Care',
      width: 180,
      height: 80,
      logoUrl:
        'https://stanfordhealthcare.org/etc/clientlibs/shc/main/img/stanfordHealthcareLogo.svg',
    },
    {
      id: 6,
      name: 'UCLA Health',
      width: 140,
      height: 80,
      logoUrl: 'https://www.uclahealth.org/themes/custom/uclahealth/images/ucla-health-logo.svg',
    },
    {
      id: 7,
      name: 'Mount Sinai',
      width: 160,
      height: 80,
      logoUrl: 'https://www.mountsinai.org/mshealth/themes/default/media/images/logo-color.png',
    },
  ];

  const partnersToShow = partners || defaultPartners;

  // Duplicate the partners to create a seamless loop
  const allPartners = [...partnersToShow, ...partnersToShow];

  // Set animation speed based on prop
  const getAnimationDuration = () => {
    switch (speed) {
      case 'slow':
        return '60s';
      case 'fast':
        return '20s';
      default:
        return '40s';
    }
  };

  // Animation direction: right to left
  const animationDuration = getAnimationDuration();

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">{title}</h2>
      </div>

      <div className="relative">
        <div
          className="flex animate-marquee"
          style={{
            animation: `scroll ${animationDuration} linear infinite`,
            whiteSpace: 'nowrap',
          }}
        >
          {allPartners.map((partner, index) => (
            <div key={`${partner.id}-${index}`} className="flex items-center justify-center mx-8">
              <Card className="bg-white px-6 py-4 flex items-center justify-center">
                <img
                  src={
                    partner.logoUrl ||
                    `/api/placeholder/${partner.width || 160}/${partner.height || 80}`
                  }
                  alt={`${partner.name} logo`}
                  className="object-contain h-16"
                />
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: scroll ${animationDuration} linear infinite;
        }
      `}</style>
    </div>
  );
}

// Example usage component showing different variants
export function PartnerBannerExample() {
  const healthTechPartners: Partner[] = [
    { id: 1, name: 'Health Tech Co', width: 160, height: 80 },
    { id: 2, name: 'BioInnovate', width: 180, height: 80 },
    { id: 3, name: 'GenomeTech', width: 150, height: 80 },
    { id: 4, name: 'NeuroCare Systems', width: 200, height: 80 },
    { id: 5, name: 'MedAI Solutions', width: 180, height: 80 },
  ];

  return (
    <div className="space-y-16">
      {/* Default partner banner */}
      <PartnerBanner />

      {/* Custom partners with fast speed */}
      <PartnerBanner title="Our Technology Partners" partners={healthTechPartners} speed="fast" />
    </div>
  );
}

// A simpler version with pausing on hover
export function SimplePartnerBanner({ className = '' }) {
  const partners = [
    { id: 1, name: 'Mayo Clinic', width: 160, height: 80 },
    { id: 2, name: 'Cleveland Clinic', width: 180, height: 80 },
    { id: 3, name: 'Johns Hopkins', width: 160, height: 80 },
    { id: 4, name: 'Massachusetts General Hospital', width: 200, height: 80 },
    { id: 5, name: 'Stanford Health Care', width: 180, height: 80 },
    { id: 6, name: 'UCLA Health', width: 140, height: 80 },
  ];

  return (
    <div className={`w-full py-8 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Our Trusted Partners</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {partners.map((partner) => (
          <Card key={partner.id} className="bg-white px-6 py-4">
            <img
              src={`/api/placeholder/${partner.width}/${partner.height}`}
              alt={`${partner.name} logo`}
              className="object-contain h-16"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
