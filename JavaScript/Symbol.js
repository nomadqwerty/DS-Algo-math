const unq = Symbol.for("keyGen");

console.log(Symbol.keyFor(unq) === "keyGen");

console.log(Object.getOwnPropertySymbols({}));

// symbol.hasInstance, well-known symbol, used to determine if a contructor object is an instance of another object.

class Array1 {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}

console.log([] instanceof Array1);
console.log({} instanceof Object);
console.log("class", Array1[Symbol.hasInstance]([]));
// .isConcatSpreadable
const a = ["q", "w", "e"];
const num = [1, 3, 4, 5];

let aNum = a.concat(num);
console.log(aNum);

// make an array that cannot be concatenated to another array by setting .isConcatSpreadable option on Symbol to false

num[Symbol.isConcatSpreadable] = false;

aNum = a.concat(num);

console.log(aNum);
