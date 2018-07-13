const { World } = require('./world')
const { Empty } = require('./empty')

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
