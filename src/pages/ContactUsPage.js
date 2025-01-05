import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-serif text-gray-800 text-center mb-2">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          We'd love to hear from you
        </p>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Contact Form */}
            <div className="md:w-1/2 p-10">
              <form onSubmit={handleSubmit}>
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm 
                               focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 
                               transition-all duration-200 bg-gray-50 hover:bg-gray-100 
                               focus:bg-white text-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="block w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm 
                               focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 
                               transition-all duration-200 bg-gray-50 hover:bg-gray-100 
                               focus:bg-white text-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="block w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm 
                               focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 
                               transition-all duration-200 bg-gray-50 hover:bg-gray-100 
                               focus:bg-white text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      className="block w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm 
                               focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 
                               transition-all duration-200 bg-gray-50 hover:bg-gray-100 
                               focus:bg-white text-gray-800 resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center bg-yellow-500 text-white px-8 py-4 
                             rounded-lg hover:bg-yellow-600 transition-colors shadow-md hover:shadow-lg
                             transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Divider */}
            <div className="hidden md:flex items-center justify-center px-8">
              <div className="h-full w-px bg-gray-200"></div>
              <div className="absolute bg-white px-6 py-2 text-gray-500 font-medium rounded-full shadow-sm">
                or
              </div>
            </div>

            {/* Contact Information */}
            <div className="md:w-1/2 bg-gray-50 p-10">
              <h2 className="text-2xl font-serif text-gray-800 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <Mail className="w-6 h-6 text-yellow-500 mt-1 group-hover:scale-110 transition-transform" />
                  <div className="ml-6">
                    <p className="font-medium text-gray-800 mb-1">Email</p>
                    <p className="text-gray-600">ksb1307bk@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <Phone className="w-6 h-6 text-yellow-500 mt-1 group-hover:scale-110 transition-transform" />
                  <div className="ml-6">
                    <p className="font-medium text-gray-800 mb-1">Phone</p>
                    <p className="text-gray-600">+91 97190 05113</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <MapPin className="w-6 h-6 text-yellow-500 mt-1 group-hover:scale-110 transition-transform" />
                  <div className="ml-6">
                    <p className="font-medium text-gray-800 mb-1">Address</p>
                    <p className="text-gray-600">
                      MPHF Rtn. Kaushlendra Bhadauria, Advocate Charter <br />
                      President, Rotary Club Puranpur Royals, RID 3110 District <br />
                      Unpaid Secretary, Indian Red Cross Society, Pilibhit
                      Branch, UP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
