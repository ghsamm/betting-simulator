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

export default Balance;
