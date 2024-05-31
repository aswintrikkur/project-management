import React, { useContext, useEffect, useState } from "react";
import "./TaskDetails.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { ProjectContext } from "../../contextAPI/ProjectContext";
import { ShowContext } from "../../contextAPI/showContext";
import { NewProject } from "../newProject/NewProject";

export const TaskDetails = ({}) => {
	const [data, setData] = useState({});

	const { selectedProject, setSelectedProject } = useContext(ProjectContext);
	const {
		showProjectDetails,
		toggleProjectDetails,
		showProjectForm,
		toggleProjectForm,
		showEditForm,
		toggleEditForm,
	} = useContext(ShowContext);

	useEffect(() => {
		fetchProjectDetails();
	}, []);

	const fetchProjectDetails = async () => {
		try {
			const response = await axios(API_URL, {
				method: "GET",
				// params: {_id:params.id},
				params: { _id: selectedProject },
			});
			setData(response.data);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	const handleEditProject = async () => {
		// toggleEditForm();
		toggleProjectForm();
	};

	const handleDeleteProject = async () => {
		try {
			const response = await axios(API_URL, {
				method: "DELETE",
				data: { _id: selectedProject },
			});
			console.log(response);
			toggleProjectDetails();
		} catch (error) {
			console.log(error.resposne.data.message);
		}
	};

	return (
		<>
			{showProjectForm ? (
				<NewProject editData={data} formTitile="Update Existing Project" />
			) : (
				<>
					<div className="blur-div"></div>
					<div className="task-details-container">
						<button className="close-btn" onClick={toggleProjectDetails}>
							X
						</button>
						<h3>{data?.projectName} </h3>
						<h5>{data?.description}</h5>

						{/* <h4>Tasks</h4>
						<ul>
							{data?.task?.map((item, index) => (
								<li key={index}>{item} </li>
							))}
						</ul> */}
						<p>
							Priority : <span style={{ color: data.priority === "low" && "green" }}> {data?.priority} </span>
						</p>
						<p className="status">
							Status :{" "}
							<span > {data?.status} </span>
						</p>

						<div className="btn-container">
							<button className="edit" onClick={handleEditProject}>
								Edit
							</button>
							<button className="delete" onClick={handleDeleteProject}>
								Delete
							</button>
						</div>
					</div>
				</>
			)}
		</>
	);
};
