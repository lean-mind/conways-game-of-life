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
  it("with too much mitosis it dies", () => {
    const cell = new Cell();

    cell.mitosis()
    cell.mitosis()
    cell.mitosis()
    cell.mitosis()
    expect(cell.iWillBeAlive()).toBe(false);
  });
  it("with too low mitosis it dies", () => {
    const cell = new Cell();

    cell.mitosis()
    expect(cell.iWillBeAlive()).toBe(false);
  });
  it("with a balanced mitosis it dies", () => {
    const cell = new Cell();

    cell.mitosis()
    cell.mitosis()
    expect(cell.iWillBeAlive()).toBe(true);
  });
  it("with dead neighbours it dies", () => {
    const cell = new Cell();

    cell.mitosis()
    cell.mitosis().kill()

    expect(cell.iWillBeAlive()).toBe(false);
  });
});
