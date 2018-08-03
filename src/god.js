const { Cell } = require("./cell");

class God {
  constructor() {}

  createWorldWithAliveCells(...cells) {
    cells[0].kill();
    return {};
  }

  createWorld() {
    return [
      [new Cell(), new Cell(), new Cell()],
      [new Cell(), new Cell(), new Cell()],
      [new Cell(), new Cell(), new Cell()]
    ]
  }

  mutateGeneration(world) {

  }
}

module.exports = {
  God
};
