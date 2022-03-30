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
  },

  find(collection, idOrName){
    let result;
    if(PokeScore.isString(idOrName)) {
      result = collection.filter(el => el.name.toLowerCase() === idOrName);
    } else if(PokeScore.isNumber(idOrName)){
      result = collection.filter(el => parseInt(el.id) === idOrName);
    }
    return result[0];
  }
};

module.exports = PokeScore;

