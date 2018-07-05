class World {
  constructor () {
  }

  getSnapshot () {
    return [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }
}

describe("the world behavior", () => {
  describe("the creation", () => {
    let world;
    beforeEach(() => {
      world = new World()
    })
    it("creates an empty world", () => {
      expect(world.getSnapshot()).toEqual([
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ])
    })
  })
})
