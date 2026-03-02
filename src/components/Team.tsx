import { Award, Heart, Star } from 'lucide-react';

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Pediatric Dentist',
    specialty: 'Pediatric Dentistry',
    experience: '15 years',
    emoji: '👩‍⚕️',
    color: 'from-cyan-400 to-blue-400',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Orthodontist',
    specialty: 'Braces & Aligners',
    experience: '12 years',
    emoji: '👨‍⚕️',
    color: 'from-blue-400 to-teal-400',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Pediatric Dentist',
    specialty: 'Preventive Care',
    experience: '10 years',
    emoji: '👩‍⚕️',
    color: 'from-teal-400 to-green-400',
  },
  {
    name: 'Dr. James Wilson',
    role: 'Emergency Specialist',
    specialty: 'Emergency Dental Care',
    experience: '14 years',
    emoji: '👨‍⚕️',
    color: 'from-orange-400 to-red-400',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet Our <span className="text-cyan-600">Amazing Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our pediatric dentists are specially trained to make your child's dental experience positive and comfortable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`bg-gradient-to-br ${member.color} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-5xl group-hover:scale-110 transition-transform`}>
                {member.emoji}
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-1">{member.name}</h3>
              <p className="text-cyan-600 font-semibold text-center mb-4">{member.role}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span>{member.specialty}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Star className="w-4 h-4 text-orange-500" />
                  <span>{member.experience} experience</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-12 h-12 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Compassionate Care</h3>
              <p className="text-gray-600">Every team member is dedicated to making your child feel safe and comfortable</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Award className="w-12 h-12 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Certified Experts</h3>
              <p className="text-gray-600">Board-certified pediatric dentists with advanced training in child psychology</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Star className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Always Learning</h3>
              <p className="text-gray-600">Continuous education to provide the latest in pediatric dental care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
