/*
// Values and variables
const country = "Sweden"
const continent = "Europe"
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

// Datatypes
const isIsland = false;
const language = "Swedish";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Basic operators assignment
const populationSplit = population / 2
console.log(population);
const finlandPopulation = 6

const isBigger = population > finlandPopulation;
const averagePopulation = 33;

const isAverage = population > averagePopulation;
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`

console.log(description);

// If / else statements assignemnt
if (population > 33){
	console.log(`${country}'s population is above average`)
} else {
	console.log(`${country}'s population is ${averagePopulation - population} 
million below average`)
}


// Equality operators assignment
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
	console.log("Only 1 border!")
} else if (numNeighbours > 1) {
	console.log("More than 1 border")
} else {
	console.log("No neighbours")
}

// Logical operators assignment
if (language === "English" && population < 50 && !isIsland) {
	console.log(`You should live in ${country} :)!`)
} else { 
	console.log(`${country} does not meet your criteria :(`)
}
*/