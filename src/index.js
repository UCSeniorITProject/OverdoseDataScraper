const medicareDataParser = require('./MedicareDataParse');
const path = require('path');
(async () => {
	await medicareDataParser(path.resolve(`./data/MedicarePrescriptionData.xlsx`));
})();