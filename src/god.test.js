const { God } = require("./god");
const { Cell } = require("./cell");

describe("the god behavior", () => {

  it("each cell with one or no neighbors dies, as if by solitude.", () => {

  });

  it("each cell with four or more neighbors dies, as if by overpopulation.", () => {
    const god = new God();
    const aCell = Cell.born();
    expect(aCell.isAlive()).toBeTruthy();
    const world = god.createWorldWithAliveCells(
      aCell,
      aCell.mitosis(),
      aCell.mitosis(),
      aCell.mitosis(),
      aCell.mitosis()

    );

    god.mutateGeneration(world);

    expect(aCell.isAlive()).toBeFalsy();
  });

  it("each cell with two or three neighbors survives.", () => {

  });

});
