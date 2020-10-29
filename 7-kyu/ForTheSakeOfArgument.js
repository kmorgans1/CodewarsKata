/* Write a function named numbers that returns true if all the parameters it is passed are of the Number type. 
Otherwise, the function should return false. The function should accept any number of parameters.
URL: https://www.codewars.com/kata/5258b272e6925db09900386a */
const numbers = (...arr) => arr.every(x => typeof x === 'number');
