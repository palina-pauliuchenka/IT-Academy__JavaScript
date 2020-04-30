function HashStorage() {
	this._hash = {};
}

HashStorage.prototype.addValue = function(key, value) {
		return this._hash[key] = value;
	};	

HashStorage.prototype.getValue = function(key) {
		return this._hash[key];
	};

HashStorage.prototype.deleteValue = function(key) {
		return this._hash[key] ? delete this._hash[key] : false;
	};

	
HashStorage.prototype.getKeys = function() {
		return Object.keys(this._hash);
	};

function ClassA(name) {
	HashStorage.call(this);
	this.name = name;
}

ClassA.prototype = Object.create(HashStorage.prototype);
ClassA.prototype.constructor = ClassA;

ClassA.prototype.deleteValue = function() {
		const delteResult = HashStorage.prototype.deleteValue.call(this, key);
    	return delteResult ? 'value has been deleted' : 'no such value';
	};

function ClassB(name) {
	HashStorage.call(this);
	this.name = name;
}

ClassB.prototype = Object.create(HashStorage.prototype);
ClassB.prototype.constructor = ClassB;

ClassB.prototype.addValue = function() {
		HashStorage.prototype.addValue.call(this, key, value);
    	return 'value has been added';
	};


let drinksStorage = new ClassA({name : 'Cocktails'});
let historyStorage = new ClassB({name : 'Country'});

drinksStorage.addValue('Mojito', {Name : 'Mojito',Alcohol : 'yes', Ingridients : 'white rum, sugar cane juice, lime juice, soda water, mint'},);
drinksStorage.addValue('BloodyMary', {Name : 'Bloody Mary', Alcohol : 'yes', Ingridients : 'vodka, tomato juice, Worcestershire sauce, hot sauces, garlic, herbs, horseradish, celery, olives, salt, black pepper, lemon juice, lime juice and/or celery salt.'});

historyStorage.addValue('Mojito', {Name : 'Majito', Country : 'Havana, Cuba.'},);
historyStorage.addValue('BloodyMary', {Name : 'Bloody Mary', Country : 'France'});


drinksStorage.getName(); // Cocktail
drinksStorage.getValue('Mojito'); //{Name: "Majito", Alcohol: "yes", ...}
drinksStorage.getValue('gf');//No cocktail with this name
drinksStorage.getKeys(); //(2) ["Majito", "BloodyMary"]
// drinksStorage.deleteValue('BloodyMary'); //The cocktail has been successfully deleted.
drinksStorage.deleteValue('BloodyMaary');//We do not have this cocktail
drinksStorage.getValue('BloodyMary'); //"No cocktail with this name"
drinksStorage.getKeys(); //(2) ["Mojito", "BloodyMary"]
drinksStorage.makeCocktaile(); //(2) [{…}, {…}]
drinksStorage.deleteAll(); //"all cockails has been deleted"

historyStorage.getName(); // History
historyStorage.getAll();//2
historyStorage.getValue('Mojito'); //{Name: "Majito", History: "Havana, Cuba..."}
historyStorage.getValue('BloodyMary'); //{Name: "Bloody Mary", History: "The French bartender..."}

