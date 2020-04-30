let userName = checkFullname('Enter your name...', 'John');
let userLastName = checkFullname('Enter your lastname...', 'Doe');
let birthYear = checkAge('Enter your year of your Birth...', 2002);
let birthMonth = checkAge('Enter your year of your Month...', 10);

birthMonth = Number(birthMonth);
birthYear = Number(birthYear);

function checkFullname(message, value) {
	let check = prompt(message, value);
	// (!check) тоже самое что (check === '') || (check === null)
	while (!check || !check.trim()) {
		check = prompt('ERROR!');
	}
	return check;
}

function checkAge(message, value) {
	let check = prompt(message, value);
	// (!check) тоже самое что (check === '') || (check === null)
	while (!isFinite(check) || !check || check < 0 || check.trim() === '') {
		check = prompt('ERROR! \nInformation was enetred incorrectly! Try again', '');
	}
	return parseInt(check);
}

let thisYear = 2020;

let ageY = (birthMonth < 12) ? thisYear - 1 : thisYear;
let ageM = (birthMonth < 12) ? 12 - birthMonth : 0;

let adult = (((birthMonth < 12) ? thisYear - 1 : thisYear) - birthYear >= 18) ? 'You are an Adult!'+'\nYou can drink alcohol and drive car!!!' : 'Baby';
let gender = confirm('Are male? \nok - male \ncancel - female') ? 'Male' : 'Female';
let children = confirm('Do you have kids?', 'yes') ? 'You have +Infinity children' : 'You have 0 children';

let result = `${userName} ${userLastName}<br>
Your birth date is ${birthYear}, ${birthMonth}<br>
Your age is ${ageY - birthYear} years, ${ageM} months<br>
You are a/an ${adult}<br>
Your gender is ${gender}<br>
${children}<br>
`;

console.log(result);

let printResult = document.getElementById('result');
printResult.innerHTML = result;