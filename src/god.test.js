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

  it('creates a world', function () {
    const god = new God();
    const world = god.createWorld();

    expect(world.length).toEqual(3);
    expect(world[0].length).toEqual(3);
    expect(world[1].length).toEqual(3);
    expect(world[2].length).toEqual(3);
  });

  it('advances next generation', function () {
    const god = new God();
    const currentWorld = [
      [new Cell(), new Cell(), new Cell()],
      [new Cell(), new Cell(), new Cell()],
      [new Cell(), new Cell(), new Cell()]
    ];

    const nextWorld= god.mutateGeneration(currentWorld);

    // const expected = [
    //   [alive,     dead,        alive],
    //   [dead      , dead ,      dead],
    //   [alive, dead, alive]
    // ]

    expect(nextWorld[0][0].isAlive()).toBe(true);
    expect(nextWorld[0][1].isAlive()).toBe(false);
    expect(nextWorld[0][2].isAlive()).toBe(true);

    expect(nextWorld[1][0].isAlive()).toBe(true);
    expect(nextWorld[1][1].isAlive()).toBe(true);
    expect(nextWorld[1][2].isAlive()).toBe(true);

    expect(nextWorld[2][0].isAlive()).toBe(true);
    expect(nextWorld[2][1].isAlive()).toBe(true);
    expect(nextWorld[2][2].isAlive()).toBe(true);



  });

});
