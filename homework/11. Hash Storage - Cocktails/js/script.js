function HashStorage() {

	this.hash = {};

	this.addValue = function(key, value) {
		return this.hash[key] = value;
	};

	this.getValue = function(key) {
		if (this.hash[key]) {
			return this.hash[key];
		} else {
			return undefined;
		};
	};

	this.deleteValue = function(key) {
		if (key in this.hash) {
            return delete this.hash[key];
        }
        return false;
	};

	this.getKeys = function() {
		return Object.keys(this.hash);
	};

};

let drinksStorage = new HashStorage();

drinksStorage.addValue('Majito', {Alcohol : 'yes', Ingridients : 'white rum, sugar cane juice, lime juice, soda water, mint'});
drinksStorage.addValue('BloodyMary', {Alcohol : 'yes', Ingridients : 'vodka, tomato juice, Worcestershire sauce, hot sauces, garlic, herbs, horseradish, celery, olives, salt, black pepper, lemon juice, lime juice and/or celery salt.'});

console.log(drinksStorage.getValue('Majito'));
console.log(drinksStorage.getKeys());
console.log(drinksStorage.deleteValue('BloodyMary')); //true
console.log(drinksStorage.getValue('BloodyMary')); //undefined


// const drinksStorage = {
// 	Majito : 'Majito: Alcohol - yes; Ingridients - white rum, sugar cane juice, lime juice, soda water, mint',
// 	BloodyMary : 'Bloody Mary : Alcohol - yes; Ingridients - vodka, tomato juice, Worcestershire sauce, hot sauces, garlic, herbs, horseradish, celery, olives, salt, black pepper, lemon juice, lime juice and/or celery salt.'
// }

// function showCokctails() {
// 	console.log(`${this.Majito}\n\n${this.BloodyMary}`);
// }

// drinksStorage.cocktails = showCokctails;
// drinksStorage.cocktails();

