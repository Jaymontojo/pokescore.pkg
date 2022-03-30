const PokeScore = {
  identity(val) {
    return val;
  },

  sanitize(input) {
    if(isNaN(input)) return input.toLowerCase();
    else return parseInt(input);
  },

  isString(idOrName) {
    if(typeof idOrName === "string") return true;
    else return false
  },

  isNumber(idOrName) {
    if(typeof idOrName === "number") return true;
    else return false
  }
};

module.exports = PokeScore;

