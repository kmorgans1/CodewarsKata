/* Given two arrays of strings, return the number of times each string of the second array appears in the first array.
URL: www.codewars.com/kata/59ca8e8e1a68b7de740001f4*/
const solve = (a, b) => b.map(value => a.filter(v => v === value).length);
