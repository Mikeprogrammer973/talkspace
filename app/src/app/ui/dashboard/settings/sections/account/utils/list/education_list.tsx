import { FaGraduationCap, FaCalendarAlt, FaRegCommentDots } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { Education } from "../definition/education";

const EducationList = ({ educationItems, onRemove }: { educationItems: Education[]; onRemove: (id: number) => void }) => {
  return (
    <div className="space-y-6">
      {educationItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-950 p-4 rounded-lg shadow-md relative"
        >
          {/* Content */}
          <div className="flex items-start space-x-4">
            {/* Icon */}
            <div className="text-blue-500 text-2xl">
              <FaGraduationCap />
            </div>

            {/* Details */}
            <div>
              <h3 className="text-lg font-bold text-white">{item.details.title}</h3>
              <p className="text-sm text-gray-400 flex items-center">
                <FaCalendarAlt className="mr-2" /> {item.details.startDate} - {item.details.endDate || "Present"}
              </p>
              <p className="text-sm text-gray-400 flex items-center">
                <FaRegCommentDots className="mr-2" /> {item.details.comments || "No comments"}
              </p>
              <p className="mt-1 text-sm text-gray-300">Status: {item.details.status}</p>
            </div>
          </div>

          {/* Actions */}
          <button
            onClick={() => onRemove(item.id)} title="Manage"
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          >
            <MdOutlineSettings className="text-xl" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default EducationList