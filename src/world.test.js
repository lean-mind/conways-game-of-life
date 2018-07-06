class World {
  constructor (ejeAbscisas, ejeOrdenadas) {
    this.ejeAbscisas
    this.ejeOrdenadas

    this.world = this.createWorld(ejeAbscisas, ejeOrdenadas)
  }

  createWorld(ejeAbscisas, ejeOrdenadas) {
    return new Array(ejeAbscisas).fill(Array(ejeOrdenadas).fill(null))
  }

  filler () {
    this.world = [
      [new Cell(), new Cell()],
      [new Cell(), new Cell()]
    ]
  }

  getSnapshot () {
    return this.world
  }
}

class Cell {
  constructor () {}
}

describe("the world behavior", () => {
  describe("the creation", () => {
    it("creates an empty world of the given size", () => {
      const world = new World(4, 4)
      world1 = world
      expect(world.getSnapshot()).toEqual([
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
      ])
    })
    it("creates a world with cells", () => {
      const world = new World(4, 4)
      world.filler()
      const snapshot = world.getSnapshot()
      expect(snapshot).toHaveLength(4)
      snapshot.forEach(row => {
        expect(snapshot).toHaveLength(4)
        row.forEach(cell => {
          expect(cell).toBeInstanceOf(Cell)
        })
      })
      /*expect().toEqual([
        [null, null],
        [null, null]
      ])*/
    })
  })
})
