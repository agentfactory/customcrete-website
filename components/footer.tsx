import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-500">Custom Crete</h3>
            <p className="mt-4 text-gray-400">
              Building dreams into reality with quality and precision.
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-400">Belleville, ON, Canada</p>
              <a href="mailto:info@customcreteltd.com" className="text-gray-400 hover:text-orange-500 block">info@customcreteltd.com</a>
              <a href="tel:+16138486322" className="text-gray-400 hover:text-orange-500 block">+1 (613) 848-6322</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-orange-500">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-orange-500">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-orange-500">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-500">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Residential Construction</li>
              <li className="text-gray-400">Commercial Projects</li>
              <li className="text-gray-400">Renovations</li>
              <li className="text-gray-400">Project Management</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Custom Crete Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}