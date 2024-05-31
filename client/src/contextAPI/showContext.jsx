import { createContext, useState } from "react";

// ! ----------- CONTEXT ----------------
// * --------- State Management for ['NewData.jsx','AddMedicine.jsx','MedicineList.jsx'] ----------------
export const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
	const [showProjectDetails, setShowProjectDetails] = useState(false);
	const [showProjectForm, setShowProjectForm] = useState(false);
	const [showEditForm, setShowEditForm] = useState(false);

	const toggleProjectDetails = () => {
		setShowProjectDetails((prev) => !prev);
	};
	const toggleProjectForm = () => {
		setShowProjectForm((prev) => !prev);
	};
	const toggleEditForm = () => {
		setShowEditForm((prev) => !prev);
	};

	return (
		<ShowContext.Provider
			value={{
				showProjectDetails,
				toggleProjectDetails,
				showProjectForm,
				toggleProjectForm,
				showEditForm,
				toggleEditForm,
			}}
		>
			{children}
		</ShowContext.Provider>
	);
};
