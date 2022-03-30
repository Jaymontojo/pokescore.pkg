const PokeScore = require("../src/pokeScore");
const { expect } = require("chai");
const { identity, sanitize } = PokeScore;

describe("PokeScore", () => {
  describe("identity", () => {
    it('should exist as a method on the PokeScore object', () => {
      expect(identity).to.exist;
      expect(typeof identity).to.equal("function")
    });
  });

  describe("sanitize", () => {
    it('should exist as a method on the PokeScore object', () => {
      expect(sanitize).to.exist;
      expect(typeof sanitize).to.equal("function");
    });

    it('should take an input and return as string in lowercase if input is not a stringified number', () => {
      const result = sanitize("Philip J. Fry");
      expect(typeof result).to.equal("string");
      expect(result).to.equal("philip j. fry");
    });

    it('should take an input and return as parsed number if the input is a stringified number', () => {
      const result = sanitize("001");
      expect(typeof result).to.equal("number");
      expect(result).to.equal(1);
    });
  })
})