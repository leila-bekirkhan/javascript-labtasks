// In this task, you'll work with variables, string concatenation, arithmetic operations, and comparisons to manipulate and analyze country and population data.

/* Country Information
Create the following variables:
'country': a string with the value 'Argentina'
'continent': a string with the value 'South America'
'language': a string with the value 'Spanish'
'populationArgentina': a number with the value 46(representing millions)
- Create a string 'description' that combines these variables into a sentence: '[country] is in [continent], and its [population] million people speak [language]'
- Log the 'description' to the console.
*/
const country = 'Argentina';
const continent = 'South America';
const language = 'Spanish';
let populationArgentina = 46; // millions
// Create a String
const description = country + ' is in ' + continent + ',' + ' and its ' + populationArgentina + ' million people speak ' + language;
console.log(description);
// Argentina is in South America, and its 46 million people speak Spanish


/* Population Calculations
- Calculate half of Argentina's population and store it in 'halfPopulation'.
- Increase Argentina's population by 1 million using the increment operator.
- Log both 'halfPopulation' and the new value of 'populationArgentina' to the console.
*/
// Arithmetic Operations and Assignment Operators
const halfPopulation = populationArgentina / 2;
populationArgentina++;
console.log(halfPopulation); // 23
console.log(populationArgentina); // 47

/* Population Comparisons
- Create a variable 'populationFinland' with a value of 6 (million).
- Compare Argentina's population to Finland's and store the result in 'yourPopulationCompare'.
- Create a variable 'averagePopulation' with a value of 33 (million).
- Compare Argentina's population to the average population and store the result in 'averageComparison'.
- Log both comparison results to the console.
*/
// Finland Population Comparison
const populationFinland = 6; // million
const yourPopulationCompare = populationArgentina > populationFinland;
console.log(yourPopulationCompare); // true

// Average Population Comparison
const averagePopulation = 33; // million
const averageComparison = populationArgentina < averagePopulation;
console.log(averageComparison); // false