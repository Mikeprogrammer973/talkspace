"use client"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection />;
      case 'security':
        return <SecuritySection />;
      case 'notifications':
        return <NotificationsSection />;
      case 'preferences':
        return <PreferencesSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white md:flex">
      {/* Menu Lateral - Visível em telas médias e grandes */}
      <div className="hidden md:block md:w-1/4 h-screen bg-gray-800 p-6">
        <h2 className="text-3xl font-bold mb-6">Settings</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveSection('profile')}
              className={`block text-lg py-2 px-4 rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-indigo-500 ${
                activeSection === 'profile' ? 'bg-gray-700' : ''
              }`}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('security')}
              className={`block text-lg py-2 px-4 rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-indigo-500 ${
                activeSection === 'security' ? 'bg-gray-700' : ''
              }`}
            >
              Security
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('notifications')}
              className={`block text-lg py-2 px-4 rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-indigo-500 ${
                activeSection === 'notifications' ? 'bg-gray-700' : ''
              }`}
            >
              Notifications
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('preferences')}
              className={`block text-lg py-2 px-4 rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-indigo-500 ${
                activeSection === 'preferences' ? 'bg-gray-700' : ''
              }`}
            >
              Preferences
            </button>
          </li>
        </ul>
      </div>

      {/* Menu Superior - Visível em telas pequenas */}
      <div className="md:hidden bg-gray-800 p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Settings</h2>
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          {menuOpen ? <XMarkIcon className='w-6' title='Close menu' /> : <Bars3Icon className='w-6' title='Open menu' />}
        </button>
      </div>
      {/* Dropdown Menu para telas pequenas */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 p-4 space-y-4">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => {
                  setActiveSection('profile');
                  toggleMenu();
                }}
                className={`block text-lg py-2 px-4 rounded-lg hover:bg-gray-600 ${
                  activeSection === 'profile' ? 'bg-gray-600' : ''
                }`}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveSection('security');
                  toggleMenu();
                }}
                className={`block text-lg py-2 px-4 rounded-lg hover:bg-gray-600 ${
                  activeSection === 'security' ? 'bg-gray-600' : ''
                }`}
              >
                Security
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveSection('notifications');
                  toggleMenu();
                }}
                className={`block text-lg py-2 px-4 rounded-lg hover:bg-gray-600 ${
                  activeSection === 'notifications' ? 'bg-gray-600' : ''
                }`}
              >
                Notifications
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveSection('preferences');
                  toggleMenu();
                }}
                className={`block text-lg py-2 px-4 rounded-lg hover:bg-gray-600 ${
                  activeSection === 'preferences' ? 'bg-gray-600' : ''
                }`}
              >
                Preferences
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Conteúdo Principal */}
      <div className="w-full md:w-3/4 p-6">{renderSection()}</div>
    </div>
  );
};

const ProfileSection = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4">Profile</h2>
    {/* Conteúdo da seção Profile */}
  </div>
);

const SecuritySection = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4">Security</h2>
    {/* Conteúdo da seção Security */}
  </div>
);

const NotificationsSection = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
    {/* Conteúdo da seção Notifications */}
  </div>
);

const PreferencesSection = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4">Preferences</h2>
    {/* Conteúdo da seção Preferences */}
  </div>
);

export default SettingsPage;
