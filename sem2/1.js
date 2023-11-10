/*
Задание 1: 
Давайте создадим класс для управления банковским счетом. В этом классе будет 
приватное свойство для хранения текущего баланса, а также методы для внесения 
и снятия денег со счета.
Необходимо реализовать класс BankAccount, в нем:
1. Приватное свойство #balance, которое инициализируется значением 0 и 
представляет собой текущий баланс счета.
2. Геттер balance, который позволит получить информацию о текущем балансе.
3. Метод deposit(amount), который позволит вносить средства на счет. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, в противном случае 
выбрасывайте соответствующую ошибку.
4. Метод withdraw(amount), который позволит снимать средства со счета. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, и сумма снятия 
не может превышать текущий баланс аккаунта в противном случае выбрасывайте 
соответствующую ошибку.
*/

class BankAccount {
  #balance = 0;

  deposite(amount) {
    validateMoney(amount);
    this.#balance += amount;
  }

  get balance() {
    return this.#balance;
  }

  withdraw(amount) {
    validateMoney(amount);
    if (this.#balance < amount) {
      throw new Error(`Insufficient funds in account `);
    }
    this.#balance -= amount;
  }
}

function validateMoney(amount) {
  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error("Wrong deposite amount,must be a positive number");
  }
  const lastPart = amount.toString().split(".")[1];
  if (lastPart && lastPart.lenght > 2) {
    throw new Error("Wrong money format");
  }
}

const bank = new BankAccount();

bank.deposite(100);
console.log(bank.balance);
bank.withdraw(600);
console.log(bank.balance);
