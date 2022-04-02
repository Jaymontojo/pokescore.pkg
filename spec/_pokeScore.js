const PokeScore = require("../src/pokeScore");
const {pokemon, attacks, types} = require("../data/index");
const { expect } = require("chai");
//const { identity, sanitize, isString, isNumber, findPokemon } = new PokeScore;

describe("PokeScore", () => {
  describe("identity", () => {
    it('should exist as a method on the PokeScore object', () => {
      expect(PokeScore.identity).to.exist;
      expect(typeof PokeScore.identity).to.equal("function")
    });
  });

  describe("sanitize", () => {
    it('should exist as a method on the PokeScore object', () => {
      expect(PokeScore.sanitize).to.exist;
      expect(typeof PokeScore.sanitize).to.equal("function");
    });

    it('should take an input and return as string in lowercase if input is not a stringified number', () => {
      const result = PokeScore.sanitize("Philip J. Fry");
      expect(typeof result).to.equal("string");
      expect(result).to.equal("philip j. fry");
    });

    it('should take an input and return as parsed number if the input is a stringified number', () => {
      const result = PokeScore.sanitize("001");
      expect(typeof result).to.equal("number");
      expect(result).to.equal(1);
    });
  });

  describe("isString", () => {
    it('should exist as a method on the PokeScore object', () => {
      expect(PokeScore.isString).to.exist;
      expect(typeof PokeScore.isString).to.equal("function");
    });

    it('should take an input and return true if it is a string', () => {
      const result = PokeScore.isString("bulbasaur");
      expect(typeof result).to.equal("boolean");
      expect(result).to.equal(true);
    });

    it('should take an input and return false if it is not', () => {
      const result = PokeScore.isString(1456);
      expect(typeof result).to.equal("boolean");
      expect(result).to.equal(false);
    });
  });

  describe("isNumber", () => {
    it('should exist as a method on the PokeScore object', () => {
      expect(PokeScore.isString).to.exist;
      expect(typeof PokeScore.isString).to.equal("function");
    });

    it('should take an input and return true if it is a number', () => {
      const result = PokeScore.isNumber(11223);
      expect(typeof result).to.equal("boolean");
      expect(result).to.equal(true);
    });

    it('should take an input and return false if it is not', () => {
      const result = PokeScore.isNumber("Tauranga Leela");
      expect(typeof result).to.equal("boolean");
      expect(result).to.equal(false);
    });
  });

  describe("generateAtkTable", ()=> {
    beforeEach(()=>{
      PokeScore.generateAtkTable(attacks)
    })
    it('should exist as a method on the PokeScore Class', () => {
      expect(PokeScore.generateAtkTable).to.exist;
      expect(typeof PokeScore.generateAtkTable).to.equal("function");
    });

    it('should generate an attack table for lookups', () => {
      const actualLength = Object.keys(PokeScore.atkTable).length;
      const expectedLength = attacks.fast.length + attacks.special.length;
      expect(actualLength).to.equal(expectedLength);
    });
  });

  describe("findPokemon", ()=>{
    it('should exist as a method on the PokeScore object', () => {
      expect(PokeScore.findPokemon).to.exist;
      expect(typeof PokeScore.findPokemon).to.equal("function");
    });

    it('should return an array of pokemon objects when given a params object with id (integer)', () => {
      const result = PokeScore.findPokemon(pokemon, {id: 1});
      expect(result[0]).to.deep.equal(pokemon[0]);
    });

    it('should return an array of pokemon objects when given a params object with id (string)', () => {
      const result = PokeScore.findPokemon(pokemon, {id: "001"});
      expect(result[0]).to.deep.equal(pokemon[0]);
    });

    it('should return an array of pokemon objects when given a params object with name (string)', () => {
      const result = PokeScore.findPokemon(pokemon, {name: "bulbasaur"});
      expect(result[0]).to.deep.equal(pokemon[0]);
    });
  })
});