const axios = require('axios');
const config = require('../../config');

exports.createDrugBulk = async (drugData) => {
	const drugs = await axios.post(`${config.pharmaceuticalApi}/api/drug/bulk`, {drugs: drugData});
	return drugs.data.drugs;
}

exports.getDrugTypes = async () => {
	const drugTypes = await axios.get(`${config.pharmaceuticalApi}/api/drug-type`);
	return drugTypes.data.drugTypes;
}