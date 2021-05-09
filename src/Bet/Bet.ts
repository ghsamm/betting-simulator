import Balance from "../Balance";
import HistoryManager from "../HistoryManager";

const rn = require("random-number");

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

export default Bet;
