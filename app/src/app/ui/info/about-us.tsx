
import React from 'react';
import { FaRocket, FaUsers, FaHandsHelping, FaBullseye } from 'react-icons/fa';

export default function AboutUs(){
  return (
    <div className="bg-gray-900 text-white px-6 py-10 lg:px-24 lg:py-20 space-y-16">
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10 animate-fadeIn">About Us</h1>

      {/* Introdução */}
      <section className="text-center space-y-4">
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Welcome to TalkSpace, a social platform dedicated to fostering connections and meaningful conversations.
          Our goal is to bring people together in a safe, supportive environment.
        </p>
      </section>

      {/* Missão e Visão */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-lg p-6 space-y-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className='flex gap-3 flex-wrap items-center'>
              <FaRocket className="text-yellow-400 text-4xl" />
              <h2 className="text-2xl font-semibold">Our Mission</h2>
          </div>
          <p className="text-gray-300">
            To connect people from around the world and empower them to share ideas, foster friendships, and create a supportive community.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 space-y-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className='flex gap-3 flex-wrap items-center'>
              <FaBullseye className="text-red-400 text-4xl" />
              <h2 className="text-2xl font-semibold">Our Vision</h2>
          </div>
          <p className="text-gray-300">
            We envision a world where everyone can connect without barriers, share knowledge, and support each other.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800 rounded-lg p-6 space-y-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaUsers className="text-green-400 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold">Community</h3>
            <p className="text-gray-300">Creating an inclusive space where everyone feels valued.</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 space-y-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaHandsHelping className="text-blue-400 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold">Support</h3>
            <p className="text-gray-300">Offering a safe and supportive environment for everyone.</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 space-y-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaRocket className="text-purple-400 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold">Innovation</h3>
            <p className="text-gray-300">Continuously improving to enhance our users’ experience.</p>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800 rounded-lg p-6 space-y-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-24 h-24 rounded-full bg-gray-600 border-2 border-green-600 mx-auto" />
            <h3 className="text-xl font-semibold">Alex Johnson</h3>
            <p className="text-gray-400">CEO & Co-Founder</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 space-y-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-24 h-24 rounded-full bg-gray-600 border-2 border-orange-600 mx-auto" />
            <h3 className="text-xl font-semibold">Sophia Lee</h3>
            <p className="text-gray-400">Head of Product</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 space-y-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-24 h-24 rounded-full bg-gray-600 border-2 border-purple-600 mx-auto" />
            <h3 className="text-xl font-semibold">Michael Brown</h3>
            <p className="text-gray-400">Lead Engineer</p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400 mb-6">Have questions? Feel free to reach out to us.</p>
        <a href="mailto:contact@talkspace.com" className="inline-block bg-blue-500 px-6 py-2 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-colors">
          Contact Us
        </a>
      </section>

      <footer className="text-center text-gray-500 text-sm mt-12">
        <p>© {new Date().getFullYear()} TalkSpace. All rights reserved.</p>
      </footer>
    </div>
  );
};

