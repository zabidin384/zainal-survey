import "./table.css";
import React from "react";
import { datas } from "../datas";

export default function Table() {
	return (
		<div className="table-container mt-4">
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">Date</th>
						<th scope="col">Time</th>
						<th scope="col">Submitted by</th>
						<th scope="col">Nama Responden</th>
					</tr>
				</thead>
				<tbody>
					{datas.map((data) => (
						<tr key={data._id}>
							<td>{data.date}</td>
							<td>{data.time}</td>
							<td>{data.submitted_by}</td>
							<td>{data.nama_responden}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
