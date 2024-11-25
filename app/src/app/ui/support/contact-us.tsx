import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-900 text-white p-6 lg:p-20 space-y-16">
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10 animate-fadeIn">Contact Us</h1>
      <p className="text-gray-400 text-center text-lg max-w-3xl mx-auto mb-10">
        Have questions or feedback? We’d love to hear from you! Reach out to us using the form below or via our contact information.
      </p>

      {/* Formulário de Contato */}
      <section className="space-y-8">
        <form className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-1 space-y-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-400">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="md:col-span-1 space-y-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-400">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="md:col-span-2 space-y-4">
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-400">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the subject"
              required
            />
          </div>

          <div className="md:col-span-2 space-y-4">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-blue-500 text-lg w-full sm:w-auto font-semibold py-3 px-8 rounded-lg hover:bg-blue-400 transition-colors focus:ring-4 focus:ring-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Informações de Contato */}
      <section className="grid gap-6 md:grid-cols-3 text-center md:text-left">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Our Location</h3>
          <p className="text-gray-400">9199 Rue Airlie, Lasalle, QC, Canada</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Contact Information</h3>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
          <p className="text-gray-400">Email: support@talkspace.com</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-400">Facebook</a>
            <a href="#" className="text-blue-500 hover:text-blue-400">Twitter</a>
            <a href="#" className="text-blue-500 hover:text-blue-400">Instagram</a>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="mt-16">
        <h3 className="text-2xl font-semibold text-center mb-6">Find Us Here</h3>
        <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.975280768669!2d-73.61413022423069!3d45.429075679100314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9368d236c9cf9%3A0xcdbff1441b63ea1d!2s9199%20Rue%20Airlie%2C%20LaSalle%2C%20QC%20H8R%202A4%2C%20Canada!5e0!3m2!1sen!2sus!4v1697839843756!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen={false}
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
