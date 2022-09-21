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
