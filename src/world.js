const { Empty } = require("./empty");

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
    this.world = [[new Cell(), new Cell()], [new Cell(), new Cell()]];
  }

  getSnapshot() {
    return this.world;
  }
}

module.exports = {
  World
};
