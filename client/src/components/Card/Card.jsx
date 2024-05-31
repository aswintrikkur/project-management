import React, { useContext } from "react";
import "./Card.scss";
import { useNavigate } from "react-router-dom";
import { TaskDetails } from "../taskDetails/TaskDetails";
import { ProjectContext } from "../../contextAPI/ProjectContext";
import { ShowContext } from "../../contextAPI/showContext";

export const Card = ({ data }) => {
	const navigate = useNavigate();

	const { selectedProject, setSelectedProject } = useContext(ProjectContext);

	const { showProjectDetails, toggleProjectDetails, showProjectForm, toggleProjectForm } =
		useContext(ShowContext);

	const handleOpenProject = () => {
		// navigate(`/projectDetails/${data._id}`);
		// setId(data._id);
		setSelectedProject(data._id);
		toggleProjectDetails();
	};

	return (
		<>
			{/* <TaskDetails id={data._id} /> */}
			<div className="card-container" onClick={handleOpenProject}>
				<h3>{data?.projectName}</h3>
				<h5>{data?.description}</h5>
				{/* <ul>
				{data?.task?.map((item, index) => (
					<li key={index}>{item} </li>
				))}
			</ul> */}
				<div className="row" >
					<p className="status">{data?.status}</p>
					<p>
						Priority : <span style={{ color: data.priority === "high" && "red"  }}> {data?.priority} </span>
					</p>
				</div>{" "}
			</div>
		</>
	);
};
