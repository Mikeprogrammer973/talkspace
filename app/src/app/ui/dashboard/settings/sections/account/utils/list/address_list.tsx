import { FaMapMarkerAlt, FaEdit } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Address } from "../modal/address_modal";

const AddressList = ({ addresses, onRemove }: { addresses: Address[]; onRemove: (id: number) => void }) => {
  return (
    <div className="space-y-6">
      {addresses.map((address) => (
        <div
          key={address.id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-950 p-4 rounded-lg shadow-md relative"
        >
          {/* Address Details */}
          <div className="flex items-start space-x-4">
            {/* Icon */}
            <div className="text-green-500 text-2xl">
              <FaMapMarkerAlt />
            </div>

            {/* Details */}
            <div>
              <h3 className="text-lg font-bold text-white">{address.details.label || "Address"}</h3>
              <p className="text-sm text-gray-400">{address.details.line}</p>
              <p className="text-sm text-gray-400">
                {address.details.city}, {address.details.state}, {address.details.country}
              </p>
              {address.details.postalCode && <p className="text-sm text-gray-400">Postal Code: {address.details.postalCode}</p>}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button
              className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
              onClick={() => console.log("Edit address:", address.id)}
              title="Edit"
            >
              <FaEdit className="text-lg" />
              <span className="hidden md:inline">Edit</span>
            </button>
            <button
              onClick={() => onRemove(address.id)}
              className="text-red-500 hover:text-red-700"
              title="Remove"
            >
              <MdClose className="text-xl" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AddressList