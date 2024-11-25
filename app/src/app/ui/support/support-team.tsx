
import React from 'react';

const supportTeam = [
  {
    name: 'Jane Doe',
    role: 'Support Specialist',
    email: 'jane.doe@example.com',
    phone: '+1 (123) 456-7890',
    description: 'Jane specializes in handling technical issues with a calm approach and extensive experience in troubleshooting.',
    img: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Smith',
    role: 'Customer Care Manager',
    email: 'john.smith@example.com',
    phone: '+1 (987) 654-3210',
    description: 'John is known for his exceptional communication skills and dedication to ensuring customer satisfaction.',
    img: 'https://via.placeholder.com/150',
  },
  {
    name: 'Emily Carter',
    role: 'Technical Support Engineer',
    email: 'emily.carter@example.com',
    phone: '+1 (555) 123-4567',
    description: 'Emily has a strong background in software engineering and assists with complex technical issues.',
    img: 'https://via.placeholder.com/150',
  },
];

const SupportTeam = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-8">
      <h1 className="text-4xl lg:text-5xl font-bold text-center text-blue-400 mb-12">Our Support Team</h1>
      <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
        We are here to help! Our dedicated support team is available to assist you with any questions or concerns you may have.
      </p>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
        {supportTeam.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <img
              src={member.img}
              alt={`${member.name} profile`}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-400"
            />
            <h2 className="text-2xl font-semibold text-center text-white mb-1">{member.name}</h2>
            <p className="text-center text-blue-400 text-sm">{member.role}</p>
            <div className="mt-4 text-center">
              <p className="text-gray-400 mb-2">{member.description}</p>
              <p className="text-gray-500"><strong>Email:</strong> <a href={`mailto:${member.email}`} className="text-blue-400">{member.email}</a></p>
              <p className="text-gray-500"><strong>Phone:</strong> <a href={`tel:${member.phone}`} className="text-blue-400">{member.phone}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportTeam;
