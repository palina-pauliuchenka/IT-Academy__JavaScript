let userName = prompt('Enter your name...', 'John');
let userLastName = prompt('Enter your lastname...', 'Doe');
let birthYear = prompt('Eneter your year of your Birth...', 2002);
let birthMonth = prompt('Eneter your year of your Month...', 10);

console.log(` ${userName} ${userLastName}
	Your birth date is ${birthYear}, ${birthMonth}
	Your age is ${( (birthMonth < 12) ? 2020 - 1 : 2020 ) - birthYear} years, ${( (birthMonth < 12) ? 12 - birthMonth : 2020 && 12 )} months 
	${(((birthMonth < 12) ? 2020 - 1 : 2020) - birthYear >= 18) ? 'You are an Adult!'+'\nYou cad drink alcohol and drive car!!!' : 'Baby'} 
	${confirm('Do you have kids?', 'yes') ? 'You have +Infinity children' : 'You have 0 children'}`);