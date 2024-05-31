// src/components/Home.jsx
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Home.scss";
import { API_URL } from "../utils/api";
import { Sidebar } from "../components/sidebar/Sidebar";
import { SearchBar } from "../components/searchBar/SearchBar";
import { Card } from "../components/Card/Card";
import { TaskDetails } from "../components/taskDetails/TaskDetails";
import { NewProject } from "../components/newProject/NewProject";
import { ShowContext } from "../contextAPI/showContext";

export const Home = () => {
	const [projects, setProjects] = useState([]);

	const { showProjectDetails, toggleProjectDetails, showProjectForm, toggleProjectForm } =
		useContext(ShowContext);


	const fetchAllProjects = async () => {
		try {
			const response = await axios(`${API_URL}/all`);
			setProjects(response.data);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};



	useEffect(() => {
		fetchAllProjects();
	}, [showProjectDetails,showProjectForm]);

	return (
		<div className="home-container">
			<Sidebar />
			<div className="main-content">
				<div className="header">
					<h2>Hi, Aswinkumar</h2>
					<SearchBar />
					<img src="/images/PngItem_4042710.png" alt="pic" className="pro-pic" />
				</div>
				<div className="project-header">
					<h3>Kanban Board</h3>
					<button onClick={toggleProjectForm}>Add New Project</button>
				</div>
				<div className="project-container">
					{showProjectForm && <NewProject toggleProjectForm={toggleProjectForm} />}
					{showProjectDetails && (
						<TaskDetails data={projects[1]} toggleProjectDetails={toggleProjectDetails} />
					)}
					{projects.map((data, index) => (
						<Card data={data} key={index} toggleProjectDetails={toggleProjectDetails} />
					))}
				</div>
			</div>
		</div>
	);
};
