class Cell {
  constructor() {
    this.alive = true;
  }
  kill() {
    this.alive = false;
  }
  isAlive() {
    return this.alive;
  }
  revive() {
    this.alive = true;
  }
  mitosis() {
    return new Cell();
  }
}

Cell.born = () => {
  return new Cell();
};

module.exports = {
  Cell
};
