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

//////////////////////////////////////////////////
//iterator and generators
// iterators are objects that help return or expose properties one by one from another object,
// generators are syntactical sugar to make using iterators easier

// use * after function to build generators
// use yield to yield a value to the generator from another object.
const gen = function* () {
  yield "a";
};

const iterate = gen();

// the iter is a generator function whic has an inbuilt method called next(), the method triggers the yield to return what ever values was given to the generator.
// in the generator fucn we can return values from an object that

let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
let arr = [1, 2, 3, 4];
const genny = function* () {
  yield obj.a;
  yield obj.b;
  yield obj.c;
  yield obj.d;
  let i = 0;
  yield arr[i];
  i++;
  yield arr[i];
  i++;
  yield arr[i];
  i++;
  yield arr[i];
  i++;
};
let iter = genny();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

let nonIter = {
  a: 1,
  b: 2,
  c: 3,
};

let count = -1;
let iterObj = {
  [Symbol.iterator]: function () {
    return {
      next: () => {
        count++;
        switch (count) {
          case 0:
            return {
              value: nonIter.a,
              done: false,
            };
          case 1:
            return {
              value: nonIter.b,
              done: false,
            };
          case 2:
            return {
              value: nonIter.c,
              done: false,
            };
          case 3:
            return {
              value: undefined,
              done: true,
            };
          default:
            return {
              value: undefined,
              done: true,
            };
        }
      },
    };
  },
};

let data = iterObj[Symbol.iterator]();

console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());

///////////////////////////////////////////////////////////
// symbol.iterator
