import { createContext, useState } from "react";

// ! ----------- CONTEXT ----------------
export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
	const [selectedProject, setSelectedProject] = useState("");

	return <ProjectContext.Provider value={{ selectedProject,setSelectedProject }}>{children}</ProjectContext.Provider>;
};
