const { World } = require("./world");

class God {
  constructor() {}

  createWorldWithAliveCells(...cells) {
    cells[0].kill();
    return {};
  }

  mutateGeneration(world) {}

  createWorld(ejeAbscisas, ejeOrdenadas) {
    return new World(ejeAbscisas, ejeOrdenadas)
  }
}

module.exports = {
  God
};
