import React, { useContext } from "react";

import { Context } from "../store/appContext";
import { Badge, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Star_Wars_Yellow_Logo.svg"
						width={70}
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/" className="nav-link active" aria-current="page">
								<span className="navbar-brand mb-0 h1">Home</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/people" className="nav-link">
								<span className="navbar-brand mb-0 h1">People</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/planets" className="nav-link">
								<span className="navbar-brand mb-0 h1">Planets</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/vehicles" className="nav-link">
								<span className="navbar-brand mb-0 h1">Vehicles</span>
							</Link>
						</li>
					</ul>
					<form className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
					{/* <Link to="/demo" className="ms-3">
						<button className="btn btn-primary">Favoritos</button>
					</Link> */}
					<Dropdown className="ms-3">
						<Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
							Favoritos <Badge bg="danger">{store.favoritos.length}</Badge>
						</Dropdown.Toggle>

						<Dropdown.Menu variant="dark">
							{store.favoritos.map((value, key) => (
								<Dropdown.Item key={key} href="#/action-4">
									{value}{" "}
									<i onClick={() => actions.deletefavoritos(key)} className="fas fa-trash-alt" />
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		</nav>
	);
};
