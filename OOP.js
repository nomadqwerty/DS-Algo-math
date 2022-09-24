// OOP, Object Oriented Programming is a programming paradigm which makes use of the concept of Objects to make code more maintainable and reuseable.
// OOP makes use of Objects to model software.
// in OOP we make use of classes.
// classes are Objects, these are special type of objects that act a blueprint. in this sense classes do not produce any value in the sense of i/o, but it is used to create other objects that perform i/o operations. these other objects are called instances. if classes are the blueprint then instances are the physical structure.

class BluePrint {
  constructor(data) {
    this.data = data;
  }
}
const physicalStructure = new BluePrint("data");

// there are 4 priciples in making of classes

// 1. Abstraction- in classes the lowlevel code implementation is hidden away. this makes it that complicated code can be used with out knowing how its implemented on a lowlevel. ie we do not know how event listeners work but we use them. this is the point of abstraction

//2. Encapsulation, this means keeping some properties and methods private to the class and not exposed as an API. there are parts of the class that we may not want to expose to external users, so we encapsulate them.

// 3. Inheritance, this is the ability for a class to extend its properties and methods to other classes, and visa vis. if we have class_A and we want to create a new class called class_B that works like class_A but it is needed for a more specific implementation of class_A, class_B would inherit from class_A. this helps keep code DRY.

// 4. Polymorphism, this is the ability of a class_B to inherit from class_A, and to also be able to modify the methods and the properties recieved from class_A.

class AnotherBlueprint extends BluePrint {
  constructor(someMoreData) {
    super();
    this.someMoreData = someMoreData;
  }
}

// OOP js: All Objects in javascript are linked to a particular prototype. All objects in js have a prototype. A prototype is like a parent object inwhich child objects linked to it can inherit properties and methods this is called prototypalinheritance. basically objects inherit methods and properties from the prototype. Prototype: is an original form or object that other objects are based off. this type of inheritance is different from a class inheriting from another class, this one is more like an instance inherirting from a class.

// classes are similar from prototypes, classes delegate behaviour to the instance, in js prototypes delegate behaviour to the linked Object.
// eg1
const myArr = new Array({ length: 5 }, () => "item");

// myArr's prototype is Array. and now myArr has all the properties Array has.
myArr.forEach((element) => {
  // console.log(element);
});
// forEach is a method(behaviour) of Array, because myArr is prototypally linked to Array, myArr can use forEach behaviour

// ways to link objects to prototype, and create new prototype
// constructor function. the constructor function is a way to create objects from a function. how array,maps,sets are implemented

// Es6 classes are syntactical sugar over the constructor function to make it more oop like. behind the scenes it works exactly like a constructor function.

// Object.create()

////////////////////////////////////
// constructor function:
// the constructor is jst a function. But its a special type because it serves a prototype.
// variable name of constructors should be in caps, lke in clases
// constructor function should be a normal function and not arrow function: because we need the this keyword.

const Proto = function (name, age) {
  this.name = name;
  this.age = age;
};

// when using constructor function we create instances intances of the constructor function using the new keyword

const instance = new Proto("papaJohn", 56);

console.log(instance instanceof Proto);
console.log(typeof instance);

// the new keyword is special for creating instances. it does this in 4 stages.
// 1. when constructor function is called with new keyword, a new object is created {}
// 2. it then assigns the "this" KW to store the new {}, this = {}
// 3. the {} is then linked to the prototype
// 4. the function returns the object
