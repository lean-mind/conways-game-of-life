const { Cell } = require("./cell");

class God {
  constructor() {
    this.cells = [];
  }

  createWorldWithAliveCells(...cells) {
    cells[0].kill();
    return {};
  }

  createIsolatedCell() {
    const cell = new Cell();
    this.cells.push(cell);
    return cell;
  }

  createNeighbour(cell) {
    return this.createIsolatedCell();
  }

  nextGeneration() {
    const cell = this.cells[0];
    if (this.cells.length > 3) {
      cell.kill();
    }
  }
}

module.exports = {
  God
};
