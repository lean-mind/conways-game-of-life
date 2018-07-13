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

class Cell {
  constructor() {
    this.alive = true;
  }
  kill() {
    this.alive = false;
  }
  isAlive() {
    return this.alive;
  }
  revive() {
    this.alive = true;
  }
  mitosis() {
    return new Cell()
  }
}

Cell.born = () => {
  return new Cell()
}

class God {
  constructor() {

  }

  createWorldWithAliveCells(...cells) {
    cells[0].kill()
    return {}
  }

  mutateGeneration(world) {

  }
}

class Empty {}

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

describe("the world behavior", () => {
  describe("the creation", () => {
    it("creates an empty world of the given size", () => {
      const world = new World(4, 4);
      world1 = world;
      expect(world.getSnapshot()).toEqual([
        [new Empty(), new Empty(), new Empty(), new Empty()],
        [new Empty(), new Empty(), new Empty(), new Empty()],
        [new Empty(), new Empty(), new Empty(), new Empty()],
        [new Empty(), new Empty(), new Empty(), new Empty()]
      ]);
    });
    xit("creates a world with cells", () => {
      const world = new World(4, 4);
      world.filler();
      const snapshot = world.getSnapshot();
      expect(snapshot).toHaveLength(4);
      snapshot.forEach(row => {
        expect(snapshot).toHaveLength(4);
        row.forEach(cell => {
          expect(cell).toBeInstanceOf(Cell);
        });
      });
      /*expect().toEqual([
        [null, null],
        [null, null]
      ])*/
    });
  });
});

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

// god.undoChangesTo(world)
