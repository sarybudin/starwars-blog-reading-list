import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailsplanets.scss";

export const DetailsPlanets = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getPlanet(params.id);
	}, []);
	if (store.detailsPlanet) {
		return (
			<div className="container contenedor">
				<div className="card m-2 bg-dark" style={{ width: "30rem" }}>
					<img
						src="https://www.republica.com/cine-publico/wp-content/uploads/sites/21/2017/12/jar_jar_binks.jpg"
						className="card-img-top"
					/>
					<div className="card-body">
						<h1 className="card-title">{store.detailsPlanet.properties.name}</h1>{" "}
						<p>
							<strong>description:</strong> {store.detailsPlanet.description}
						</p>
						<p>
							<strong>diameter:</strong> {store.detailsPlanet.properties.diameter}
						</p>
						<p>
							<strong>rotation_period:</strong> {store.detailsPlanet.properties.rotation_period}
						</p>
						<p>
							<strong>orbital_period:</strong> {store.detailsPlanet.properties.orbital_period}
						</p>
						<p>
							<strong>gravity:</strong> {store.detailsPlanet.properties.gravity}
						</p>
						<p>
							<strong>population:</strong> {store.detailsPlanet.properties.population}
						</p>
						<p>
							<strong>climate:</strong> {store.detailsPlanet.properties.climate}
						</p>
						<p>
							<strong>terrain:</strong> {store.detailsPlanet.properties.terrain}
						</p>
						<p>
							<strong>surface_water:</strong> {store.detailsPlanet.properties.surface_water}
						</p>
						<p>
							<strong>edited:</strong> {store.detailsPlanet.properties.edited}
						</p>
						<p>
							<strong>created:</strong> {store.detailsPlanet.properties.created}
						</p>
						<p>
							<strong>edited:</strong> {store.detailsPlanet.properties.edited}
						</p>
						<p>
							<strong>url:</strong> {store.detailsPlanet.properties.url}
						</p>
						<div className="div-btn">
							<Link className="btn btn-dark boton" to={"/planets"}>
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
