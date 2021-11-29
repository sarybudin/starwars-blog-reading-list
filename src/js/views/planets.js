import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/planets.scss";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getAllPlanets();
	}, []);
	return (
		<div className="container contenedor">
			{store.planets.map((value, index) => (
				<div key={index} className="card m-2 bg-dark" style={{ width: "18rem" }}>
					<img
						src="https://i1.wp.com/www.gamerfocus.co/wp-content/uploads/2019/11/planetas_fallen_order.jpg?w=1280&ssl=1"
						className="card-img-top"
					/>
					<div className="card-body">
						{/* <h5 className="card-title">Card title</h5> */}
						<p className="card-text text-light">{value.name}</p>
						<div className="boton-card">
							<Link className="btn btn-dark boton" to={"detailsPlanets/" + value.uid}>
								Learn more!
							</Link>
							<button
								type="button"
								className="btn btn-outline-warning"
								onClick={() => actions.addfavoritos(value.name)}>
								<i className="far fa-heart" />
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
