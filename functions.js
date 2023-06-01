const fs = require('fs/promises');
const axios = require('axios');

// Consumo API con axios
const leerData = async (url) => {
	const { data } = await axios.get(url);
	console.log(data);
};

module.exports = { leerData: leerData };
