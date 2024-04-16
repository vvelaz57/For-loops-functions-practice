
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  // Your code goes here...
  var arraySum = 0;
  for (var i = 0; i < array.length; i++) {
    arraySum = arraySum + array[i];
  }
  return arraySum / array.length;
}


/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of 
 * any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

export function getStringSum(str) {
  // Your code goes here...
  var stringSum = 0;
  for (var i = 0; i < str.length; i++) {
    if (Number.isInteger(Number.parseFloat(str[i]))) {
     stringSum = stringSum + Number.parseFloat(str[i]);
    }
  }
  return stringSum;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
