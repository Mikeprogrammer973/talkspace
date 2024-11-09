"use client"
import React, { useState } from 'react';
import { FiFileText, FiSend, FiAlertCircle, FiUpload } from 'react-icons/fi';

const ReportBug = () => {
  const [bugDetails, setBugDetails] = useState('');
  const [stepsToReproduce, setStepsToReproduce] = useState('');
  const [expectedOutcome, setExpectedOutcome] = useState('');
  const [actualOutcome, setActualOutcome] = useState('');
  const [attachment, setAttachment] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Bug report submitted successfully!');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachment(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-8 flex justify-center">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-5xl font-bold text-center text-red-500 mb-10">Report a Bug</h1>
        <p className="text-center text-gray-400 mb-8">
          Encountered a bug? Let us know the details, and our team will work to resolve it promptly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Bug Details Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transform hover:scale-105 transition duration-200">
            <div className="flex items-center mb-4">
              <FiAlertCircle className="text-red-400 text-2xl mr-3" />
              <h2 className="text-xl font-semibold">Bug Details</h2>
            </div>
            <textarea
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Describe the bug you encountered"
              rows={4}
              value={bugDetails}
              onChange={(e) => setBugDetails(e.target.value)}
              required
            />
          </div>

          {/* Steps to Reproduce Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transform hover:scale-105 transition duration-200">
            <div className="flex items-center mb-4">
              <FiFileText className="text-blue-400 text-2xl mr-3" />
              <h2 className="text-xl font-semibold">Steps to Reproduce</h2>
            </div>
            <textarea
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="List the steps to reproduce the bug"
              rows={4}
              value={stepsToReproduce}
              onChange={(e) => setStepsToReproduce(e.target.value)}
              required
            />
          </div>

          {/* Expected Outcome Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transform hover:scale-105 transition duration-200">
            <div className="flex items-center mb-4">
              <FiFileText className="text-green-400 text-2xl mr-3" />
              <h2 className="text-xl font-semibold">Expected Outcome</h2>
            </div>
            <textarea
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="What was supposed to happen?"
              rows={2}
              value={expectedOutcome}
              onChange={(e) => setExpectedOutcome(e.target.value)}
              required
            />
          </div>

          {/* Actual Outcome Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transform hover:scale-105 transition duration-200">
            <div className="flex items-center mb-4">
              <FiFileText className="text-yellow-400 text-2xl mr-3" />
              <h2 className="text-xl font-semibold">Actual Outcome</h2>
            </div>
            <textarea
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="What actually happened?"
              rows={2}
              value={actualOutcome}
              onChange={(e) => setActualOutcome(e.target.value)}
              required
            />
          </div>

          {/* Attachment Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transform hover:scale-105 transition duration-200">
            <div className="flex items-center mb-4">
              <FiUpload className="text-purple-400 text-2xl mr-3" />
              <h2 className="text-xl font-semibold">Attachment (optional)</h2>
            </div>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {attachment && <p className="text-gray-500 mt-2">{attachment.name}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-lg font-semibold rounded-lg hover:bg-red-600 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-red-700"
          >
            <FiSend className="inline mr-2" /> Submit Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportBug;
