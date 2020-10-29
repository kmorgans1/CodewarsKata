/* You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!
Therefore you need a method, which returns the smallest unused ID for your next new data item...

URL: https://www.codewars.com/kata/55eea63119278d571d00006a */

const nextId = ids => {
    let i = 0;
    while (ids.includes(i)) {
      i++
    }
    return i;
  }
  