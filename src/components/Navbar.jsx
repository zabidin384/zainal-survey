import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="navbar d-flex justify-content-between position-fixed px-5">
			<div className="navbar-left">
				<ul>
					<li id="survey-portal">
						<div className="surver-portal-wrapper text-center" title="Survey Portal">
							<img src="assets/navbar/survey-portal.svg" alt="survey-portal" />
						</div>
					</li>
					<li title="Dashboard">
						<img src="assets/navbar/overview.svg" alt="overview" />
						<Link to="/">Overview</Link>
					</li>
					<li title="Quisioner Builder">
						<img src="assets/navbar/kuisioner.svg" alt="kuisioner" />
						<Link to="/">Kuisioner</Link>
					</li>
					<li title="Data Collection">
						<img src="assets/navbar/koleksi-data.svg" alt="koleksi-data" />
						<Link to="/">Koleksi Data</Link>
					</li>
					<li title="Report">
						<img src="assets/navbar/laporan.svg" alt="laporan" />
						<Link to="/">Laporan</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="notif position-relative">
						<img src="assets/navbar/notification.svg" alt="" className="notification" />
						<img src="assets/navbar/circle.svg" alt="circle" />
					</li>
					<li className="navbar-user">
						<div className="dropdown">
							<div>Johny Wiryawan</div>
							<div className="dropdown-content">
								<Link to="#">Profil saya</Link>
								<Link to="#">Logout</Link>
							</div>
						</div>
					</li>
					<li>
						<button className="btn btn-primary rounded-pill px-4">Go to Opensite</button>
					</li>
				</ul>
			</div>
			<div className="lamp" title="Guidance">
				<img src="assets/home/lamp.svg" alt="lamp" />
			</div>
		</div>
	);
}
