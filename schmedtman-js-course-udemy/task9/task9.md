# JavaScript Country and Population Task

In this task, you'll work with variables, string concatenation, arithmetic operations, and comparisons to manipulate and analyze country and population data.

## Objectives:

1. Create and use variables to store country information
2. Practice string concatenation
3. Perform arithmetic operations and use assignment operators
4. Make comparisons between populations

## Task 1: Country Information

1. Create the following variables:
   * `country`: a string with the value 'Argentina'
   * `continent`: a string with the value 'South America'
   * `language`: a string with the value 'Spanish'
   * `populationArgentina`: a number with the value 46 (representing millions)
2. Create a string `description` that combines these variables into a sentence:
   "[country] is in [continent], and its [population] million people speak [language]"
3. Log the `description` to the console.

## Task 2: Population Calculations

1. Calculate half of Argentina's population and store it in `halfPopulation`.
2. Increase Argentina's population by 1 million using the increment operator.
3. Log both `halfPopulation` and the new value of `populationArgentina` to the console.

## Task 3: Population Comparisons

1. Create a variable `populationFinland` with a value of 6 (million).
2. Compare Argentina's population to Finland's and store the result in `yourPopulationCompare`.
3. Create a variable `averagePopulation` with a value of 33 (million).
4. Compare Argentina's population to the average population and store the result in `averageComparison`.
5. Log both comparison results to the console.

## Expected Output:

<pre><div class="relative flex flex-col rounded-lg"><div class="text-text-300 absolute pl-3 pt-2.5 text-xs"></div><div class="pointer-events-none sticky my-0.5 ml-0.5 flex items-center justify-end px-1.5 py-1 mix-blend-luminosity top-0"><div class="from-bg-300/90 to-bg-300/70 pointer-events-auto rounded-md bg-gradient-to-b p-0.5 backdrop-blur-md"><button class="flex flex-row items-center gap-1 rounded-md p-1 py-0.5 text-xs transition-opacity delay-100 hover:bg-bg-200"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="text-text-500 mr-px -translate-y-[0.5px]"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><span class="text-text-200 pr-0.5">Copy</span></button></div></div><div><div class="code-block__code !my-0 !rounded-lg !text-sm !leading-relaxed"><code><span><span>Argentina is in South America, and its 46 million people speak Spanish
</span></span><span>23
</span><span>47
</span><span>true
</span><span>false</span></code></div></div></div></pre>

## Notes:

* Pay attention to spaces and punctuation in the string concatenation.
* Remember that the increment operator (`++`) increases the value by 1.
* Comparison operators return boolean values (true or false).

## Hints:

* For string concatenation, you can use the `+` operator or template literals.
* The increment operator can be used as `populationArgentina++`.
* For comparisons, use `>` for "greater than" and `<` for "less than".
