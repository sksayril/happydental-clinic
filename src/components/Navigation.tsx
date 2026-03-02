import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smile, Phone, Calendar, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <Smile className="w-10 h-10 text-yellow-300" />
            <div>
              <h1 className="text-2xl font-bold">HAPPY KIDS</h1>
              <p className="text-xs text-cyan-100">Children Dental Hospital</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-yellow-300 transition-colors font-medium">
              Home
            </Link>
            <a href="#services" className="hover:text-yellow-300 transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="hover:text-yellow-300 transition-colors font-medium">
              About Us
            </a>
            <a href="#team" className="hover:text-yellow-300 transition-colors font-medium">
              Our Team
            </a>
            <a href="#gallery" className="hover:text-yellow-300 transition-colors font-medium">
              Gallery
            </a>
            <a href="#contact" className="hover:text-yellow-300 transition-colors font-medium">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:07359358281" className="hidden lg:flex items-center space-x-2 hover:text-yellow-300 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">073593 58281</span>
            </a>
            <a
              href="#appointment"
              className="bg-yellow-400 text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-all hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-300 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-600 rounded-b-2xl shadow-xl pb-6 animate-fade-in-down absolute top-20 left-0 w-full z-40">
            <div className="flex flex-col space-y-4 px-6 pt-4">
              <Link 
                to="/" 
                className="hover:text-yellow-300 transition-colors font-medium border-b border-blue-500 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#services" 
                className="hover:text-yellow-300 transition-colors font-medium border-b border-blue-500 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="hover:text-yellow-300 transition-colors font-medium border-b border-blue-500 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#team" 
                className="hover:text-yellow-300 transition-colors font-medium border-b border-blue-500 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </a>
              <a 
                href="#gallery" 
                className="hover:text-yellow-300 transition-colors font-medium border-b border-blue-500 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                className="hover:text-yellow-300 transition-colors font-medium border-b border-blue-500 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              
              <div className="pt-4 flex flex-col space-y-4">
                <a href="tel:07359358281" className="flex items-center space-x-2 text-yellow-300 font-bold">
                  <Phone className="w-5 h-5" />
                  <span>073593 58281</span>
                </a>
                <a
                  href="#appointment"
                  className="bg-yellow-400 text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 text-center shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Appointment Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
