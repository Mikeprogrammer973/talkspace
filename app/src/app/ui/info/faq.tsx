"use client"
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQ(){
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'To create an account, click on the Sign Up button at the top of the homepage and fill in the required details. After submitting, you’ll receive a confirmation email to verify your account.',
    },
    {
      question: 'Is my data secure on TalkSpace?',
      answer: 'Yes, we use industry-standard security measures to protect your data. All information is encrypted and stored securely, ensuring privacy and safety.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'Click on “Forgot Password” on the login page, enter your email, and we’ll send you a link to reset your password.',
    },
    {
      question: 'How can I deactivate my account?',
      answer: 'You can deactivate your account by going to the Account Settings > Security section. From there, you’ll find an option to temporarily deactivate or permanently delete your account.',
    },
    {
      question: 'Can I change my username?',
      answer: 'Yes, you can change your username by going to Profile Settings and selecting Edit Profile. Remember that your new username should follow our community guidelines.',
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-6 lg:p-20">
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10 animate-fadeIn">Frequently Asked Questions</h1>
      <p className="text-gray-400 text-center mb-10 text-lg">
        Here you’ll find answers to the most common questions about TalkSpace.
      </p>
      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg shadow-lg overflow-hidden transition duration-200"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex justify-between items-center p-4 bg-gray-800 text-lg font-semibold hover:bg-gray-700"
            >
              <span>{faq.question}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
              />
            </button>
            <div
              className={`transition-all overflow-hidden duration-300 ${
                openIndex === index ? 'max-h-96 p-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
