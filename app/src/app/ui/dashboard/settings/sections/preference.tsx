
export default function PreferencesSection() {
    return <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300">
    <h2 className="text-2xl font-semibold mb-4">Preferences</h2>

    {/* Idioma */}
    <div className="space-y-4 mb-8">
        <h4 className="text-lg font-medium">Language</h4>
        <select className="form-select bg-gray-700 text-white border border-gray-600 rounded-lg w-full p-2">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
        </select>
    </div>

    {/* Região */}
    <div className="space-y-4 mb-8">
        <h4 className="text-lg font-medium">Region Format</h4>
        <select className="form-select bg-gray-700 text-white border border-gray-600 rounded-lg w-full p-2">
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="de">Germany</option>
        </select>
    </div>

    {/* Tema */}
    <div className="space-y-4 mb-8">
      <h3 className="text-lg font-medium">Theme</h3>
      <p className="text-sm text-gray-400">Choose between light and dark mode.</p>
      <div className="flex space-x-4">
        <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg focus:outline-none">Dark Mode</button>
        <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg focus:outline-none">Light Mode</button>
      </div>
    </div>

    {/* Acessibilidade */}
    <div className="space-y-4 mb-8">
      <h3 className="text-lg font-medium">Accessibility</h3>
      <p className="text-sm text-gray-400">Customize your accessibility settings.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">High Contrast</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Text to Speech</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Enable Animations</span>
        </label>
      </div>
    </div>

    {/* Tamanho da Fonte */}
    <div className="space-y-4 mb-8">
      <h3 className="text-lg font-medium">Font Size</h3>
      <p className="text-sm text-gray-400">Adjust the font size for better readability.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button className="bg-gray-700 text-white py-2 px-4 rounded-lg focus:outline-none">Small</button>
        <button className="bg-gray-700 text-white py-2 px-4 rounded-lg focus:outline-none">Medium</button>
        <button className="bg-gray-700 text-white py-2 px-4 rounded-lg focus:outline-none">Large</button>
      </div>
    </div>

    {/* Preferências de Conteúdo */}
    <div className="space-y-4 mb-8">
      <h3 className="text-lg font-medium">Content Preferences</h3>
      <p className="text-sm text-gray-400">Customize your content preferences.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Show Adult Content</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Show Trending Topics</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Show Personalised Ads</span>
        </label>
      </div>
    </div>

    {/* Privacidade */}
    <div className="space-y-4 mb-8">
        <h3 className="text-lg font-medium">Privacy Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex items-center text-sm">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
            <span className="ml-2 text-white">Make Profile Private</span>
        </label>
        <label className="flex items-center text-sm">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
            <span className="ml-2 text-white">Hide Recent Activity</span>
        </label>
        </div>
    </div>
  </div>
}