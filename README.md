# Poke-Score

---

Welcome! This is a library I made of utility functions that abstract some of the repetitive code that I found myself using in [sprint.rest](http://sprint.rest) The sprint, is copyright protected curriculum material of Code Chrysalis and this this package was built for students and instructors. 

# Getting Started

---

Begin by opening up your `node.js` project and navigate to the directory of the project you would like to add this library to.

**Insert the following code below into your terminal.**

```bash
npm i --save poke-score
```

R**equire it in the file you would like to use it.** (de-structuring? click here: [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#examples)!)

```jsx
const PokeScore = require("poke-score");

//I recommend destructuring out the methods you need.
const { sanitize, find } = PokeScore; 
```

# Documentation

---

## **Table of Contents**

- **[identity](https://www.notion.so/Poke-Score-b172e401e34b4bc3882495bfbc212149)**
- **isString**
- **isNumber**
- **sanitize**
- **find**

### identity

`identity` simply takes in any value and returns that value.

```jsx
const PokeScore = require("poke-score");
const { identity } = PokeScore; 

console.log(identity(5)) //expect the integer 5 to be returned.
```

### isString

`isString` takes in an input value and determines whether it is a string or not.

```jsx
const PokeScore = require("poke-score");
const { isString } = PokeScore; 

console.log(isString("philip j. fry")) //expect the boolean true to be returned.
```

### isNumber

`isNumber` takes in an input value and determines whether it is a number or not.

```jsx
const PokeScore = require("poke-score");
const { isNumber } = PokeScore; 

console.log(isNumber(5)) //expect the boolean true to be returned.
```

### **sanitize**

`sanitize` takes in a value and if it is a stringified number, it will return it parsed as an integer. If the value is a string(isNaN) then it returns the string as a lowercased value.

```jsx
const PokeScore = require("poke-score");
const { identity } = PokeScore; 

console.log(sanitize("005")) //expect the integer 5 to be returned.

console.log(sanitize("oK bOoMeR")) //expect the string "ok boomer" to be returned.
```

### find

`find` simply takes in any value and returns that value.

```jsx
const PokeScore = require("poke-score");
const pokemon = [...{...]] //a collection of pokemon objects
const { find } = PokeScore; 

console.log(find(pokemon, mew) //expect the pokemon object for Mew to be returned.

console.log(find(pokemon, 1) //expect the pokemon object for Bulbasaur to be returned.
```

# Contributors Corner

---

Apologies! this area is still under construction. If you are interested in contributing to this project or notice a bug, please reach out by creating a [**new issue**](https://github.com/Jaymontojo/pokescore.pkg/issues) in the repository!


