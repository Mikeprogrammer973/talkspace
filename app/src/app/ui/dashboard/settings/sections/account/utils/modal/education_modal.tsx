import { useState } from "react";
import { studyTypes, acquiredTitles, studyStatuses } from "../data/education"
import { Education } from "../definition/education";

const EducationModal = ({ onAddEducation, onClose }: { onAddEducation: (education: Education) => void; onClose: () => void }) => {
    const [newEducation, setNewEducation] = useState<Education>({
        id: 0,
        details: {type: studyTypes[0],
        title: acquiredTitles[0],
        startDate: "",
        endDate: "",
        status: studyStatuses[0],
        comments: ""}
    });

    const handleAddEducation = ()=>{
        onAddEducation(newEducation)
        setNewEducation({ id: 0, details: {type: studyTypes[0], title: acquiredTitles[0], startDate: "", endDate: "", status: studyStatuses[0], comments: "" }});
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-10">
            <div className="bg-gray-800 text-white p-6 rounded-md w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Add Education</h3>
            <select multiple={false} onChange={(e) => setNewEducation({ ...newEducation, details: {...newEducation.details, type: e.target.selectedOptions[0].value} })} title="Type" className="w-full p-2 bg-transparent border rounded-md mb-4">
                {studyTypes.map((type, i) =>{
                    return <option className="bg-gray-900" key={i} value={type} > { type } </option>
                })}
            </select>
            <select multiple={false} onChange={(e) => setNewEducation({ ...newEducation, details: {...newEducation.details, title: e.target.selectedOptions[0].value} })} title="Title" className="w-full p-2 bg-transparent border rounded-md mb-4">
                {acquiredTitles.map((title, i) =>{
                    return <option className="bg-gray-900" key={i} value={title} > { title } </option>
                })}
            </select>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-3">
                <input
                    type="date"
                    value={newEducation.details.startDate}
                    onChange={(e) => setNewEducation({ ...newEducation, details: {...newEducation.details, startDate: e.target.value} })}
                    className="w-full p-2 bg-transparent border rounded-md mb-4"
                    title="Start date"
                />
                <input
                    type="date"
                    value={newEducation.details.endDate}
                    onChange={(e) => setNewEducation({ ...newEducation, details: {...newEducation.details, endDate: e.target.value} })}
                    className="w-full p-2 bg-transparent border rounded-md mb-4"
                    title="End date"
                />
            </div>
            <select multiple={false} onChange={(e) => setNewEducation({ ...newEducation, details: {...newEducation.details, status: e.target.selectedOptions[0].value} })} title="Status" className="w-full p-2 bg-transparent border rounded-md mb-4">
                {studyStatuses.map((status, i) =>{
                    return <option className="bg-gray-900" key={i} value={status} > { status } </option>
                })}
            </select>
            <textarea
                value={newEducation.details.comments}
                onChange={(e) => setNewEducation({ ...newEducation,details: {...newEducation.details, comments: e.target.value} })}
                placeholder="Comments"
                className="w-full p-2 bg-transparent border rounded-md mb-4"
            />
            <div className="flex justify-end space-x-2">
                <button
                onClick={() => onClose()}
                className="px-4 py-2 bg-red-500 rounded-md text-white"
                >
                Cancel
                </button>
                <button
                onClick={handleAddEducation}
                className="px-4 py-2 bg-green-500 rounded-md text-white"
                >
                Add
                </button>
            </div>
            </div>
        </div>
    )
}

export default EducationModal