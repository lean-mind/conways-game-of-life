class God {
  constructor() {}

  createWorldWithAliveCells(...cells) {
    cells[0].kill();
    return {};
  }

  mutateGeneration(world) {}
}

module.exports = {
  God
};
