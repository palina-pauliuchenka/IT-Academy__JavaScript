const givenArray = [0, 1, 1.5, 17, 9, 0.5];

function inRange(min, max, array) {
	return array.filter(function(number) {
		if (number >= min && number <= max) {
			return number;
		}
	});
}
console.log(inRange(1, 10, givenArray));