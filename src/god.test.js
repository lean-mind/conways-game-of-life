const { God } = require("./god");
const { Cell } = require("./cell");

describe("the god behavior", () => {

  describe("the cell behavior on the world", () => {
    let god;
    let aCell;

    beforeEach(() => {
      god = new God();
      aCell = Cell.born();
      expect(aCell.isAlive()).toBeTruthy();
    });

    it("each cell with one or no neighbors dies, as if by solitude.", () => {
      const world = god.createWorldWithAliveCells(
        aCell,
        aCell.mitosis()
      );

      expect(aCell.isAlive()).toBeTruthy();
    });

    it("each cell with four or more neighbors dies, as if by overpopulation.", () => {
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



});
