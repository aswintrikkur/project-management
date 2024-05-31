import React, { useContext, useEffect, useState } from "react";
import "./NewProject.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { ShowContext } from "../../contextAPI/showContext";
import { ProjectContext } from "../../contextAPI/ProjectContext";

export const NewProject = ({ editData, formTitile = "Create New Project" }) => {
	const [data, setData] = useState({
		projectName: "",
		description: "",
		// task: [],
		priority: "",
		// status: "",
	});

	useEffect(() => {
		setData(editData);
	}, []);

	const { showProjectDetails, toggleProjectDetails, showProjectForm, toggleProjectForm } =
		useContext(ShowContext);

	const { setSelectedProject } = useContext(ProjectContext);

	const handleChange = (event) => {
		setData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSave = async () => {
		try {
			const response = await axios(API_URL, {
				method: "POST",
				data,
			});
			console.log(response);
			toggleProjectForm();
		} catch (error) {
			console.log(error.response.data.message);
		}
	};

	const handleUpdate = async () => {
		try {
			const response = await axios(API_URL, {
				method: "PUT",
				data,
			});
			console.log(response);
			toggleProjectDetails();
			toggleProjectForm();
		} catch (error) {
			console.log(error.response.data.message);
		}
	};

	console.log("data====", data);

	return (
		<>
			<div className="blur-div"></div>
			<div className="new-project-container">
				<button className="close-btn" onClick={toggleProjectForm}>
					x
				</button>
				<h2>{formTitile}</h2>
				<div className="row">
					<label htmlFor="">Project Name</label>
					<input
						type="text"
						placeholder="Project Name"
						name="projectName"
						value={data?.projectName}
						onChange={handleChange}
					/>
				</div>
				<div className="row">
					<label htmlFor="">Description</label>
					<textarea
						name="description"
						id=""
						placeholder="Project Description"
						value={data?.description}
						onChange={handleChange}
					></textarea>
				</div>

				<div className="row">
					<label htmlFor="">Choose Priority</label>
					<select name="priority" id="" value={data?.priority} onChange={handleChange}>
						<option value="choose">choose</option>
						<option value="high">High</option>
						<option value="medium">Medium</option>
						<option value="low">Low</option>
					</select>
				</div>
				{editData && (
					<div className="row">
						<label htmlFor="">Choose Status</label>
						<select name="status" id="" value={data?.status} onChange={handleChange}>
							<option value="complete">Complete</option>
							<option value="pending">Pending</option>
						</select>
					</div>
				)}
				<div className="btn-container">
					<button className="cancel" onClick={toggleProjectForm}>
						Cancel
					</button>
					{editData ? (
						<button className="save" onClick={handleUpdate}>
							Update
						</button>
					) : (
						<button className="save" onClick={handleSave}>
							Save
						</button>
					)}
				</div>
			</div>
		</>
	);
};
