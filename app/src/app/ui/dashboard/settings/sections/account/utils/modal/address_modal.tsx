import React, { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { AddressDetails } from "../definition/address";

const AddressModal = ({ onAddAddress, onClose }: { onAddAddress: (address: AddressDetails) => void; onClose: () => void }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch suggestions from LocationIQ API
  const fetchSuggestions = async (query: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://us1.locationiq.com/v1/autocomplete.php?key=pk.01f4fdbf8ade1ccfe5413fb87648038f&q=${encodeURIComponent(
          query
        )}&format=json`
      );
      const data = await response.json();
      setSuggestions(data || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle address selection
  const handleSelectAddress = (address: any) => {
    setSelectedAddress({
      label: address.display_name,
      line: address.address.road || "",
      city: address.address.city || address.address.town || address.address.village || "",
      state: address.address.state || "",
      country: address.address.country || "",
      postalCode: address.address.postcode || ""
    });
    setSuggestions([]);
  };

  // Add address to list
  const handleAddAddress = () => {
    if (selectedAddress) {
      onAddAddress(selectedAddress);
      setSelectedAddress(null);
      setSearchQuery("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-40 p-10 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Add Address</h2>
        {/* Search Field */}
        <div className="relative mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value.length > 2) fetchSuggestions(e.target.value);
            }}
            placeholder="Search for an address..."
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none"
          />
          <FaSearch className="absolute top-3.5 right-3 text-gray-400" />
        </div>
        {/* Suggestions */}
        {loading && <p className="text-gray-400 text-sm mb-4">Loading suggestions...</p>}
        {suggestions.length > 0 && (
          <ul className="bg-gray-700 rounded-lg overflow-hidden max-h-40 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-3 hover:bg-gray-600 cursor-pointer"
                onClick={() => handleSelectAddress(suggestion)}
              >
                {suggestion.display_name}
              </li>
            ))}
          </ul>
        )}
        {/* Selected Address */}
        {selectedAddress && (
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <p>
              <span className="font-bold">Address:</span> {selectedAddress.line}
            </p>
            <p>
              <span className="font-bold">City:</span> {selectedAddress.city}
            </p>
            <p>
              <span className="font-bold">State:</span> {selectedAddress.state}
            </p>
            <p>
              <span className="font-bold">Country:</span> {selectedAddress.country}
            </p>
            <p>
              <span className="font-bold">Postal Code:</span> {selectedAddress.postalCode}
            </p>
          </div>
        )}
        {/* Actions */}
        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleAddAddress}
            disabled={!selectedAddress}
            className="px-4 py-2 bg-green-500 hover:bg-green-400 rounded-lg text-white"
          >
            <FaPlus className="inline-block mr-2" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddressModal
