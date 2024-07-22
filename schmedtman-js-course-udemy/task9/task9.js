const country = 'Argentina';
const continent = 'South America';
const language = 'Spanish';
let populationArgentina = 46; // millions

// Create a String
const description = country + ' is in ' + continent + ',' + ' and its ' + populationArgentina + ' million people speak ' + language;
console.log(description);
// Argentina is in South America, and its 46 million people speak Spanish

// Arithmetic Operations and Assignment Operators
const halfPopulation = populationArgentina / 2;
populationArgentina++;
console.log(halfPopulation); // 23
console.log(populationArgentina); // 47

// Finland Population Comparison
const populationFinland = 6; // million
const yourPopulationCompare = populationArgentina > populationFinland;
console.log(yourPopulationCompare); // true

// Average Population Comparison
const averagePopulation = 33; // million
const averageComparison = populationArgentina < averagePopulation;
console.log(averageComparison); // false