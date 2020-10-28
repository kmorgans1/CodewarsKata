/* Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table.
URL: https://www.codewars.com/kata/568dc014440f03b13900001d */

const getDrinkByProfession = job => {
    switch (job.toLowerCase()) {
    case 'jabroni':
      return 'Patron Tequila';
      break;
    case 'school counselor':
      return 'Anything with Alcohol';
      break;
    case 'programmer':
      return 'Hipster Craft Beer';
      break;
    case 'bike gang member':
      return 'Moonshine';
      break;
    case 'programmer':
      return 'Hipster Craft Beer';
      break;
    case 'politician':
      return 'Your tax dollars';
      break;
    case 'rapper':
      return 'Cristal';
      break;
    default:
      return 'Beer';
    }
  }