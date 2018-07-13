const { Cell } = require("./cell");

describe("the cell behavior", () => {
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
});
