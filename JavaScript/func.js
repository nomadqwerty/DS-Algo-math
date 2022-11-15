// in js the this keyword when applied to regular function is undefined.

// when using a regular function with a this kw it is best to bind the this kw to the function. Otherwise this in the function is undefined

// option 1: call(), this method will call a given function with a specified key word.
let mike = {
  name: "mike",
  surname: "alonso",
  fullname: "",
  fullName: function () {
    this.fullname = this.name + " " + this.surname;
  },
};
let steppy = {
  name: "steppy",
  surname: "johnson",
  fullname: "",
};

const setter = mike.fullName;

setter.call(steppy);

console.log(steppy);

// option2 bind.
