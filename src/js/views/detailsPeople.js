import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailsPeople.scss";

export const DetailsPeople = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getPeoples(params.id);
	}, []);
	if (store.detailsPeople) {
		return (
			<div className="container contenedor">
				<div className="card m-2 bg-dark" style={{ width: "30rem" }}>
					<img
						src="https://www.republica.com/cine-publico/wp-content/uploads/sites/21/2017/12/jar_jar_binks.jpg"
						className="card-img-top"
					/>
					<div className="card-body">
						<h1 className="card-title">{store.detailsPeople.properties.name}</h1>{" "}
						<p>
							<strong>description:</strong> {store.detailsPeople.description}
						</p>
						<p>
							<strong>birth_year:</strong> {store.detailsPeople.properties.birth_year}
						</p>
						<p>
							<strong>height:</strong> {store.detailsPeople.properties.height}
						</p>
						<p>
							<strong>mass:</strong> {store.detailsPeople.properties.mass}
						</p>
						<p>
							<strong>hair_color:</strong> {store.detailsPeople.properties.hair_color}
						</p>
						<p>
							<strong>skin_color:</strong> {store.detailsPeople.properties.skin_color}
						</p>
						<p>
							<strong>eye_color:</strong> {store.detailsPeople.properties.eye_color}
						</p>
						<p>
							<strong>gender:</strong> {store.detailsPeople.properties.gender}
						</p>
						<p>
							<strong>created:</strong> {store.detailsPeople.properties.created}
						</p>
						<p>
							<strong>edited:</strong> {store.detailsPeople.properties.edited}
						</p>
						<p>
							<strong>homeworld:</strong> {store.detailsPeople.properties.homeworld}
						</p>
						<p>
							<strong>url:</strong> {store.detailsPeople.properties.url}
						</p>
						<div className="div-btn">
							<Link className="btn btn-dark boton" to={"/people"}>
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
