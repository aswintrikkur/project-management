import React from "react";
import "./sidebar.scss";

export const Sidebar = () => {
	return (
		<div className="sidebar-container">
			<div className="logo">
				<img
					src="https://d33wubrfki0l68.cloudfront.net/55307694d1a6b107d2d87c838a1aaede85cd3d84/66f18/assets/images/logo-dark.svg"
					alt="logo"
				/>
			</div>
			<ul className="sidebar-menu">
				<li>
					<img src="/icons/icon1.svg" alt="" />  Dashboard
				</li>
				<li>
					<img src="/icons/icon4.svg" alt="" />  Projects
				</li>
				<li>
					<img src="/icons/icon2.svg" alt="" />  Pages
				</li>
				<li>
					<img src="/icons/icon3.svg" alt="" />  Chat
				</li>
				<li>
					<img src="/icons/icon5.svg" alt="" />  File Manager
				</li>
				<li>
					<img src="/icons/icon6.svg" alt="" />  Authentication
				</li>
			</ul>
		</div>
	);
};
