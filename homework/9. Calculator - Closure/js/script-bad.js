let addResult = null,
	substractResult = null,
	multiplyResult = null,
	devideResult = null,
	sqrtRootResult = null,
	powResult = null; 
 
(function calculator(result) { 

	function add(x) { 
		return x + result;
	};
	addResult = add(5); 

	function substract(x) {
		return x - result;
	};
	substractResult = substract(5);

	function multiply(x) {
		return x * result;
	}
	multiplyResult = multiply(5);

	function devide(x) {
		return x / result;
	}
	devideResult = devide(5);

	function sqrtRoot(x) {
		return Math.sqrt(x);
	}
	sqrtRootResult = sqrtRoot(9);

	function pow(x) {
		return x**result;
	}
	powResult = pow(5);

})(5);
