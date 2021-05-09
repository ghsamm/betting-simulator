import Bet from "./Bet";
import Balance from "./Balance";
import HistoryManager from "./HistoryManager";

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
