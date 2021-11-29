import { getAllPeople, getPeople, getAllPlanets, getPlanet, getAllVehicles, getVehicle } from "../api/api-starwar";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			detailsPeople: undefined,
			planets: [],
			detailsPlanet: undefined,
			vehicle: [],
			detailsVehicle: undefined,
			favoritos: []
		},
		actions: {
			getAllPeoples: () => {
				getAllPeople()
					.then(value => {
						setStore({ people: value });
					})
					.catch(error => {
						setStore({ people: undefined });
					});
			},
			getPeoples: id => {
				getPeople(id)
					.then(value => {
						setStore({ detailsPeople: value });
					})
					.catch(error => {
						setStore({ detailsPeople: {} });
					});
			},
			getAllPlanets: () => {
				getAllPlanets()
					.then(value => {
						setStore({ planets: value });
					})
					.catch(error => {
						setStore({ planets: undefined });
					});
			},
			getPlanet: id => {
				getPlanet(id)
					.then(value => {
						setStore({ detailsPlanet: value });
					})
					.catch(error => {
						setStore({ detailsPlanet: {} });
					});
			},
			getAllVehicles: () => {
				getAllVehicles()
					.then(value => {
						setStore({ vehicle: value });
					})
					.catch(error => {
						setStore({ vehicle: undefined });
					});
			},
			getVehicle: id => {
				getVehicle(id)
					.then(value => {
						setStore({ detailsVehicle: value });
					})
					.catch(error => {
						setStore({ detailsVehicle: {} });
					});
			},
			addfavoritos: dato => {
				const store = getStore();
				setStore({ favoritos: [...store.favoritos, dato] });
				console.log(store.favoritos);
			},
			deletefavoritos: index => {
				const store = getStore();
				store.favoritos.splice(index, 1);
				setStore({ favoritos: [...store.favoritos] });
			}
			// Use getActions to call a function within a fuction
			/* exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => { */
			/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			/* },
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			} */
		}
	};
};

export default getState;
