//refac: convert to typescript
class PokeScore {
  constructor(){
    this.atkTable = {};
  }
  identity(val) {
    return val;
  };
  //refac: private to this class so maybe extend from a utils class(?)
  sanitize(input) {
    if(isNaN(input)) return input.toLowerCase(); //"philip j. fry"
    else return parseInt(input);
  };

  //refac: private to this class so maybe extend from a utils class
  isString(idOrName) {
    if(typeof idOrName === "string") return true;
    else return false
  };

  //refac: private to this class so maybe extend from a utils class
  isNumber(idOrName) {
    if(typeof idOrName === "number") return true;
    else return false
  };

  generateAtkTable(collection) {
    for(let attackType in collection) {
      collection[attackType].forEach( attack => {
        const name = attack.name.toLowerCase();
        if(!this.atkTable[name]) this.atkTable[name] = attackType;
      });
    };
  };

  //NOTE: This will not be able to find 
  findAttack(collection, paramsObj) {
    if(!Object.keys(this.atkTable).length) {
      this.generateAtkTable(collection);
    };
    const pKey = Object.keys(paramsObj)[0];
    const pVal = this.sanitize(paramsObj[pKey]);
    const atkType = this.atkTable[pVal];
    return collection[atkType].filter(attack => attack[pKey].toLowerCase() === pVal);
  };

  findPokemon(collection, paramsObj) {
    const pKey = Object.keys(paramsObj)[0];
    const pVal = this.sanitize(paramsObj[pKey])
    if(this.isString(pVal)) {
      return collection.filter(el => el[pKey].toLowerCase() === pVal);
    }; 
    if(this.isNumber(pVal)) {
      return collection.filter(el => parseInt(el[pKey]) === pVal);
    };
    return undefined;
  };
};

module.exports = new PokeScore();

