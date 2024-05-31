import React from "react";
import "./SearchBar.scss";

export const SearchBar = () => {
	return (
		<div className="searchbar-container">
			<input type="text" placeholder="Search Projects" />

			<div className="search-div">
				<img src="/icons/icon-search.svg" alt="" />
			</div>
		</div>
	);
};
