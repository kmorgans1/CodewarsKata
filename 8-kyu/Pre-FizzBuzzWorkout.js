/* Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
Your expected output is an array of positive integers from 1 to n (inclusive).
Your job is to write an algorithm that gets you from the input to the output.
URL: www.codewars.com/kata/569e09850a8e371ab200000b */
const preFizz = n => {
  let results = [];
  for(let i = 1; i <= n; i++){
    results.push(i);
  }
  return results;
}