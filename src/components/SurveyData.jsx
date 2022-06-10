import React from "react";
import "./surveyData.css";

export default function SurveyData() {
	return (
		<div className="survey-data d-flex gap-3 my-5">
			<div className="data-item shadow-sm">
				<div className="data-text">Dimulai pada</div>
				<div className="data-desc">18/3/2021</div>
			</div>
			<div className="data-item shadow-sm">
				<div className="data-text">Ditutup pada</div>
				<div className="data-desc">18/4/2021</div>
			</div>
			<div className="data-item shadow-sm">
				<div className="data-text">Survei Hari Ini</div>
				<div className="data-desc">30</div>
			</div>
			<div className="data-item shadow-sm">
				<div className="data-text">Total Responden</div>
				<div className="data-desc">139</div>
			</div>
			<div className="data-item shadow-sm">
				<div className="data-text">Total Surveyor</div>
				<div className="data-desc">45</div>
			</div>
			<div>
				<button className="btn btn-outline-primary border border-2">Surveyor</button>
			</div>
		</div>
	);
}
