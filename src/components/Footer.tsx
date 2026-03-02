import { Smile, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Smile className="w-8 h-8 text-yellow-300" />
              <div>
                <h3 className="text-xl font-bold">HAPPY KIDS</h3>
                <p className="text-xs text-cyan-100">Children Dental Hospital</p>
              </div>
            </div>
            <p className="text-cyan-100 text-sm">
              Making dental visits fun and fear-free for children since 2010.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-cyan-100">
              <li><a href="#services" className="hover:text-yellow-300 transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-yellow-300 transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-yellow-300 transition-colors">Our Team</a></li>
              <li><a href="#gallery" className="hover:text-yellow-300 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-cyan-100">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>123 Happy Street, Smile City, SC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>073593 58281</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@happykidsdental.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Office Hours</h4>
            <ul className="space-y-2 text-cyan-100">
              <li className="flex items-center space-x-2">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Mon - Fri</p>
                  <p className="text-sm">9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Saturday</p>
                  <p className="text-sm">10:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sunday</p>
                  <p className="text-sm">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-400 pt-6 text-center text-cyan-100">
          <p>&copy; 2024 HAPPY KIDS Children Dental Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
