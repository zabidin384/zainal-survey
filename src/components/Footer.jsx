import React from "react";
import "./footer.css";

export default function Footer() {
	return (
		<div className="footer d-flex align-items-center justify-content-between">
			<div className="footer-left">
				<b>Plodot</b> Smart Survey
			</div>
			<div className="footer-middle">© Piarea 2021</div>
			<div className="footer-right d-flex">
				<img src="assets/footer/phone.svg" alt="phone" />
				<img src="assets/footer/email.svg" alt="email" />
				<img src="assets/footer/instagram.svg" alt="instagram" />
				<img src="assets/footer/linkedin.svg" alt="linkedin" />
			</div>
		</div>
	);
}
