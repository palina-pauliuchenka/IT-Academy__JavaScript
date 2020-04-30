class HashStorage {

	constructor() {
        this._hash = {};
    }

	addValue(key, value) {
		return this._hash[key] = value;
	};

	getValue(key) {
		return this._hash[key];
	};

	deleteValue(key) {
		this._hash[key] ? delete this._hash[key] : false;
	};

	
	getKeys() {
		return Object.keys(this._hash);
	};

}

class ClassA extends HashStorage {

	constructor(options) {
        super();//super is used to call functions belonging to the parent of the object.
        this.name = options.name;
    }

	deleteAll() {
		return delete this._hash;
	};

	
}

class ClassB extends HashStorage {

	constructor(options) {
        super();
        this.name = options.name;
    }

    getValue(key) {
        if (this._hash[key]) {
            console.log((`${key} this value is on the list`));
        } else {
        	console.log(('this value does not exist in the list'))
        };
        return super.getValue(key);
    }

	getAll() {
    	return Object.keys(this._hash).length;
  	};

}

let drinksStorage = new ClassA({name : 'Cocktails'});
let historyStorage = new ClassB({name : 'Country'});

drinksStorage.addValue('Mojito', {Name : 'Mojito',Alcohol : 'yes', Ingridients : 'white rum, sugar cane juice, lime juice, soda water, mint'},);
drinksStorage.addValue('BloodyMary', {Name : 'Bloody Mary', Alcohol : 'yes', Ingridients : 'vodka, tomato juice, Worcestershire sauce, hot sauces, garlic, herbs, horseradish, celery, olives, salt, black pepper, lemon juice, lime juice and/or celery salt.'});

historyStorage.addValue('Mojito', {Name : 'Majito', Country : 'Havana, Cuba.'},);
historyStorage.addValue('BloodyMary', {Name : 'Bloody Mary', Country : 'France'});

drinksStorage.deleteValue('Mojito');
historyStorage.getValue('Mojio')