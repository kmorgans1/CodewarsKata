/*Given an integral number, determine if it's a square number.
URL: https://www.codewars.com/kata/54c27a33fb7da0db0100040e */
const isSquare = n => Math.sqrt(n) % 1 === 0 ? true : false;