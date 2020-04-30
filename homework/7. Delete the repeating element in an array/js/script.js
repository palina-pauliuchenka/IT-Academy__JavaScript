let arrElems = [8, 8, 1, 2, 2, 3, 4, 4, 5, 1, 7, 8];
function deleteSameElements(array) {
	let result = [];
	for (const sameElems of array) {
		if (!result.includes(sameElems)) {
			result.push(sameElems);
		};
	};
	return [result, arrElems]; 
};
console.log(deleteSameElements(arrElems)); // (2) [Array(7), Array(12)];