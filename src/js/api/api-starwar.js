export const getAllPeople = async () => {
	try {
		return fetch("https://www.swapi.tech/api/people?page=1&limit=100", {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.results);
	} catch (error) {
		return [];
	}
};
export const getPeople = async id => {
	try {
		return fetch(`https://www.swapi.tech/api/people/${id}`, {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.result);
	} catch (error) {
		return {};
	}
};
export const getAllPlanets = async () => {
	try {
		return fetch("https://www.swapi.tech/api/planets?page=1&limit=100", {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.results);
	} catch (error) {
		return [];
	}
};
export const getPlanet = async id => {
	try {
		return fetch(`https://www.swapi.tech/api/planets/${id}`, {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.result);
	} catch (error) {
		return {};
	}
};
export const getAllVehicles = async () => {
	try {
		return fetch("https://www.swapi.tech/api/vehicles?page=1&limit=100", {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.results);
	} catch (error) {
		return [];
	}
};
export const getVehicle = async id => {
	try {
		return fetch(`https://www.swapi.tech/api/vehicles/${id}`, {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.result);
	} catch (error) {
		return {};
	}
};
