import Strategy from "./Strategy";

interface Args {
  targetNumber: number;
  betAmount: number;
  rounds: number;
  startBettingAt: number;
  stopBettingAt: number;
}

class WaitForRareStreak extends Strategy {
  public betsPlaced: number = 0;
  public startBettingAt: number;
  public stopBettingAt: number;

  constructor({
    targetNumber,
    betAmount,
    rounds,
    startBettingAt,
    stopBettingAt
  }: Args) {
    super(targetNumber, betAmount, rounds);
    this.startBettingAt = startBettingAt;
    this.stopBettingAt = stopBettingAt;
  }

  runRound() {
    const roundsSinceLastZero = this.bet.history.roundsSinceLastZero;
    if (
      roundsSinceLastZero >= this.startBettingAt &&
      roundsSinceLastZero < this.stopBettingAt
    ) {
      this.bet.place(this.betAmount, this.targetNumber);
      this.betsPlaced++;
    } else {
      this.bet.generate();
    }
  }

  getReport() {
    const report = {
      rounds: this.rounds,
      betsPlaced: this.betsPlaced,
      roundsPlayed: ((this.betsPlaced / this.rounds) * 100)
        .toFixed(2)
        .concat("%"),
      balance: {
        balance: this.balance.balance,
        min: this.balance.min,
        max: this.balance.max
      }
    };

    return report;
  }
}

export default WaitForRareStreak;
