/*Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
Your task is to make 'Past' function which returns time converted to milliseconds.
URL: https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a */
const past = (h, m, s) => h * 3600000 + m * 60000  + s * 1000;