function treeSum(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			sum += treeSum(array[i]);
		} else {
			sum += array[i];
		}
	}
	return sum;
}

let arrayNumbers = [ 5, 7, [ 4, [2], 8, [1,3], 2 ], 9, [], 1, 8];

console.log(treeSum(arrayNumbers));	

function treeSum(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		//проверяю принадлежит ли объект к поределенному классу
		sum += array[i] instanceof Array ? treeSum(array[i]) : array[i];
	}
	return sum;
}

let arrayNumbers = [ 5, 7, [ 4, [2], 8, [1,3], 2 ], 9, [], 1, 8];

console.log(treeSum(arrayNumbers));	
