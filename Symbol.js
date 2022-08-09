const unq = Symbol.for("keyGen")

console.log(Symbol.keyFor(unq)==="keyGen")

console.log(Object.getOwnPropertySymbols({}))