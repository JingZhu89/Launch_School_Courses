function makeAccount(number) {
  let balance = 0;
  let transctions = []
  return {
    number() {
      return number;
    },
    balance() {
      return balance;
    },
    transactions() {
      return transctions;
    },
    transctions: [],
    deposit(num) {
      balance += num;
      transctions.push({type: "deposit", amount: num});
      return num;
    },

    withdraw(num) {
      let amountWithdrawn = Math.min(num, balance)
      balance -= amountWithdrawn;
      transctions.push({type: "withdraw", amount: amountWithdrawn});
      return amountWithdrawn;
    }
  }
}

function makeBank() {
  let accountNum = 101;
  let accounts = [];
  return {
    openAccount() {
      let newAccount = makeAccount(accountNum);
      accountNum += 1;
      accounts.push(newAccount);
      return newAccount;
    },
    transfer(source, destination, amount) {
      transferedAmount = source.withdraw(amount);
      destination.deposit(transferedAmount);
      return transferedAmount
    }
  }
}

let bank = makeBank();
let account = bank.openAccount();
console.log(account.balance());
// 0
console.log(account.deposit(17));
// 17
let secondAccount = bank.openAccount();
console.log(secondAccount.number());
// 102
console.log(account.transactions());
// [{...}]

