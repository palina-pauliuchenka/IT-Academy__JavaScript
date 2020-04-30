function getMaxNumber(...args) {
	//arguments[arguments.length - 1] - самое последнее число из аргументов
	let max = args[0];
	for (let i=0; i < args.length; i++) {
		//arguments[i] текущее число
	    if (args[i] > max) {
	        max = args[i]; 
	    } 
	}
	return max;
}
getMaxNumber(2, 3, 5, 6); // 6

function getMaxNumber2(array) {
	//array[array.length - 1] - самое последнее число в массиве
	let max2 = array[0];
	for (let i=0; i < array.length; i++) {
		//array[i] текущее число
	    if (array[i] > max2) {
	        max2 = array[i]; 
	    } 
	}
	return max2;
}
getMaxNumber2([2, 3, 6 , 9,]); // 9

