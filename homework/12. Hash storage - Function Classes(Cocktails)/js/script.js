function HashStorage() {

	this._hash = {};

	this.addValue = function(key, value) {
		return this._hash[key] = value;
	};

	this.getValue = function(key) {
		return this._hash[key];
	};

	this.deleteValue = function(key) {
		this._hash[key] ? delete this._hash[key] : false;
	};

	this.getKeys = function() {
		return Object.keys(this._hash);
	};

}

function ClassA(name) {

	HashStorage.call(this, arguments);

	//
	let parentGetDrink = this.getValue;
    this.getValue = function (key) {
        parentGetDrink.apply(this, arguments);
        if (this[key]) {
            console.log(`${key} this value is on the list`);
        } else console.log('this value does not exist in the list');
    };

	this.getName = function() {
		return name;
	};

	this.deleteAll = function() {
		return delete this._hash;
	};
	
}

function ClassB(name) {

	HashStorage.call(this);

	this.getName = function() {
		return name;
	};

	this.getAll = function() {
    	return Object.keys(this._hash).length;
  	};

}

let drinksStorage = new ClassA('Cocktails');
let historyStorage = new ClassB('Country');

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

