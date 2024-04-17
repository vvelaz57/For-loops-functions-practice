// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  // Your code goes here...
  let arrayMin;
  for (let value of array) {
    const isMinValue = !arrayMin;
    const isLessThan = arrayMin && value < arrayMin;

    if (isMinValue || isLessThan) {
      arrayMin = value;
    }
  }
  return arrayMin;
}

export function findMaxValueInArray(array) {
  // Your code goes here...
  let arrayMax;
  for (let value of array) {
    const isMaxValue = !arrayMax;
    const isGreaterThan = arrayMax && value > arrayMax;

    if (isMaxValue || isGreaterThan) {
      arrayMax = value;
    }
  }
  return arrayMax;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
