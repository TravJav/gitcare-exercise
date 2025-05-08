import { Calendar, ChevronRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Props interface for the CTA component
interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonIcon?: React.ReactNode;
  secondaryButtonIcon?: React.ReactNode;
  variant?: 'gradient' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function CTA({
  title = 'Begin Your Journey to Optimal Health',
  description = 'Take the first step towards extending your healthspan and enhancing your quality of life with our pioneering treatments.',
  primaryButtonText = 'Schedule Assessment',
  secondaryButtonText = 'Explore Treatment Options',
  primaryButtonIcon = <Calendar className="ml-2 h-5 w-5" />,
  secondaryButtonIcon = <ChevronRight className="ml-2 h-5 w-5" />,
  variant = 'gradient',
  size = 'md',
  className = '',
}: CTAProps) {
  // Determine background, text, and button styling based on variant
  const getStyles = () => {
    switch (variant) {
      case 'light':
        return {
          container: 'bg-white text-gray-800 shadow-md',
          primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
          secondary: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50',
        };
      case 'dark':
        return {
          container: 'bg-gray-900 text-white shadow-md',
          primary: 'bg-teal-500 text-white hover:bg-teal-600',
          secondary: 'border-2 border-white text-white hover:bg-white hover:text-gray-900',
        };
      default: // gradient
        return {
          container: 'bg-gradient-to-r from-indigo-600 to-teal-600 text-white shadow-lg',
          primary: 'bg-white text-indigo-700 hover:bg-indigo-50',
          secondary: 'border-2 border-white text-white hover:bg-white hover:text-indigo-700',
        };
    }
  };

  // Determine padding based on size
  const getPadding = () => {
    switch (size) {
      case 'sm':
        return 'p-4';
      case 'lg':
        return 'p-10';
      default:
        return 'p-8';
    }
  };

  const styles = getStyles();
  const padding = getPadding();

  return (
    <Card className={`${styles.container} ${padding} ${className} rounded-lg`}>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className={`${size === 'sm' ? 'text-base' : 'text-lg'} mb-8`}>{description}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size={size === 'sm' ? 'default' : 'lg'} className={styles.primary}>
            {primaryButtonText} {primaryButtonIcon}
          </Button>
          <Button
            variant="outline"
            size={size === 'sm' ? 'default' : 'lg'}
            className={styles.secondary}
          >
            {secondaryButtonText} {secondaryButtonIcon}
          </Button>
        </div>
      </div>
    </Card>
  );
}

// Additional specialized CTA components

export function ConsultationCTA({ className = '' }) {
  return (
    <CTA
      title="Schedule Your Free Consultation"
      description="Our specialists are ready to provide personalized guidance on your health journey."
      primaryButtonText="Book Now"
      secondaryButtonText="Learn More"
      primaryButtonIcon={<Calendar className="ml-2 h-5 w-5" />}
      variant="gradient"
      className={className}
    />
  );
}

export function ContactCTA({ className = '' }) {
  return (
    <CTA
      title="Get in Touch With Our Team"
      description="Have questions about our treatments? Our specialists are here to help."
      primaryButtonText="Call Us"
      secondaryButtonText="Email Us"
      primaryButtonIcon={<Phone className="ml-2 h-5 w-5" />}
      secondaryButtonIcon={<Mail className="ml-2 h-5 w-5" />}
      variant="light"
      size="sm"
      className={className}
    />
  );
}

// Example of how to use the CTA component
export function CTAExample() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto px-4">
      {/* Default CTA */}
      <CTA />

      {/* Light variant */}
      <CTA
        title="Join Our Wellness Program"
        description="Membership includes priority access to all our cutting-edge treatments and therapies."
        primaryButtonText="Become a Member"
        secondaryButtonText="View Benefits"
        variant="light"
      />

      {/* Dark variant with small size */}
      <CTA
        title="Download Our Research Paper"
        description="Access our latest findings on stem cell therapy applications."
        primaryButtonText="Download Now"
        secondaryButtonText="Cite This Research"
        variant="dark"
        size="sm"
      />

      {/* Specialized CTAs */}
      <ConsultationCTA />
      <ContactCTA />
    </div>
  );
}
