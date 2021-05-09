import WaitForRareStreak from "./strategies/WaitForRareStreak";

const waitForRareStreak = new WaitForRareStreak({
  targetNumber: 0,
  betAmount: 1,
  rounds: 10 ** 2,
  startBettingAt: 40,
  stopBettingAt: 70
});

waitForRareStreak.run();

console.clear();
console.log(waitForRareStreak.getReport());
