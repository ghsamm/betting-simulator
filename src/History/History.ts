class History {
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

export default History;
