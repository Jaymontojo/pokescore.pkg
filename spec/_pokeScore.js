const PokeScore = require("../src/pokeScore");
const { expect } = require("chai");
const { identity, sanitize, isString } = PokeScore;

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
  });

  describe("isString", () => {
    it('should exist as a method on the PokeScore object', () => {
      expect(isString).to.exist;
      expect(typeof isString).to.equal("function");
    });

    it('should take an input and return true if it is a string', () => {
      const result = isString("bulbasaur");
      expect(typeof result).to.equal("boolean");
      expect(result).to.equal(true);
    });
    it('should take an input and return false if it is not', () => {
      const result = isString(1456);
      expect(typeof result).to.equal("boolean");
      expect(result).to.equal(false);
    });
  })
})