const { God } = require("./god");
const { Cell } = require("./cell");

describe("the god behavior", () => {
  it("says that three neighbour alive cells die because of overpopulation", () => {
    const god = new God();
    const aCell = Cell.born();
    expect(aCell.isAlive()).toBeTruthy();
    const world = god.createWorldWithAliveCells(
      aCell,
      new Cell(),
      new Cell(),
      new Cell()
    );

    god.mutateGeneration(world);

    expect(aCell.isAlive()).toBeFalsy();
  });

  it('creates a world', function () {
    // Arrange
    const god = new God();
    const world =god.createWorld();

    // Expect
    expect(world.length).toEqual(4);
    expect(world[0].length).toEqual(4);
    expect(world[1].length).toEqual(4);
    expect(world[2].length).toEqual(4);
    expect(world[3].length).toEqual(4);

  });

});
