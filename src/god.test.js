const { God } = require("./god");
const { Cell } = require("./cell");

describe("the god behavior", () => {
  it("says that three neighbour alive cells die because of overpopulation", () => {
    const god = new God();
    const aCell = Cell.born();
    expect(aCell.isAlive()).toBeTruthy();
    const world = god.createWorldWithAliveCells(
      aCell,
      aCell.mitosis(),
      aCell.mitosis(),
      aCell.mitosis()
    );

    god.mutateGeneration(world);

    expect(aCell.isAlive()).toBeFalsy();
  });
});
