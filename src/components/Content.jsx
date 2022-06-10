import React from "react";
import "./content.css";

export default function Content() {
	return (
		<div className="content d-flex justify-content-between">
			<div className="content-left">
				<div className="content-left-text d-flex">
					<img src="assets/home/fire.svg" alt="img-content" />
					<div className="content-middle">
						<div className="content-text py-3">Survei Dampak Ekosistem Akibat Kebakaran Hutan dan Lahan di Kalimatan Barat</div>
						<div className="content-button d-flex gap-2">
							<button className="btn btn-success rounded-pill">Aktif</button>
							<button className="btn btn-info rounded-pill">Milik Saya</button>
							<button className="btn btn-primary rounded-pill">Berjalan</button>
							<button className="btn btn-outline-secondary rounded-pill">Private:OFF</button>
						</div>
					</div>
				</div>
				<div className="content-desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et
					viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
					Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet,
					consectetur adipiscing
				</div>
			</div>
			<div className="content-right">
				<div className="qr-code">
					<img src="assets/home/qr-code.png" alt="" />
				</div>
				<button className="btn btn-secondary">Generate QR</button>
			</div>
		</div>
	);
}
