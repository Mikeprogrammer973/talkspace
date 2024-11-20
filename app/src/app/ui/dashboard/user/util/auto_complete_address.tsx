
import React, { useState } from "react";
import axios from "axios";

interface Address {
  id: number;
  address: string;
}

const AddressAutocomplete = () => {
  const [addressInput, setAddressInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [addresses, setAddresses] = useState<Address[]>([]);

  const fetchSuggestions = async (query: string) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get("https://nominatim.openstreetmap.org/search", {
        params: {
          q: query,
          format: "json",
          addressdetails: 1,
          limit: 5,
        },
      });

      const results = response.data;
      setSuggestions(results.map((item: any) => item.display_name));
    } catch (error) {
      console.error("Error fetching address suggestions:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAddressInput(value);
    fetchSuggestions(value);
  };

  const addAddress = (selectedAddress: string) => {
    const newAddress = { id: Date.now(), address: selectedAddress };
    setAddresses((prev) => [...prev, newAddress]);
    setAddressInput("");
    setSuggestions([]);
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Address Autocomplete</h2>
      <div className="relative">
        <input
          type="text"
          value={addressInput}
          onChange={handleInputChange}
          placeholder="Start typing an address..."
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
        />
        {suggestions.length > 0 && (
          <ul className="absolute z-10 bg-white border w-full mt-1 rounded-md shadow-lg">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => addAddress(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium mb-2">Saved Addresses</h3>
        <ul className="space-y-2">
          {addresses.map((addr) => (
            <li
              key={addr.id}
              className="p-2 bg-gray-100 rounded-md border flex justify-between"
            >
              {addr.address}
              <button
                onClick={() =>
                  setAddresses((prev) =>
                    prev.filter((address) => address.id !== addr.id)
                  )
                }
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddressAutocomplete;
