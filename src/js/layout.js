import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { People } from "./views/people";
import { DetailsPeople } from "./views/detailsPeople";
import { Planets } from "./views/planets";
import { DetailsPlanets } from "./views/detailsplanets";
import { Vehicles } from "./views/vehicles";
import { DetailsVehicles } from "./views/detailsvehicles";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/people">
							<People />
						</Route>
						<Route exact path="/detailsPeople/:id">
							<DetailsPeople />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/detailsPlanets/:id">
							<DetailsPlanets />
						</Route>
						<Route exact path="/vehicles">
							<Vehicles />
						</Route>
						<Route exact path="/detailsvehicles/:id">
							<DetailsVehicles />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
