const xlsx = require('node-xlsx');

module.exports = async (filePath) => {
	const excelFile = xlsx.parse(filePath);
	let data;
	for (page in excelFile) {
		if(excelFile[page].name === 'Data') {
			data = excelFile[page].data;
			break;
		}
	}
	let drugInfo = [];
	for(array in data){
		let drug = {
			drugName: data[array][0],
			numPrescribers: data[array][2],
			numMedicareClaims: data[array][3],
			isOpioid: data[array][15],
			isLongActingOpioid: data[array][16],
			isAntibiotic: data[array][17],
			isAntipsychotic: data[array][18],
		}
		drugInfo.push(drug);
	}
	console.log(drugInfo)
}