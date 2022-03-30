const PokeScore = {
  identity(val) {
    return val;
  },

  sanitize(input) {
    if(isNaN(input)) return input.toLowerCase();
    else return parseInt(input);
  }
};

module.exports = PokeScore;

