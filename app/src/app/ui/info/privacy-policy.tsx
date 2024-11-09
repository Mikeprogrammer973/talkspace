import { FaShieldAlt, FaUserLock, FaEye, FaSyncAlt, FaChild, FaEnvelope } from 'react-icons/fa'

export default function PrivacyPolicy()
{
    return (
        <div className="bg-gray-900 text-white px-6 py-10 lg:px-24 lg:py-20 max-w-5xl mx-auto space-y-10 animate-fadeIn">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-center animate-slideIn">Privacy Policy</h1>
          <p className="mb-8 text-gray-300 text-center text-lg max-w-3xl mx-auto">
            At TalkSpace, we are committed to safeguarding your privacy. This policy outlines our data practices, including what we collect, how we use it, and your rights.
          </p>
    
          <section className="space-y-8">
            <div className="relative overflow-hidden border border-gray-700 bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 flex gap-3 flex-wrap items-center">
                <FaUserLock className="text-gray-500 opacity-50 hidden sm:flex" size={36} /> 
                Information We Collect
              </h2>
              <p className="text-gray-400 mb-2">We collect the following types of information:</p>
              <ul className="space-y-2 text-gray-300">
                <li>📄 <span className="font-semibold">Account Information:</span> name, email, username, profile picture, and password.</li>
                <li>📊 <span className="font-semibold">Activity Data:</span> posts, comments, and interactions on our platform.</li>
                <li>📱 <span className="font-semibold">Device and Log Data:</span> IP address, browser type, and usage logs.</li>
                <li>🍪 <span className="font-semibold">Cookies:</span> to improve user experience.</li>
              </ul>
            </div>
    
            <div className="relative overflow-hidden border border-gray-700 bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 flex gap-3 flex-wrap items-center">
                    <FaEye className="text-gray-500 opacity-50 hidden sm:flex" size={36} />
                    How We Use Your Information
                </h2>
              <p className="text-gray-400 mb-2">We use your data for:</p>
              <ul className="space-y-2 text-gray-300">
                <li>🎨 To personalize and improve your experience.</li>
                <li>🔔 To send notifications and manage your account.</li>
                <li>🛡️ To ensure security and monitor usage.</li>
                <li>📈 To analyze trends and improve our platform.</li>
              </ul>
            </div>
    
            <div className="relative overflow-hidden border border-gray-700 bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 flex gap-3 flex-wrap items-center">
                    <FaShieldAlt className="text-gray-500 opacity-50 hidden sm:flex" size={36} />
                    Data Sharing and Disclosure
                </h2>
              <p className="text-gray-400 mb-2">We may share data with:</p>
              <ul className="space-y-2 text-gray-300">
                <li>🔒 <span className="font-semibold">With Your Consent:</span> for specific sharing purposes.</li>
                <li>🔧 <span className="font-semibold">Service Providers:</span> trusted third parties like payment processors.</li>
                <li>⚖️ <span className="font-semibold">Legal Obligations:</span> when required by law.</li>
              </ul>
            </div>
    
            <div className="relative overflow-hidden border border-gray-700 bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 flex gap-3 flex-wrap items-center">
                <FaSyncAlt className="text-gray-500 opacity-50 hidden sm:flex" size={36} />
                Data Security
              </h2>
              <p className="text-gray-300">
                We use industry-standard measures to secure your data. Although no system is entirely secure, we will promptly inform you in the event of a data breach.
              </p>
            </div>
    
            <div className="relative overflow-hidden border border-gray-700 bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 flex gap-3 flex-wrap items-center">
                <FaChild className="text-gray-500 opacity-50 hidden sm:flex" size={36} />
                Children’s Privacy
              </h2>
              <p className="text-gray-300">
                Our platform is not intended for children under 13. If data is collected without parental consent, we will delete it.
              </p>
            </div>
    
            <div className="relative overflow-hidden border border-gray-700 bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 flex gap-3 flex-wrap items-center">
                <FaEnvelope className="text-gray-500 opacity-50 hidden sm:flex" size={36} />
                Contact Us
              </h2>
              <p className="text-gray-300">
                For questions about this policy, reach us at <a href="mailto:privacy@talkspace.com" className="text-blue-400 hover:text-blue-300 underline">privacy@talkspace.com</a>.
              </p>
            </div>
          </section>
    
          <footer className="text-center text-gray-500 text-sm mt-12">
            <p>© {new Date().getFullYear()} TalkSpace. All rights reserved.</p>
          </footer>
        </div>
    )
}