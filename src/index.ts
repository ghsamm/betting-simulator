const rn = require("random-number");

class HistoryManager {
  public roundsSinceLastZero: number;
  constructor(size: number) {
    this.roundsSinceLastZero = 0;
  }
  push(el: number) {
    if (el === 0) {
      this.roundsSinceLastZero = 0;
    } else {
      this.roundsSinceLastZero++;
    }
  }
}

class Balance {
  public balance: number;
  public min: number;
  public max: number;

  constructor() {
    this.balance = 0;
    this.min = 0;
    this.max = 0;
  }

  add(amount: number) {
    this.balance += amount;
    this.max = Math.max(this.max, this.balance);
  }

  subtract(amount: number) {
    this.balance -= amount;
    this.min = Math.min(this.min, this.balance);
  }
}

class Bet {
  constructor(public balance: Balance, public history: HistoryManager) {}

  generate() {
    const number = rn({ min: 0, max: 36, integer: true });
    this.history.push(number);
    return number;
  }
  place(amount: number, target: number) {
    const number = this.generate();
    if (number === target) {
      this.balance.add(amount * 35);
    } else {
      this.balance.subtract(amount);
    }
  }
}

const targetNumber = 0;
const betAmount = 0.5;
const rounds = 1_000_000;

let betsPlaced = 0;

const bet = new Bet(new Balance(), new HistoryManager(20));

console.clear();

for (let i = 0; i < rounds; i++) {
  const roundsSinceLastZero = bet.history.roundsSinceLastZero;

  if (roundsSinceLastZero >= 100 && roundsSinceLastZero < 120) {
    bet.place(betAmount, targetNumber);
    betsPlaced++;
  } else {
    bet.generate();
  }
}

console.log(bet.balance, (betsPlaced / rounds) * 100 + "%");
