
export default function FeedbackSection() {
    return <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Feedback and Support</h2>
      
      <p className="text-sm text-gray-400 mb-2">We value your feedback. Please let us know your thoughts!</p>
      
      {/* Category Selection */}
      <div className="mb-4">
        <label htmlFor="feedback-category" className="text-sm text-gray-300">Select Feedback Category:</label>
        <select
          id="feedback-category"
          className="form-select bg-gray-700 text-white border border-gray-600 rounded-lg w-full p-2 mt-1"
        >
          <option value="">--Choose a category--</option>
          <option value="bug">Bug Report</option>
          <option value="feature">Feature Request</option>
          <option value="general">General Feedback</option>
        </select>
      </div>
  
      {/* Feedback Textarea */}
      <textarea
        className="form-textarea bg-gray-700 text-white border border-gray-600 rounded-lg w-full p-2 mb-4"
        rows={5}
        placeholder="Share your feedback or report an issue..."
      />
      
      {/* Attachment Option */}
      <div className="mb-4">
        <label htmlFor="feedback-attachment" className="text-sm text-gray-300">Attach a file (optional):</label>
        <input
          type="file"
          id="feedback-attachment"
          className="block w-full text-sm text-gray-300 bg-gray-700 border border-gray-600 rounded-lg mt-1 p-1"
        />
      </div>
  
      {/* Submit Button */}
      <button className="bg-indigo-600 w-full sm:w-auto text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200">
        Submit Feedback
      </button>
  
      {/* FAQ Section */}
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-300">Frequently Asked Questions</h3>
        <ul className="mt-2 space-y-2">
          <li className="text-sm text-gray-400">Q: How do I report a bug?</li>
          <li className="text-sm text-gray-400">A: You can select "Bug Report" as the category above and provide details.</li>
          
          <li className="text-sm text-gray-400">Q: Can I suggest a feature?</li>
          <li className="text-sm text-gray-400">A: Yes! Choose "Feature Request" to let us know your ideas.</li>
        </ul>
      </div>
    </div>
}
  