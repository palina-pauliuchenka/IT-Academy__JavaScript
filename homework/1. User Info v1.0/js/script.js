let userName = prompt('Enter your name...', 'John');
let userLastName = prompt('Enter your lastname...', 'Doe');
let birthYear = prompt('Eneter your year of your Birth...', 2002);
let birthMonth = prompt('Eneter your year of your Month...', 10);
birthMonth = Number(birthMonth);
birthYear = Number(birthYear);

// let thisYear = 2020;

let ageY = (birthMonth < 12) ? 2020 - 1 : 2020;
let ageM = (birthMonth < 12) ? 12 - birthMonth : 0;

let adult = (((birthMonth < 12) ? 2020 - 1 : 2020) - birthYear >= 18) ? 'You are an Adult!'+'\nYou can drink alcohol and drive car!!!' : 'Baby';
let gender = confirm('Are male? \nok - male \ncancel - female') ? 'Male' : 'Female';
let children = confirm('Do you have kids?', 'yes') ? 'You have +Infinity children' : 'You have 0 children';

let result = `${userName} ${userLastName} <br>
Your birth date is ${birthYear}, ${birthMonth} <br>
Your age is ${ageY - birthYear} years, ${ageM} months <br> 
You are a/an ${adult} <br>
Your gender is ${gender} <br>
${children} <br>
`;

console.log(result);

let printResult = document.getElementById('result');
printResult.innerHTML = result;
