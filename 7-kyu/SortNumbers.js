/* Finish the solution so that it sorts the passed in array of numbers. 
If the function passes in an empty array or null/nil value then it should return an empty array.
URL: www.codewars.com/kata/5174a4c0f2769dd8b1000003 */
const solution = nums => nums ? nums.sort((a, b) => a - b) : [];