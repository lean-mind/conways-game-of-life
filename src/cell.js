class Cell {
  constructor() {
    this.alive = true;
    this.neighborhood = []
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

  willISurvive () {
    let aliveNeighbours = 0

    this.neighborhood.forEach(cell => {
      if (cell.isAlive()) {
        aliveNeighbours += 1
      }
    })

    if (aliveNeighbours === 2 || aliveNeighbours === 3) {
      return true
    }
    return false
  }
}

Cell.born = () => {
  return new Cell();
};

module.exports = {
  Cell
};
