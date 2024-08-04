// Use the solution of task 0002.
// Set the value of 'language' to the language spoken where you live(some countries have multiple languages, but just choose one).
// Think about which variables should be const variables (which values will never change, and which might change?).Then, change these variables to const.
// Try to change one of the changed variables now, and observe what happens.

const isIsland = false;
let population = 46;
const country = 'Argentina';
const language = 'Spanish';

population = 50;
language = 'Italian'; // TypeError: Assignment to constant variable.

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);