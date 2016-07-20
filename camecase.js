let _ = require('lodash');
let apply_type = 'free_test';

function _clazzName(apply_type) {
	let name = _.camelCase(apply_type + "Coupon");
	return name.charAt(0).toUpperCase() + name.slice(1);
  }

console.log(_clazzName(apply_type));