import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/people.scss";

export const People = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getAllPeoples();
	}, []);
	return (
		<div className="container contenedor">
			{store.people.map((value, index) => (
				<div key={index} className="card m-2 bg-dark" style={{ width: "18rem" }}>
					<img
						src="https://www.republica.com/cine-publico/wp-content/uploads/sites/21/2017/12/jar_jar_binks.jpg"
						className="card-img-top"
					/>
					<div className="card-body">
						{/* <h5 className="card-title">Card title</h5> */}
						<p className="card-text text-light">{value.name}</p>
						<div className="boton-card">
							<Link className="btn btn-dark boton" to={"detailsPeople/" + value.uid}>
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
