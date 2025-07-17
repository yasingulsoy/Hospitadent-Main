import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const About = () => {

  return (
    <>
      <Helmet>
        <title>About Us - Hospitadent</title>
        <meta name="description" content="Learn about Hospitadent's journey, mission, and commitment to providing world-class dental care services." />
        <meta property="og:title" content="About Us - Hospitadent" />
        <meta property="og:description" content="Learn about Hospitadent's journey, mission, and commitment to providing world-class dental care services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hospitadent.com/en/about" />
        <link rel="canonical" href="https://hospitadent.com/en/about" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#004876] to-[#2bb3ea] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">About Hospitadent</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Leading the way in dental care with innovation, expertise, and patient-centered approach
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#004876] mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Founded with a vision to revolutionize dental care, Hospitadent has grown from a single clinic to a network of state-of-the-art dental centers across Turkey and Europe.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our commitment to excellence, cutting-edge technology, and personalized care has made us the preferred choice for thousands of patients seeking quality dental treatment.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#004876]">25+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#004876]">50+</div>
                    <div className="text-gray-600">Clinics</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-xl">About Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#004876] mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To provide exceptional dental care that enhances the quality of life for our patients through innovative treatments, advanced technology, and compassionate care.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#004876] mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be the leading dental care provider in Europe, setting standards for excellence in patient care, technology, and innovation in dentistry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#004876] mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#004876] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004876] mb-2">Excellence</h3>
                <p className="text-gray-700">We strive for excellence in every aspect of our service</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#004876] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004876] mb-2">Compassion</h3>
                <p className="text-gray-700">We care for our patients with empathy and understanding</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#004876] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004876] mb-2">Innovation</h3>
                <p className="text-gray-700">We embrace the latest technology and techniques</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About; 