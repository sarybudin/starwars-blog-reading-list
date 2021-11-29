import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Carousel } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {}, []);
	return (
		<div className="container p-5">
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2020/05/hipertextual-star-wars-celebra-may-the-4th-be-with-you-con-extraordinario-video-que-rinde-homenaje-toda-saga-2020581511.jpg?fit=1920%2C1080&ssl=1"
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://i.blogs.es/26ba45/star-wars-eras/1366_2000.jpeg"
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
