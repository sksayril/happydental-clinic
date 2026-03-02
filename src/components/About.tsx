import { Heart, Users, Award, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-cyan-600">HAPPY KIDS</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 2010, HAPPY KIDS Children Dental Hospital has been dedicated to providing exceptional dental care for children in a warm, welcoming environment. We believe that positive early dental experiences create a foundation for lifelong oral health.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is simple: make every child feel comfortable, safe, and happy during their dental visit. With our kid-friendly approach, colorful clinic, and caring staff, we transform dental anxiety into dental excitement!
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Heart className="w-10 h-10 text-pink-500 mb-3" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Caring</h3>
                <p className="text-gray-600">Compassionate care for every child</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Users className="w-10 h-10 text-blue-500 mb-3" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Family</h3>
                <p className="text-gray-600">Treating you like family</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Award className="w-10 h-10 text-yellow-500 mb-3" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Excellence</h3>
                <p className="text-gray-600">Award-winning dental care</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Star className="w-10 h-10 text-orange-500 mb-3" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Quality</h3>
                <p className="text-gray-600">Top-rated by parents</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-cyan-600 mb-6">Our Promise</h3>
                <ul className="space-y-4">
                  {[
                    'Pain-free, gentle dental procedures',
                    'Child-focused environment and equipment',
                    'Parents welcome in treatment rooms',
                    'Flexible scheduling for busy families',
                    'Education on proper oral hygiene',
                    'Making dental visits fun and rewarding',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full p-1 mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-pink-400 text-5xl w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
              🎨
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-5xl w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
              🌟
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
