const fs = require('fs/promises');
const functions = require('./functions');

const leerUrl = async () => {
	const urls = await fs.readFile('urls_api.txt');
	const jsonUrls = JSON.parse(urls);
	jsonUrls.urls.forEach((url) => functions.leerData(url));
};
leerUrl();
