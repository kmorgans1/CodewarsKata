/*In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. 
An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.
URL: www.codewars.com/kata/56b7f2f3f18876033f000307 */
const inAscOrder = arr => {
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] < arr[i-1]) {
        console.log(arr[i-1])
        return false;
      }
    }
    return true;
  }