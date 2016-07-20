var _ = require('lodash');

class MigrationHelpers {
	constructor() {
		// code
	}

	// @param codeMap {code1:desc, code2:desc, ...}
	// return {codeList:[code1, code2, ...], comment:string}
	static geneEnums(codeMap) {
		return {
			codeList: _.values(codeMap),
			comment: _.reduce(codeMap, (accu, value, key) => {
				console.log(value, key);
				accu.push(`${value} - ${key}`);
				return accu;
			}, []).join(', '),
		};
	}
}

let codeMap = {code1: "desc1", code2: "desc2"};
let result = MigrationHelpers.geneEnums(codeMap);
console.log(result);