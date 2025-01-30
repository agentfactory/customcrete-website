'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Building2,
  Home,
  PaintBucket,
  Wrench,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const services = [
  {
    icon: <Building2 className="h-12 w-12 text-orange-600" />,
    title: 'Commercial Construction',
    description:
      'From office buildings to retail spaces, we deliver commercial projects that meet your business needs.',
    features: [
      'Custom office buildings',
      'Retail spaces',
      'Industrial facilities',
      'Project management',
    ],
  },
  {
    icon: <Home className="h-12 w-12 text-orange-600" />,
    title: 'Residential Construction',
    description:
      'Building dream homes with attention to detail and quality craftsmanship.',
    features: [
      'Custom homes',
      'Multi-family units',
      'Luxury residences',
      'Energy-efficient designs',
    ],
  },
  {
    icon: <PaintBucket className="h-12 w-12 text-orange-600" />,
    title: 'Renovations',
    description:
      'Transform your existing space with our expert renovation services.',
    features: [
      'Kitchen remodeling',
      'Bathroom updates',
      'Home additions',
      'Complete renovations',
    ],
  },
  {
    icon: <Wrench className="h-12 w-12 text-orange-600" />,
    title: 'Maintenance',
    description:
      'Keep your property in top condition with our maintenance services.',
    features: [
      'Preventive maintenance',
      'Emergency repairs',
      'Property inspections',
      'System upgrades',
    ],
  },
];

const testimonials = [
  {
    name: 'John Doe',
    role: 'Business Owner',
    content:
      'BuildRight Construction exceeded our expectations. Their attention to detail and professional approach made our commercial project a success.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
  },
  {
    name: 'Sarah Williams',
    role: 'Homeowner',
    content:
      'We are extremely satisfied with our new home. The team was professional, responsive, and delivered exceptional quality.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
  },
  {
    name: 'Michael Brown',
    role: 'Property Developer',
    content:
      'Working with BuildRight has been a pleasure. Their expertise and commitment to quality are unmatched in the industry.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
  },
];

export default function Services() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="pt-16">
      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-8">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read about experiences from our satisfied clients
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="bg-white rounded-lg shadow-lg p-8 mx-12">
                <div className="flex items-center mb-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}