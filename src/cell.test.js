const { God } = require("./god");
const { Cell } = require("./cell");

describe("the cell behavior", () => {
  it("dies because of overpopulation", () => {
    const god = new God();

    const cell = god.createIsolatedCell();
    god.createNeighbour(cell);
    god.createNeighbour(cell);
    god.createNeighbour(cell);

    god.nextGeneration();

    expect(cell.isAlive()).toBeFalsy();
  });

  it("survives because of enough population", () => {
    const god = new God();

    const cell = god.createIsolatedCell();
    god.createNeighbour(cell);
    god.createNeighbour(cell);

    god.nextGeneration();

    expect(cell.isAlive()).toBeTruthy();
  });

  it("dies because of enough population as cells are not neighbours", () => {
    const god = new God();

    const cell = god.createIsolatedCell();

    god.nextGeneration();

    expect(cell.isAlive()).toBeFalsy();
  });

  it("is alive on its creation", () => {
    const cell = new Cell();

    expect(cell.isAlive()).toBe(true);
  });

  it("can be killed", () => {
    const cell = new Cell();

    cell.kill();

    expect(cell.isAlive()).toBe(false);
  });

  it("can be revived", () => {
    const cell = new Cell();

    cell.kill();
    cell.revive();

    expect(cell.isAlive()).toBe(true);
  });

  xit("can create neighbour when it's dead", () => {
    const cell = new Cell();

    cell.kill();

    cell.createNeighbour();

    // ??? expect what?
  });

  xit("dies because of overpopulation", () => {
    const cell = new Cell();

    const neighbour = cell.createNeighbour();
    expect(neighbour.isAlive()).toBeFalsy();
    neighbour.createNeighbour();
    neighbour.createNeighbour();
    neighbour.createNeighbour();

    expect(neighbour.isAlive()).toBeFalsy();
  });

  xit("with too low mitosis it dies", () => {
    const cell = new Cell();

    cell.createNeighbour();

    expect(cell.willISurvive()).toBe(false);
  });

  xit("with a balanced mitosis it dies", () => {
    const cell = new Cell();

    cell.createNeighbour();
    cell.createNeighbour();

    expect(cell.willISurvive()).toBe(true);
  });

  xit("with dead neighbours it dies", () => {
    const cell = new Cell();

    cell.createNeighbour();
    cell.createNeighbour().kill();

    expect(cell.willISurvive()).toBe(false);
  });
});
