const calculator = (function() {
	let result = 0;
	return {
		clear() {
			result = 0;
		},
		add(x) {
			result += x;
		},
		substract(x) {
			result -= x;
		},
		multiply(x) {
			result *= x;
		},
		devide(x) {
			result /= x;
		},
		percent(x) {
			result %= result;
		},
		sqrtRoot(x) {
			result = Math.sqrt(x);
		},
		pow(x) {
			result = result**x;
		},
		log() {
			result = Math.log(result);
		},
		finalResult() {
			return result;
		},
	};
})();
calculator.add(15);
calculator.substract(5);
console.log(calculator.finalResult());
calculator.clear();calculator.add(15);
calculator.multiply(5);
console.log(calculator.finalResult());
calculator.add(15);
calculator.devide(5);
calculator.percent(5);
console.log(calculator.finalResult());
calculator.clear();
calculator.sqrtRoot(9);
console.log(calculator.finalResult());
calculator.pow(5);
calculator.log();
console.log(calculator.finalResult());