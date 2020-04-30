let obj1 = {g : 7, b : { j : {l : 10},}, v : 15,};//b
let obj2 = {g : 7, b : { j : {l : 10},}, v : 15,};

function compareObjects(object1, object2) {
	if (object1 === object2) {
		return true;
	} else if (
		typeof object1 === 'object' &&
		typeof object2 === 'object' &&
		Object.keys(object1).length === Object.keys(object2).length
	) {
		for (let key in object1) {
			if (!compareObjects(object1[key], object2[key])) {
				return false;
			}
		}
		return true;
	}
	return false;
}

console.log(compareObjects(obj1, obj2));

//////////////////////////////////////////////////////////////////////////////////////////

let obj1 = {g : 7, b : { j : {l : 10},}, v : 15,};//b
let obj2 = {g : 7, v : { j : {l : 10},}, a : 15, c : 67};//a

function compareObjects(object1, object2) {

	if (object1 === object2) {
		return true;
	};

	if (object1 === null || typeof(object1) !== 'object' || object2 === null || typeof(object2) !== 'object') {
		return false;
	};

	for (let attribute in object1) {
		if (!(attribute in object2) || !compareObjects(object1[attribute], object2[attribute])) {
			return false;
		};
	};


	for (let attribute in object2) {
		if (!(attribute in object1) || !compareObjects(object1[attribute], object2[attribute])) {
			return false;
		};
	};

	return true;
};

console.log(compareObjects(obj1, obj2));