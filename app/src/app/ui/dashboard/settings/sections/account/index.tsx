"use client";

import React, { useState } from "react"
import { MdOutlineEmail, MdOutlineSettings, MdPermIdentity } from "react-icons/md"
import EducationList from "./utils/education_list";
import AddressList from "./utils/address_list";
import AddressModal, { Address, AddressDetails } from "./utils/address_modal";
import EducationModal, { Education, EducationDetails } from "./utils/education_modal";


interface Profile {
    id: number
    username: string
    profileImage: string
}

const AccountSection = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [educations, setEducations] = useState<Education[]>([]);

  // Modal states
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);

  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);

  const [isLinkedProfilesModalOpen, setIsLinkedProfilesModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Profile>();
  const [linkedProfiles, setLinkedProfiles] = useState<Profile[]>([
    { id: 1, username: '@john_doe', profileImage: 'https://via.placeholder.com/50' },
    { id: 2, username: '@jane_smith', profileImage: 'https://via.placeholder.com/50' },
  ]);

  const handleOpenProfileModal = (profile: Profile) => {
    setSelectedProfile(profile);
    setIsLinkedProfilesModalOpen(true);
  };

  const handleCloseProfileModal = () => {
    setIsLinkedProfilesModalOpen(false);
    setSelectedProfile(undefined);
  };

  const handleDeleteProfile = () => {
    setLinkedProfiles((prev) => prev.filter((profile) => profile.id !== selectedProfile?.id));
    handleCloseProfileModal();
  };

  const handleSuspendProfile = () => {
    // Handle suspend logic here
    handleCloseProfileModal();
  };

  const handleResetProfile = () => {
    // Handle reset logic here
    handleCloseProfileModal();
  };

  const handleLoginProfile = () => {
    // Handle login logic here
    handleCloseProfileModal();
  };

  const handleAddAddress = (new_address: AddressDetails) => {
    setAddresses((prev) => [...prev, { id: Date.now(), details: new_address }]);
    setIsAddressModalOpen(false);
  };

  const handleRemoveAddress = (id: number) => {
    setAddresses((prev) => prev.filter((address) => address.id !== id));
  }

  const handleAddEducation = (new_education: Education) => {
    setEducations((prev) => [...prev, {...new_education, id: Date.now()}]);
    setIsEducationModalOpen(false);
  };

  const handleRemoveEducation = (id: number) => {
    setEducations((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSaveInfo = () => {
    setName(newName);
    setEmail(newEmail);
    setIsEditingInfo(false);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 rounded-xl">
        <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>

        <div className="space-y-8">
        {/* Personal Info */}
        <div  className="mt-4 border-t-[1px] py-4">
            <h2 className="text-lg font-semibold mb-2 flex gap-3 justify-between items-center">
            Personal Info
            <button
                onClick={() => setIsEditingInfo(true)}
                className="px-4 py-2 text-sm bg-blue-500 rounded-md hover:bg-blue-600"
            >
                Edit Info
            </button>
            </h2>
            <div className="flex gap-4 flex-wrap items-center">
                <div className="bg-gray-700 rounded-lg max-w-full">
                    <h3 className="text-gray-300 p-2 font-light flex gap-2 items-center">
                        <MdPermIdentity size={25} /><span>Name</span>
                    </h3>
                    <p className="p-5 text-center overflow-hidden overflow-ellipsis"> {name} </p>
                </div>
                <div className="bg-gray-700 rounded-lg max-w-full">
                    <h3 className="text-gray-300 p-2 font-light flex gap-2 items-center">
                        <MdOutlineEmail size={25} /><span>Email</span>
                    </h3>
                    <p className="p-5 text-center overflow-hidden overflow-ellipsis"> {email} </p>
                </div>
            </div>
        </div>

        {/* Addresses */}
        <div  className="mt-4 border-t-[1px] py-4">
            <h2 className="text-lg font-semibold mb-4 flex gap-3 justify-between items-center">
            Addresses
            <button
                onClick={() => setIsAddressModalOpen(true)}
                className="px-4 py-2 text-sm bg-blue-500 rounded-md hover:bg-blue-600"
            >
                Add Address
            </button>
            </h2>
            {addresses.length === 0 ? (
            <p>No addresses added.</p>
            ) : (
            <AddressList addresses={addresses} onRemove={handleRemoveAddress} />
            )}
        </div>

        {/* Education */}
        <div  className="mt-4 border-t-[1px] py-4">
            <h2 className="text-lg font-semibold mb-4 flex gap-3 justify-between items-center">
            Education
            <button
                onClick={() => setIsEducationModalOpen(true)}
                className="px-4 py-2 text-sm bg-green-500 rounded-md hover:bg-green-600"
            >
                Add Education
            </button>
            </h2>
            {educations.length === 0 ? (
            <p>No education details added.</p>
            ) : (
            <EducationList educationItems={educations} onRemove={handleRemoveEducation} />
            )}
        </div>
        </div>

        {/* Linked Profiles Section */}
        <div className="mt-4 border-t-[1px] py-4">
            <h2 className="text-lg font-semibold mb-4 flex justify-between items-center">
            Linked Profiles
            </h2>
            <div className="space-y-4">
            {linkedProfiles.map((profile) => (
                <div
                key={profile.id}
                className="flex items-center justify-between gap-3 bg-gray-950 p-4 rounded-md shadow-md"
                >
                <div className="flex items-center space-x-4">
                    <img
                    src={profile.profileImage}
                    alt={profile.username}
                    className="w-12 h-12 rounded-full"
                    />
                    <p className="text-sm text-gray-300 overflow-hidden overflow-ellipsis">{profile.username}</p>
                </div>
                <button
                    onClick={() => handleOpenProfileModal(profile)} title="Manage profile"
                    className="px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600"
                >
                    <MdOutlineSettings size={22} />
                </button>
                </div>
            ))}
            </div>
        </div>

        {/* Linked Profile Modal */}
        {isLinkedProfilesModalOpen && selectedProfile && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h3 className="text-xl font-semibold mb-4">Manage {selectedProfile.username}</h3>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                    <button
                        onClick={handleDeleteProfile}
                        className="w-full py-2 px-4 bg-red-500 rounded-md text-white hover:bg-red-600"
                    >
                        Delete
                    </button>
                    <button
                        onClick={handleSuspendProfile}
                        className="w-full py-2 px-4 bg-yellow-500 rounded-md text-white hover:bg-yellow-600"
                    >
                        Suspend
                    </button>
                    <button
                        onClick={handleResetProfile}
                        className="w-full py-2 px-4 bg-orange-500 rounded-md text-white hover:bg-orange-600"
                    >
                        Reset
                    </button>
                    <button
                        onClick={handleLoginProfile}
                        className="w-full py-2 px-4 bg-green-500 rounded-md text-white hover:bg-green-600"
                    >
                        Log in as {selectedProfile.username}
                    </button>
                </div>
                <div className="mt-8">
                    <button
                        onClick={handleCloseProfileModal}
                        className="w-full py-2 px-4 bg-gray-600 rounded-md text-white hover:bg-gray-700"
                    >
                        Close
                    </button>
                </div>
            </div>
            </div>
        )}


        {/* Edit Info Modal */}
        {isEditingInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-10">
            <div className="bg-gray-800 text-white p-6 rounded-md w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Edit Personal Info</h3>
            <div className="relative">
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Name"
                    className="peer w-full bg-transparent p-2 pl-10 border rounded-md mb-4"
                />
                <MdPermIdentity size={25} className="pointer-events-none absolute left-2 top-1/3 -translate-y-1/2 text-gray-400 peer-focus:text-gray-600"  />
            </div>
            <div className="relative">
                <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="Email"
                    className="peer w-full bg-transparent p-2 pl-10 border rounded-md mb-4"
                />
                <MdOutlineEmail size={25} className="pointer-events-none absolute left-2 top-1/3 -translate-y-1/2 text-gray-400 peer-focus:text-gray-600"  />
            </div>
            <div className="flex justify-end space-x-2">
                <button
                onClick={() => setIsEditingInfo(false)}
                className="px-4 py-2 bg-red-500 rounded-md text-white"
                >
                Cancel
                </button>
                <button
                onClick={handleSaveInfo}
                className="px-4 py-2 bg-blue-500 rounded-md text-white"
                >
                Save
                </button>
            </div>
            </div>
        </div>
        )}

        {/* Address Modal */}
        {isAddressModalOpen && (<AddressModal onAddAddress={handleAddAddress} onClose={()=>setIsAddressModalOpen(false)} />)}
          
        {/* Education Modal */}
        {isEducationModalOpen && ( <EducationModal onAddEducation={handleAddEducation} onClose={()=> setIsEducationModalOpen(false)} /> )}
    </div>
  );
};

export default AccountSection;
