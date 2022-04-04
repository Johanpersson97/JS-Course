// Values and variables

/*
let js = 'amazing';
console.log(40+8+23-10);

console.log('Jonas');
console.log(23);

let firstName="Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable name conventions
let jonas_matilda = 'JM ';
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "Programmer"
let job2 = "Teacher"

console.log(myFirstJob)


// Datatypes

let javascriptIsFun = true; 
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Johan');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

// let const and var
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// const birthYear = 1992;

// const job;

var job = "programmer";
job = "Teacher";

lastName = "Persson";
console.log(lastName);


// Math operators 
const now = 2037
const ageJohan = now - 1991;
const ageSarah = now - 2018;
console.log(ageJohan, ageSarah);

console.log(ageJohan * 2, ageJohan / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Johan"
const lastName = "Persson"
console.log(firstName + " " + lastName)

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x ++; // x = x + 1
x --; 
x --;
console.log(x);

// Comparison operators
console.log(ageJohan > ageSarah); // <, >, >=, <= 
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037
const ageJohan = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x , y; 
x = y = 25 - 10 - 5; // x = y = 10, x = 10 
console.log(x, y);

const averageAge = (ageJohan + ageSarah) / 2
console.log(ageJohan, ageSarah, averageAge);


// Coding challenge #1! 

// TestData 1
const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.95;
const johnMass = 92;

const markBMI = markMass / (markHeight * markHeight)
const johnBMI = johnMass / (johnHeight * johnHeight)

console.log(markBMI, johnBMI)

const markHigherBMI = markBMI > johnBMI
console.log (markHigherBMI) 


// TestData 2
const markHeight = 1.88;
const markMass = 95;
const johnHeight = 1.76;
const johnMass = 85;

const markBMI = markMass / (markHeight * markHeight)
const johnBMI = johnMass / (johnHeight * johnHeight)

console.log(markBMI, johnBMI)

const markHigherBMI = markBMI > johnBMI
console.log (markHigherBMI) 

// Strings and Template Literals
const firstName = "Johan"; 
const job = "Student"
const birthYear = 1997;
const year = 2037;

const johan = "I'm " + firstName + ", a " + (year - birthYear)
+ " years old " + job + "!"
console.log(johan);

const johanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(johanNew);

console.log(`Just a Regular string...`)

console.log('String with \n\
multiple \n\
lines')

console.log(`String
multiple
lines`);

// If / else statements
const age = 15;

if (age >= 18) {
	console.log("Sarah can start driving license 🚗")
} else {
	const yearsLeft = 18 - age;
	console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`)
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);


// Coding challenge #2!
const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.95;
const johnMass = 92;

const markBMI = markMass / (markHeight * markHeight)
const johnBMI = johnMass / (johnHeight * johnHeight)

if (markBMI > johnBMI){
	console.log(`Mark's BMI (${markBMI}) is higher than John's BMI ${johnBMI}!`)
} else {
	console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}!`)
}


// Type conversion
const inputYear = "1997";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Johan"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // "11"
n = n - 1 // 10
console.log(n)

// Truthy and Falsy values
// 5 falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("johan"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
	console.log("Dont spend it all ;)")
} else {
	console.log("You should get a job!")
}

let height = 0;
if (height){
	console.log("YAY! Height is defined.")
} else {
	console.log("Height is UNDEFINED")
}

// Equality operators
const age = "18";
if (age === 18) console.log("You just became an adult! (strict)");

// === strict equality operator - always use this operator 
// == loose equality operator

if (age == 18) console.log("You just became an adult! (loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // "22" == 23 --> FALSE
	console.log("Cool! 23 is an amazing number!")
} else if (favorite === 7) {
	console.log("7 is also a cool number!")
} else if (favorite === 9) {
	console.log("9 is also a cool number!")
} else {
	console.log("Number is not 23 or 7 or 9")
} 

if (favorite !== 23) console.log("Why not 23?");

// Logical operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // && === AND
console.log(hasDriversLicense || hasGoodVision); // || = OR
console.log(!hasDriversLicense); // ! = NOT


if (hasDriversLicense && hasGoodVision) {
	console.log("Sarah is able to drive")
} else {
	console.log("Someone else should drive...")
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
	console.log("Sarah is able to drive")
} else {
	console.log("Someone else should drive...")
}

// Coding challenge #3!

const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;

const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110; 

const averageDolphin = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const averageKoala = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

if (averageDolphin > averageKoala) {
	console.log(`The Dolphins are the winners, wigh an average score of ${averageDolphin}`)
} else if (averageKoala > averageDolphin) {
	console.log(`The koalas are the winners, wigh an average score of ${averageKoala}`)
} else {
	console.log("It is a tie!")
}

const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;

const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110; 

const minimumScore = 100;

if (dolphinsScore1 > koalasScore1 && minimumScore >= 100) {
	console.log ("The dolphins win!")
} else if (dolphinsScore1 < koalasScore1 && minimumScore >= 100) {
	console.log ("The koalas win!")
} else {
	console.log("Its a draw!")
}
if (dolphinsScore2 > koalasScore2 && minimumScore >= 100) {
	console.log ("The dolphins win!")
} else if (dolphinsScore2 < koalasScore2 && minimumScore >= 100) {
	console.log ("The koalas win!")
} else {
	console.log("Its a draw!")
}
if (dolphinsScore3 > koalasScore3 && minimumScore >= 100) {
	console.log ("The dolphins win!")
} else if (dolphinsScore3 < koalasScore3 && minimumScore >= 100) {
	console.log ("The koalas win!")
} else {
	console.log("Its a draw!")
}
*/

// Switch statement

const day = "friday";

switch(day) {
	case "monday": // day === "monday" 
		console.log("Plan course structure");
		console.log("Go to coding meetup");
		break;
	case "tuesday":
		console.log("Prepare theory videos");
		break;
	case "wednesday":
	case "thursday":
		console.log("Write code examples");
		break;
	case "friday":
		console.log("Record videos");
		break;
	case "saturday":
	case "sunday":
		console.log("Enjoy the weekend!")
		break;
	default:
		console.log("Not a valid day!")
}

if (day === "monday") {
	console.log("Plan course structure");
	console.log("Go to coding meetup");
} else if (day === "tuesday") {
	console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
	console.log("Write code examples");
} else if (day === "friday") {
	console.log("Record videos");
} else if (day === "saturday" || day === "sunday"){
	console.log("Enjoy the weekend!")
} else {
	console.log("Not a valid day!")
}