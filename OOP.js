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

// 1. Abstraction- in classes the lowlevel code implementation is hidden away. this makes it that complicated code can be used with out knowing how its implemented on a lowlevel. ie we do not know how event listeners work but we use them. this is the point of abstraction.

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
// the constructor is jst a function. But its a special type because it serves as a prototype.
// variable name of constructors should be in caps, lke in clases
// constructor function should be a normal function and not arrow function: because we need the this keyword.

const Proto = function (name, age) {
  this.name = name;
  this.age = age;
};

// when calling constructor function we  can create intances of the constructor function using the new keyword

const instance = new Proto("papaJohn", 1960);

console.log(instance instanceof Proto);
console.log(typeof instance);

// the new keyword is special for creating instances. it does this in 4 stages.
// 1. when constructor function is called with new keyword, a new object is created {}
// 2. it then assigns the "this" KW to store the new {}, this = {}
// 3. the {} is then linked to the prototype
// 4. the function returns the object (this)

//////
// prototypes
// every fucntion in javascript has a prototype. also every object
// the Prototype of a constuctor function is the parent to the constructor. the prototype of instances are their constructors

// Prototype property on a costructor is an object that holds the constructor, and holds a reference to its instances(children)
// we can also add methods to a constructor through the prototype props
Proto.prototype.calcAge = function () {
  return 2022 - this.age;
};
console.log(Proto.prototype);

// any method defined through the constructor is available to instances of the prototype because of prototypal inheritance. the this keyword is set to the object calling the method.
console.log(instance.calcAge());

// prototype look up, be able to find the prototype instances are linked to.
// instances objects have a property called __proto__, this points to the parent prototype constructor. the link to its prototype
console.log(instance.__proto__);
// keep in mind the proto of instances are the same as the prototype property on the constructor.
console.log(instance.__proto__ === Proto.prototype);
// the prototype property is only used for instances that will be created from the constructor function(the children).
// this means the constructor has its own prototype(parent), meaning a parent prototype the constructor is linked to
console.log(Proto.__proto__ === instance.__proto__);
// its confusing, but look at it like this,

// Fn is a constructor function, a parent
// const Fn = function (name) {
//   this.name = name;
// };

// // instanceOfFn is an instance of Fn, a child
// const instanceOfFn = new Fn("child");

// // instanceOfFn goes for dna test to find its parent
// instanceOfFn.__proto__;
// // instanceOfFn now knows its parent is Fn

// // Fn also goes for a dna test to find out if instanceOfFn is its child.
// Fn.prototype;

// instanceOfFn.__proto__ === Fn.prototype;
// // Fn now Knows its child is instanceOfFn

// // which lives the question. who is Fn's parent?
// // Fn goes for dna check to find its parent
// Fn.__proto__;

// // now Fn's parent cant be the parent of InstanceOfFn, that will make it a grand parent.
// Fn.__proto__ !== instanceOfFn.__proto__;

// console.log([].__proto__ == Array.prototype);

// // we can also add properties through the prototype property

// Proto.prototype.gender = "Male";

// // the cactch is that it wont be an owned property, owned properties are properties that are directly defined on an constructor.

// // because gender was not directly assigned to Proto it wont be an owned property.
// console.log(instance.hasOwnProperty("gender"));
// // compared to an owned property.
// console.log(instance.hasOwnProperty("name"));

// console.log(Proto.__proto__);
// console.log(Object.prototype === Proto.__proto__);

// // parent prototype of constructor is function object
// console.log((() => {}).__proto__ === Proto.__proto__);

// // the original an firt proto is an object, every thing in javaScript inherits from the Object prototype.
// console.log(Proto.__proto__.__proto__);
// console.log(Object.create({}).__proto__.__proto__);

// the prototype mechanism is usefull for making reusable code.

// const arr = [1, 2, 3];

// console.log(arr.__proto__);

// console.log(document.body.__proto__);
// Portotypal inheritance of built in Objects.
// check Parent protoype of an object with the __proto__ property. if result is null then you jxt met the first generation Portotype(So show some respect)

