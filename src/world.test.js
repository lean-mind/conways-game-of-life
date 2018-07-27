const { God } = require('./god')
const { World } = require('./world')
const { Empty } = require('./empty')
const { Cell } = require('./cell')

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

  it("creates a cell on given coords", () => {
    const god = new God();
    const coords = {x: 10, y: 10};
    const aCell = Cell.born();
    const world = god.createWorld(20, 20);

    world.addCell(aCell, coords);

    expect(world.hasCell(coords)).toBeTruthy();
    expect(world.hasCell({x: 15, y: 15})).toBeFalsy();
  });

});
