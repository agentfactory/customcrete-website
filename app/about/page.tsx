import Image from 'next/image';

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    bio: 'With over 20 years of experience in construction, John leads our team with passion and expertise.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    bio: 'Sarah ensures our projects are delivered on time and within budget while maintaining the highest quality standards.',
  },
  {
    name: 'Michael Chen',
    role: 'Lead Architect',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    bio: 'Michael brings creativity and technical expertise to every project, creating innovative design solutions.',
  },
  {
    name: 'Emily Brown',
    role: 'Safety Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    bio: 'Emily ensures all our projects maintain the highest safety standards and compliance.',
  },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
              <p className="text-gray-600 text-lg mb-6">
                At BuildRight Construction, we are committed to delivering exceptional construction services
                that transform our clients' visions into reality. Our mission is to build not just
                structures, but lasting relationships based on trust, quality, and innovation.
              </p>
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="space-y-4 text-gray-600">
                <li>✓ Quality in every detail</li>
                <li>✓ Safety as our top priority</li>
                <li>✓ Innovation in construction</li>
                <li>✓ Sustainable practices</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
                alt="Construction site"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who make our success possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-orange-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}