const medicareDataParser = require('./MedicareDataParse');
const path = require('path');
const apiRequest = require('./lib/apiRequests');
const determineDrugType = require('./MedicareDataParse/determineDrugType');

(async () => {
	try {
		const medicareData = await medicareDataParser(path.resolve(`./data/MedicarePrescriptionData.xlsx`));
		const drugTypes = await apiRequest.getDrugTypes();
		let drugsToCreate = [];
		medicareData.forEach(x => {
			drugsToCreate.push({
				name: x.drugName,
				manufacturer: 'Unknown',
				nonGenericParent: null,
				federalDrugIdentifier: null,
				drugType: determineDrugType(drugTypes, x)[0].drugTypeId,
				active: 'Y'
			})
		});

		await apiRequest.createDrugBulk(drugsToCreate)
	} catch (err) {
		console.log(err.message)
	}
})();