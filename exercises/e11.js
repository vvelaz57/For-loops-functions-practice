// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  let withdrawalSumsPerClient = [];
  for (let bankAccount of array) {
    const withdrawals = bankAccount.withdrawals;
    let withdrawalSum = 0;

    if (!withdrawals) {
      withdrawalSumsPerClient.push(withdrawalSum);
    } else {
      for (let i = 0; i < withdrawals.length; i++) {
        withdrawalSum = withdrawalSum + withdrawals[i];
      }
      withdrawalSumsPerClient.push(withdrawalSum);
    }
  }

  return withdrawalSumsPerClient;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
