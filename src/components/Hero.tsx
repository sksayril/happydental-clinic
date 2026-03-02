import { Calendar, Award, Heart, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Welcome to <span className="text-cyan-600 block md:inline">HAPPY KIDS</span>
            </h1>
            <h2 className="text-xl md:text-3xl text-blue-600 font-semibold">
              Children Dental Hospital
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Making dental visits fun and fear-free! Our kid-friendly environment and gentle approach ensure your child's smile stays bright and healthy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#appointment"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </a>
              <a
                href="#services"
                className="bg-white text-cyan-600 px-8 py-4 rounded-full font-bold border-2 border-cyan-500 hover:bg-cyan-50 transition-all hover:scale-105 w-full sm:w-auto text-center"
              >
                Our Services
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-4 pt-8">
              <div className="text-center p-2 rounded-xl hover:bg-white/50 transition-colors">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-cyan-600" />
                </div>
                <p className="text-xs md:text-sm font-semibold text-gray-700">Expert Care</p>
              </div>
              <div className="text-center p-2 rounded-xl hover:bg-white/50 transition-colors">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-cyan-600" />
                </div>
                <p className="text-xs md:text-sm font-semibold text-gray-700">Gentle Touch</p>
              </div>
              <div className="text-center p-2 rounded-xl hover:bg-white/50 transition-colors">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-cyan-600" />
                </div>
                <p className="text-xs md:text-sm font-semibold text-gray-700">Safe & Secure</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-4 md:p-8 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg">
                <div className="text-5xl md:text-6xl mb-4 animate-bounce">🦷✨</div>
                <h3 className="text-2xl md:text-3xl font-bold text-cyan-600 mb-4">Healthy Smiles</h3>
                <p className="text-sm md:text-base text-gray-600 mb-6">
                  Where every visit is an adventure and every smile matters!
                </p>
                <div className="grid grid-cols-2 gap-3 md:gap-4 text-left">
                  <div className="bg-cyan-50 p-3 md:p-4 rounded-xl hover:bg-cyan-100 transition-colors">
                    <p className="text-2xl md:text-3xl font-bold text-cyan-600">15+</p>
                    <p className="text-xs md:text-sm text-gray-600">Years Experience</p>
                  </div>
                  <div className="bg-blue-50 p-3 md:p-4 rounded-xl hover:bg-blue-100 transition-colors">
                    <p className="text-2xl md:text-3xl font-bold text-blue-600">10K+</p>
                    <p className="text-xs md:text-sm text-gray-600">Happy Kids</p>
                  </div>
                  <div className="bg-teal-50 p-3 md:p-4 rounded-xl hover:bg-teal-100 transition-colors">
                    <p className="text-2xl md:text-3xl font-bold text-teal-600">100%</p>
                    <p className="text-xs md:text-sm text-gray-600">Kid-Friendly</p>
                  </div>
                  <div className="bg-orange-50 p-3 md:p-4 rounded-xl hover:bg-orange-100 transition-colors">
                    <p className="text-2xl md:text-3xl font-bold text-orange-600">24/7</p>
                    <p className="text-xs md:text-sm text-gray-600">Emergency Care</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-yellow-400 text-2xl md:text-4xl w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              😁
            </div>
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-pink-400 text-2xl md:text-4xl w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-700">
              🎈
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
