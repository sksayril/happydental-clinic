import { Sparkles, Shield, Stethoscope, Zap, Smile, Baby } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Teeth Cleaning',
    description: 'Gentle and thorough cleaning to keep those pearly whites sparkling!',
    color: 'from-cyan-400 to-blue-400',
    bgColor: 'bg-cyan-50',
  },
  {
    icon: Shield,
    title: 'Cavity Prevention',
    description: 'Protective treatments to shield teeth from cavities and decay.',
    color: 'from-blue-400 to-teal-400',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Stethoscope,
    title: 'Regular Checkups',
    description: 'Fun and friendly dental exams to monitor healthy growth.',
    color: 'from-teal-400 to-green-400',
    bgColor: 'bg-teal-50',
  },
  {
    icon: Zap,
    title: 'Emergency Care',
    description: '24/7 emergency dental services for your peace of mind.',
    color: 'from-orange-400 to-red-400',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Smile,
    title: 'Orthodontics',
    description: 'Braces and aligners to create beautiful, confident smiles.',
    color: 'from-pink-400 to-rose-400',
    bgColor: 'bg-pink-50',
  },
  {
    icon: Baby,
    title: 'Baby Dentistry',
    description: 'Specialized care for your little ones first teeth.',
    color: 'from-yellow-400 to-orange-400',
    bgColor: 'bg-yellow-50',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-cyan-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care designed especially for children in a fun and comfortable environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${service.bgColor} rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 border-transparent hover:border-cyan-100`}
              >
                <div className={`bg-gradient-to-br ${service.color} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-6 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">Why Choose HAPPY KIDS?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl mb-4">🎮</div>
              <h4 className="text-lg md:text-xl font-bold mb-2">Fun Waiting Area</h4>
              <p className="text-sm md:text-base text-cyan-50">Games, toys, and entertainment to keep kids happy while waiting.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl mb-4">🏆</div>
              <h4 className="text-lg md:text-xl font-bold mb-2">Reward System</h4>
              <p className="text-sm md:text-base text-cyan-50">Every visit earns stickers and prizes to make dental care exciting!</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl mb-4">👨‍⚕️</div>
              <h4 className="text-lg md:text-xl font-bold mb-2">Expert Team</h4>
              <p className="text-sm md:text-base text-cyan-50">Specially trained pediatric dentists who love working with children.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
