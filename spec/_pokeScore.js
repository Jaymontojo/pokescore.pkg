const PokeScore = require("../src/pokeScore");
const { expect } = require("chai");
const { identity } = PokeScore;

describe("PokeScore", () => {
  describe("identity", () => {
    it('should exist as a method on the PokeScore object', () => {
      expect(identity).to.exist;
      expect(typeof identity).to.equal("function")
    })
  })
})