const obj = {};
console.log(Object.prototype);
console.log(obj.__proto__ === Object.prototype);
Object.freeze(obj);

console.log((obj.a = "a"));

console.log(obj);

// class, syntactic sugar over constructors.

const Cons = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getAccountNum() {
    alert();
  }
};

Cons.prototype.height = 180;

Cons.prototype.getId = function () {
  return {
    name: this.name,
    age: this.age,
    height: this.height,
  };
};

const inst = new Cons("john", 21);
console.log(inst.getId());

console.log("/////////////////////////////////////////////////////////////");
// setter and getter.
const Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // get function: this is used to get a value as in the get function was a property and not a method(function)
  // getter function are functions becausde they give the ability to perform some computations before the value is returned
  get individualData() {
    return {
      name: this.name,
      age: this.age,
      height: this._height,
    };
  }
  //setters are used to set properties on an object.
  // its a function that gives the ability to perform certain operations on a property before settin it
  // set needs atleast ine arg. the val to set
  // when setting property, specify the _, ie this._email=''
  set height(val) {
    this._height = val * 0.01 + " meters";
  }

  // static methods are methods that not inherited, by the children. these methods are defined only on the parent constructor and not through the prototype property.
  // create static methods with the static keyword.
  static getParent() {
    return this.__proto__;
  }
};

const john = new Person("john buscoe", 45);

// getter func
console.log(john.individualData);
// setter func
john._height = "185";

// static
console.log(Person.getParent());
// john.getParent();

console.log(
  "//////////////////////////Object,create()///////////////////////////"
);

// the object create method is used to a new Obejct that inherits from a specified object or constructor
const vicent = Object.create(Person.prototype);
console.log(vicent);
vicent.name = "vincent";
vicent.age = 45;
vicent.height = 200;
console.log(vicent.individualData);
console.log(vicent.__proto__);

// from Objects
let objProt = {
  parent() {
    return this.__proto__;
  },
};

const a = Object.create(objProt);
console.log(a.parent());

// inheritance between constructor functions.
// make one constructor inherit from constructor

const Human = function (name, age) {
  this.name = name;
  this.age = age;
};

Human.prototype.greet = function () {
  console.log(`hello ${this.name}, i see you are ${this.age} years old`);
  if (this.matric && this.department) {
    console.log(
      `and I also see you are a student with id ${this.matric} and you study ${this.department}`
    );
  }
};
const student = function (matric, department, name, age) {
  // make student constructor inherite properties and methods from Human constructor
  Human.call(this, name, age);
  this.matric = matric;
  this.department = department;
};
// link student prototype to human prototype
student.prototype = Object.create(Human.prototype);
student.prototype.constructor = student;

const bill = new student("16/cmd09/43", "city management", "bill", 23);
console.log(bill.__proto__);
console.dir(student.prototype.constructor);
bill.greet();

// class inheritance
class Person2 {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  greet() {
    console.log(`hello ${this.name} how are you?`);
  }
}

class Student extends Person2 {
  #value = "private in constructor functs";
  constructor(name, age, sex, matric, dept) {
    super(name, age, sex);
    this.matric = matric;
    this.dept = dept;
  }
  get studentId() {
    console.log({
      name: this.name,
      age: this.age,
      sex: this.sex,
      matric: this.matric,
      dept: this.dept,
    });
  }
}

const mark = new Student("Mark", 32, "male", "14/0dge/019", "science stuff");
console.log(mark.studentId);
console.log(mark.greet());

// private fields and methods: es6 classes

class Hidden {
  // public fields
  purpose = "this is to hide feilds";
  // private filds
  #hide;

  constructor(hide, addThis) {
    // property
    this.addThis = addThis;

    // turn a property to a private field
    this.#hide = hide;
  }

  // public method
  pub() {
    console.log("this is a public method");
  }
  // private mehods not yet implemented in browsers
  // if defined it will be treated as private fields
  #priv() {
    console.log("private");
  }
}

const hider = new Hidden("hide this");

console.log(hider);
