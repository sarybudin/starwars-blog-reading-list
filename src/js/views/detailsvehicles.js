import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailsvehicles.scss";

export const DetailsVehicles = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getVehicle(params.id);
	}, []);
	if (store.detailsVehicle) {
		return (
			<div className="container contenedor">
				<div className="card m-2 bg-dark" style={{ width: "30rem" }}>
					<img
						src="https://www.republica.com/cine-publico/wp-content/uploads/sites/21/2017/12/jar_jar_binks.jpg"
						className="card-img-top"
					/>
					<div className="card-body">
						<h1 className="card-title">{store.detailsVehicle.properties.name}</h1>{" "}
						<p>
							<strong>model:</strong> {store.detailsVehicle.model}
						</p>
						<p>
							<strong>vehicle_class:</strong> {store.detailsVehicle.properties.vehicle_class}
						</p>
						<p>
							<strong>manufacturer:</strong> {store.detailsVehicle.properties.manufacturer}
						</p>
						<p>
							<strong>cost_in_credits:</strong> {store.detailsVehicle.properties.cost_in_credits}
						</p>
						<p>
							<strong>length:</strong> {store.detailsVehicle.properties.length}
						</p>
						<p>
							<strong>crew:</strong> {store.detailsVehicle.properties.crew}
						</p>
						<p>
							<strong>passengers:</strong> {store.detailsVehicle.properties.passengers}
						</p>
						<p>
							<strong>max_atmosphering_speed:</strong>{" "}
							{store.detailsVehicle.properties.max_atmosphering_speed}
						</p>
						<p>
							<strong>cargo_capacity:</strong> {store.detailsVehicle.properties.cargo_capacity}
						</p>
						<p>
							<strong>consumables:</strong> {store.detailsVehicle.properties.consumables}
						</p>
						<p>
							<strong>films:</strong> {store.detailsVehicle.properties.films}
						</p>
						<p>
							<strong>pilots:</strong> {store.detailsVehicle.properties.pilots}
						</p>
						<p>
							<strong>created:</strong> {store.detailsVehicle.properties.created}
						</p>
						<p>
							<strong>edited:</strong> {store.detailsVehicle.properties.edited}
						</p>
						<p>
							<strong>url:</strong> {store.detailsVehicle.properties.url}
						</p>
						<div className="div-btn">
							<Link className="btn btn-dark boton" to={"/vehicles"}>
								Back
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <div>Cargando datos...</div>;
	}
};
