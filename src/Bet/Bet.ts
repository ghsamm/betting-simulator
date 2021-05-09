import Balance from "../Balance";
import History from "../History";

const rn = require("random-number");

class Bet {
  constructor(
    public balance: Balance,
    public history: History,
    private wheelSlots: number,
    private winningMultiplier: number
  ) {}

  generate() {
    const number = rn({ min: 0, max: this.wheelSlots, integer: true });
    this.history.push(number);
    return number;
  }
  place(amount: number, target: number) {
    const number = this.generate();
    if (number === target) {
      this.balance.add(amount * this.winningMultiplier);
    } else {
      this.balance.subtract(amount);
    }
  }
}

export default Bet;
