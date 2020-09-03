module.exports = (drugTypes, drugInfo) => {
	/**
	 * If the drug is an opioid, mark it as an opioid
	 * If the drug is an opioid and anything else, mark it as an opioid
	 * 
	 */
	if(drugInfo.isOpioid === 'Y' || drugInfo.isLongActinOpioid === 'Y') {
		return drugTypes.filter(x => x.drugTypeName === 'Opioid');
	}

	if(drugInfo.isAntibiotic === 'Y'){
		return drugTypes.filter(x => x.drugTypeName === 'Antibiotic');
	}

	if(drugInfo.isAntipsychotic === 'Y'){
		return drugTypes.filter(x => x.drugTypeName === 'Antipsychotic');
	}

	return drugTypes.filter(x => x.drugTypeName === 'Generic Drug Type');;
}