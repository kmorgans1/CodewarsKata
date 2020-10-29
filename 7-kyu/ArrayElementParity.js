/* In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. 
Your task will be to find that integer.
URL: https://www.codewars.com/kata/5a092d9e46d843b9db000064 */

const solve = arr => arr.find(value => !arr.includes(-value));
