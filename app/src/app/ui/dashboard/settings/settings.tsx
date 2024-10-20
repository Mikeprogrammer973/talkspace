"use client"
import React, { useState, forwardRef, useRef } from 'react';
import { Transition } from '@headlessui/react';
import NotificationsSection from './sections/notification';
import PreferencesSection from './sections/preference';
import ProfileSection from './sections/profile';
import SecuritySection from './sections/security';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import FeedbackSection from './sections/feedback';

const SettingsPage = ({user_}: {user_: any}) => {
  const [activeSection, setActiveSection] = useState('profile');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection user={user_} />;
      case 'security':
        return <SecuritySection />;
      case 'notifications':
        return <NotificationsSection />;
      case 'preferences':
        return <PreferencesSection />;
      case "feedback":
        return <FeedbackSection />
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white md:flex">
      {/* Menu Lateral para telas médias e grandes */}
      <div className="md:w-1/4 hidden md:block fixed bg-gray-900 p-6 h-screen">
        <h2 className="text-3xl font-bold mb-6">Settings</h2>
        <ul className="space-y-4">
          {['profile', 'security', 'notifications', 'preferences', "feedback"].map((section) => (
            <li key={section}>
              <button
                onClick={() => setActiveSection(section)}
                className={`block w-full text-left text-lg p-2 overflow-hidden overflow-ellipsis rounded-lg transition-colors duration-300 hover:bg-gray-700 ${
                  activeSection === section ? 'bg-gray-700' : ''
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu superior em telas pequenas */}
      <div className="md:hidden w-full sticky top-0 z-20 bg-gray-900 p-4 flex justify-between items-center py-5">
        <h2 className="text-xl font-bold">Settings</h2>
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          {menuOpen ? <XMarkIcon title='Close' fill='currentColor' className='w-6' /> : <Bars3Icon title='Menu' className='w-6' />}
        </button>
      </div>

      {/* Dropdown animado para menu em telas pequenas */}
      <Transition
        show={menuOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-y-full opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="-translate-y-full opacity-0"
      >
        {/* Envolva o conteúdo do Transition em uma div e passe o ref */}
        <DropdownMenu
          className="md:hidden w-full absolute top-[9rem] z-30 bg-gray-950 p-4"
          onClose={toggleMenu}
        >
          <ul className="space-y-4">
            {['profile', 'security', 'notifications', 'preferences', "feedback"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => {
                    setActiveSection(section);
                    toggleMenu();
                  }}
                  className={`block w-full text-left text-lg p-2 overflow-hidden overflow-ellipsis rounded-lg transition-colors duration-300 hover:bg-gray-700 ${
                    activeSection === section ? 'bg-gray-600' : ''
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </DropdownMenu>
      </Transition>

      {/* Conteúdo principal */}
      <div className="md:w-3/4 md:ml-[30%] w-full p-6 transition-all duration-300 ease-in-out">
        <Transition
          appear={true}
          show={true}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          {/* Envolva o conteúdo do Transition em uma div e passe o ref */}
          <div className="transition-content">{renderSection()}</div>
        </Transition>
      </div>
    </div>
  );
};

// Ajuste no componente DropdownMenu para aceitar `props` corretamente
const DropdownMenu = forwardRef<HTMLDivElement, { className?: string; children: React.ReactNode; onClose: () => void }>(
  ({ className, children, onClose }, ref) => (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
);
export default SettingsPage;
