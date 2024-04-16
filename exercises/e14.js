
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let clientsWithWrongBalance = [];
  
  for (let i = 0; i < array.length; i++) {
    let depositSums = 0;
    let withdrawalSums = 0;
    
    if (array[i].deposits) {
      for (let e = 0; e < array[i].deposits.length; e++) {
        depositSums = depositSums + array[i].deposits[e]; 
      } 
    }

    if (array[i].withdrawals) {
      for (let a = 0; a < array[i].withdrawals.length; a++) {
        withdrawalSums = withdrawalSums + array[i].withdrawals[a];
      }
    }
    let difference = depositSums - withdrawalSums;

    if (array[i].balance !== difference) {
      clientsWithWrongBalance.push(array[i]);
    }
  }
  
  return clientsWithWrongBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
