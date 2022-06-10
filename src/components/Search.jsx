import React from "react";
import "./search.css";

export default function Search() {
	return (
		<div className="search d-flex justify-content-between">
			<div className="search-left">
				<input type="text" placeholder="Search" className="border border-2" />
			</div>
			<div className="search-right d-flex align-items-center gap-3">
				<img src="assets/home/arrowleft.svg" alt="arrowleft" />
				<input type="number" placeholder="1" className="border border-2" />
				<img src="assets/home/arrowright.svg" alt="arrowright" />
			</div>
		</div>
	);
}
