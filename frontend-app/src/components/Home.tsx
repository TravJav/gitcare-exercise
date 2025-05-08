import { useState } from 'react';
import {
  Brain,
  Dna,
  Clock,
  Calendar,
  ArrowRight,
  Award,
  Users,
  ChevronRight,
  CheckCircle2,
  Star,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { Badge } from '@/components/ui/badge';

import { CTA, ConsultationCTA, ContactCTA } from '@/components/CTALanding'; // Adjust the path as needed
import { PartnerBanner } from '@/components/PartnerBanner';

export function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      age: 67,
      text: "The age reversal therapy has given me energy I haven't felt in decades. My joint pain is gone and I'm back to my active lifestyle.",
      treatment: 'Cellular Rejuvenation',
      stars: 5,
    },
    {
      name: 'Dr. Michael Chen',
      age: 58,
      text: 'As a physician myself, I was skeptical of longevity treatments. After experiencing the stem cell protocol, my cognitive function and physical stamina have notably improved.',
      treatment: 'Neural Stem Cell Therapy',
      stars: 5,
    },
    {
      name: 'Robert Garcia',
      age: 72,
      text: 'The mental wellness program alongside the biological age reduction therapy has transformed my outlook on life. I feel decades younger.',
      treatment: 'Integrated Mental-Physical Program',
      stars: 4,
    },
  ];

  const services = [
    {
      title: 'Mental Wellness Innovation',
      description:
        'Revolutionary non-invasive treatments for anxiety, depression, and cognitive enhancement using personalized neuroplasticity protocols.',
      icon: <Brain className="h-10 w-10 text-indigo-500" />,
      benefits: [
        'Neuroplasticity stimulation',
        'Personalized brain mapping',
        'Cognitive enhancement',
      ],
    },
    {
      title: 'Advanced Stem Cell Therapies',
      description:
        'Cutting-edge regenerative treatments utilizing the latest in pluripotent stem cell technology to repair and rejuvenate damaged tissues.',
      icon: <Dna className="h-10 w-10 text-teal-500" />,
      benefits: ['Tissue regeneration', 'Immune system enhancement', 'Joint reconstruction'],
    },
    {
      title: 'Age Reversal Research & Treatment',
      description:
        'Pioneering therapies targeting the biological mechanisms of aging, offering measurable reductions in biological age markers.',
      icon: <Clock className="h-10 w-10 text-emerald-500" />,
      benefits: ['Telomere extension', 'Senescent cell clearance', 'Mitochondrial optimization'],
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-indigo-700 text-white py-16 px-6 rounded-lg shadow-lg mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Redefining the Future of Human Health
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Pioneering treatments in mental wellness, stem cell technology, and age reversal science
            to enhance your quality of life.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-indigo-700 hover:bg-indigo-50"
            >
              Discover Our Approach
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white hover:bg-white hover:text-indigo-700 text-white"
            >
              Book Consultation <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Card className="mb-12">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-teal-600">95%</p>
              <p className="text-gray-600 mt-2">Patient satisfaction rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-600">12+</p>
              <p className="text-gray-600 mt-2">Years of research excellence</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-600">30k+</p>
              <p className="text-gray-600 mt-2">Successful treatments</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Services Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Specialized Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition duration-300">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {service.icon}
                  <CardTitle className="text-xl ml-3">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium text-gray-700 mb-2">Key Benefits:</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-teal-600 hover:text-teal-700 p-0">
                  Learn more <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Why Choose MediCare Plus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Award className="h-10 w-10 text-teal-500 mb-2" />
              <CardTitle>Pioneering Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Leading the field with breakthrough discoveries in aging biology and neural
                regeneration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-indigo-500 mb-2" />
              <CardTitle>Expert Specialists</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Team of world-renowned scientists and physicians specializing in regenerative
                medicine.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Dna className="h-10 w-10 text-emerald-500 mb-2" />
              <CardTitle>Personalized Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Every treatment protocol is tailored to your unique genetic and biological profile.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Patient Success Stories
        </h2>
        <Card>
          <CardContent className="pt-6">
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="text-center px-4 py-6">
                      <div className="mb-6 flex justify-center">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-xl text-gray-600 italic mb-6">"{testimonial.text}"</p>
                      <div className="flex flex-col items-center">
                        <p className="font-semibold text-gray-800">
                          {testimonial.name}, {testimonial.age}
                        </p>
                        <Badge variant="outline" className="mt-1 text-teal-600 border-teal-600">
                          {testimonial.treatment}
                        </Badge>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static mr-2 translate-y-0" />
                <CarouselNext className="relative static translate-y-0" />
              </div>
            </Carousel>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <CTA
          title="Begin Your Journey to Optimal Health"
          description="Take the first step towards extending your healthspan and enhancing your quality of life with our pioneering treatments."
          primaryButtonText="Schedule Assessment"
          secondaryButtonText="Explore Treatment Options"
          primaryButtonIcon={<Calendar className="ml-2 h-5 w-5" />}
          secondaryButtonIcon={<ChevronRight className="ml-2 h-5 w-5" />}
          variant="gradient"
        />
        <PartnerBanner />
      </div>
    </div>
  );
}
