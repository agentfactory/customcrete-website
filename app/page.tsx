import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Building2, Hammer, PaintBucket, Ruler } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="h-12 w-12 text-orange-600" />,
    title: 'Commercial Construction',
    description: 'Expert construction services for businesses, from office buildings to retail spaces. We deliver excellence in every commercial project.',
  },
  {
    icon: <Hammer className="h-12 w-12 text-orange-600" />,
    title: 'Residential Construction',
    description: 'Transform your dream home into reality with our premium residential construction services. Quality craftsmanship guaranteed.',
  },
  {
    icon: <PaintBucket className="h-12 w-12 text-orange-600" />,
    title: 'Renovations & Remodeling',
    description: 'Modernize and enhance your space with our professional renovation services. From concept to completion.',
  },
  {
    icon: <Ruler className="h-12 w-12 text-orange-600" />,
    title: 'Project Planning',
    description: 'Strategic project planning and management to ensure your construction project succeeds on time and within budget.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
          alt="Professional concrete construction site with modern equipment and expert workmanship"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Excellence <span className="text-orange-500">Since 2014</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Your trusted construction partner with over 150 successful projects and 500+ satisfied clients. Experience the difference of working with industry leaders.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-100" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Construction Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From commercial construction to residential projects, we deliver exceptional results with precision and professionalism.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Vision into Reality?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our 500+ satisfied clients. Contact us today for a free consultation and discover how we can bring your construction project to life.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-100" asChild>
            <Link href="/contact">Get Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}