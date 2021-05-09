import Balance from "../Balance";
import Bet from "../Bet";
import History from "../History";

abstract class Strategy {
  protected balance: Balance;
  protected history: History;
  protected bet: Bet;

  constructor(
    public targetNumber: number,
    public betAmount: number,
    public rounds: number
  ) {
    this.balance = new Balance();
    this.history = new History(20);
    this.bet = new Bet(this.balance, this.history, 37, 35);
  }

  abstract runRound(): void;

  run() {
    for (let i = 0; i < this.rounds; i++) {
      this.runRound();
    }
  }
}

export default Strategy;
