import React from 'react';
import { Calendar, Users, Heart, ArrowRight, Award, Star, Cross } from 'lucide-react';
import singh from '../assets/singh.jpg';

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="min-h-screen bg-white shadow-lg flex items-center">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-800 text-center mb-6">
            Welcome to the <span className='text-yellow-500'>Rotary Club</span>
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Serving humanity through fellowship and impactful community projects since 1905.
          </p>
        </div>
      </div>

      {/* About Kaushlendra Sir Section */}
      <div className="min-h-screen flex items-center bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-gray-800 mb-6">
                Meet Rtn. Kaushlendra
              </h2>
              <div className="prose text-gray-600 max-w-none">
                <p className="text-lg leading-relaxed">
                  Rtn. Kaushlendra is a distinguished leader and visionary in our community, 
                  known for his dedication to humanitarian causes and exceptional service.
                </p>
                <p className="text-lg leading-relaxed">
                  With years of experience in both medical practice and community service,
                  he has been instrumental in bringing positive change to countless lives.
                </p>
              </div>
            </div>
            <div className=" rounded-xl h-96 flex items-center justify-center">
              <img
                src={singh}
                alt="Rtn. Kaushlendra"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Charter President Section */}
      <div className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <div className="flex flex-col items-center mb-8">
              <Star className="w-16 h-16 text-yellow-500 mb-4" />
              <h2 className="text-4xl font-serif text-gray-800 text-center">
                Charter President
              </h2>
              <h3 className="text-2xl text-gray-600 mt-2">
                Rotary Club of Puranpur Royals
              </h3>
            </div>
            <div className="prose max-w-none text-center">
              <p className="text-lg text-gray-600 leading-relaxed">
                As the Charter President of the Rotary Club of Puranpur Royals,
                Rtn. Kaushlendra has established a foundation of excellence and service.
                Under his leadership, the club has initiated numerous successful community
                projects and built strong partnerships for sustainable impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Indian Red Cross Society Section */}
      <div className="min-h-screen flex items-center bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                <Cross className="w-24 h-24 text-red-500" />
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl font-serif text-gray-800 mb-6">
                Indian Red Cross Society
              </h2>
              <div className="prose text-gray-600 max-w-none">
                <p className="text-lg leading-relaxed">
                  The Indian Red Cross Society plays a vital role in humanitarian assistance
                  across the nation. Through our partnership and dedication, we continue to
                  serve those in need during times of crisis and natural disasters.
                </p>
                <p className="text-lg leading-relaxed">
                  Our local chapter, under the guidance of our leadership, has been at the
                  forefront of numerous humanitarian initiatives and emergency response efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Calendar className="w-12 h-12 text-yellow-500 mb-4" />
              <h2 className="text-2xl font-serif text-gray-800 mb-4">Upcoming Events</h2>
              <p className="text-gray-600 mb-6">
                Join our weekly meetings and special events dedicated to community service.
              </p>
              <button className="flex items-center text-yellow-500 hover:text-yellow-600 transition-colors">
                View Calendar <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-yellow-500 mb-4" />
              <h2 className="text-2xl font-serif text-gray-800 mb-4">Our Members</h2>
              <p className="text-gray-600 mb-6">
                Connect with passionate individuals committed to making a difference.
              </p>
              <button className="flex items-center text-yellow-500 hover:text-yellow-600 transition-colors">
                Meet the Team <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Heart className="w-12 h-12 text-yellow-500 mb-4" />
              <h2 className="text-2xl font-serif text-gray-800 mb-4">Get Involved</h2>
              <p className="text-gray-600 mb-6">
                Discover opportunities to contribute and make a lasting impact.
              </p>
              <button className="flex items-center text-yellow-500 hover:text-yellow-600 transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="min-h-screen flex items-center bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-serif text-gray-800 mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Together, we can create lasting change in our communities and around the world.
          </p>
          <button className="px-8 py-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all">
            Become a Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
