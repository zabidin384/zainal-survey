import React from "react";
import Content from "../components/Content";
import Search from "../components/Search";
import SurveyData from "../components/SurveyData";
import Table from "../components/Table";
import "./home.css";

export default function Home() {
	return (
		<div id="home">
			<div className="home-title mb-3">Overview</div>
			<div className="home-detil pt-1">
				<div className="home-detil-wrapper">
					<div className="home-detil-title mb-5">Detil Statistik Survey</div>
					<Content />
					<SurveyData />
					<div className="search-icon">
						<img src="assets/home/search.svg" alt="search" />
						<input type="text" placeholder="Search question" className="border border-2 py-3" />
					</div>

					<div className="home-data">
						<div className="home-data-item">
							<div className="home-data-title ">Nama Responden</div>
							<hr />
							<Search />
							<Table />
						</div>
						<div className="home-data-item ">
							<div className="home-data-title ">Jenis Kelamin</div>
							<hr />
							<div className="text-center">
								<img src="assets/home/chart.svg" alt="chart" className="my-5" />
							</div>
							<Search />
							<Table />
						</div>
						<div className="home-data-item ">
							<div className="home-data-title ">Recording</div>
							<hr />
							<Search />
							<Table />
						</div>
						<div className="home-data-item ">
							<div className="home-data-title ">Dokumentasi Penting</div>
							<hr />
							<Search />
							<Table />
						</div>
					</div>
				</div>
			</div>
			<div className="text-center">
				<button className="btn-load btn btn-outline-secondary rounded-pill mb-5">Load more</button>
			</div>
		</div>
	);
}
