const { Empty } = require("./empty");
const { Cell } = require("./cell");

class World {
  constructor(ejeAbscisas, ejeOrdenadas) {
    this.ejeAbscisas;
    this.ejeOrdenadas;

    this.world = this.createWorld(ejeAbscisas, ejeOrdenadas);
  }

  createWorld(ejeAbscisas, ejeOrdenadas) {
    return new Array(ejeAbscisas).fill(Array(ejeOrdenadas).fill(new Empty()));
  }

  filler() {
    this.world = [
                    [new Cell(), new Cell()], [new Cell(), new Cell()]
                ];
  }

  getSnapshot() {
    return this.world;
  }

  hasCell(coords) {
    return this.world[coords.x][coords.y] instanceof Cell;
  }

  addCell(aCell, coords) {
    this.world[coords.x][coords.y] = aCell;
  }
}

module.exports = {
  World
};
