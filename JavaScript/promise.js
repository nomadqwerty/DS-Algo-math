// callbacks alone donot make code asynchrounous, eventListeners aline do not make code async too.
// const fs = require("fs");
// what makes code asyn is the operation it performs.
// loading images,videos, fetching remote data, timers etc

// // ajax: async javascript and xml: fetch data from remote web servers dynamically.

// // api: application programming interface. this is a standalone piece of software that exposes a public interface that will enable other pieces of software to work with it.
// // ie i use the DOM api in the javaScript app to enable my javascript to work with my html.

// // the dom is not part of javaScript, the dom is a stand alone software that enable javascript to work with html

// // perform old school ajax call
// // new instance of XMLHttpRequest class
// const req = new XMLHttpRequest();

// // use open() to cspecify the request method and the target url end point
// req.open("GET", "https://restcountries.eu/rest/v2/name/nigeria", true);

// // use the send to send request to remote web sever.
// req.send();

// // fectching data is asynchrounous. to handle this when the requst is complete a load event is emitted. so attach a listerner to the instance obj.
// req.addEventListener("load", (e) => {
//   // perform some operations with returned data
//   // this points to the object that the listener is attached to
//   console.log(this.responseText);
// });

// const reqq = fetch("https://restcountries.eu/rest/v2/name/nigeria").then(
//   (res) => console.logr(res),
//   (rej) => console.log("er", rej)
// );

// console.log(reqq);

// const fileReader = new Promise((resolve, reject) => {
//   try {
//     const file = 2;
//     resolve(file);
//   } catch (error) {
//     reject(error);
//   }
// });

// fileReader.then((res) => {
//   console.log(res);
// });

// handle promises in parralel

// (async () => {
//   try {
//     // handle multiple promises at once with the promise.all() comninator
//     const promise1 = Promise.resolve(1);
//     const promise2 = Promise.reject(2);
//     const promise3 = Promise.resolve(3);

//     // nb:- promise.all() combinator will reject if one promise rejects.
//     // if promise 2 rejects then promise1 and promise3 will reject
//     const all = await Promise.all([promise1, promise2, promise3]);
//     console.log(all);
//   } catch (reject) {
//     // console.log("returns rejected value", reject);
//   }
// })();

// return first settle promise, race(). returns only settle promise. not an array. prevent long running request

// (async () => {
//   const data = await Promise.race([
//     setTimeout(() => {
//       return Promise.resolve("some data");
//     }, 10000),
//     setTimeout(() => {
//       return Promise.reject("internet is down");
//     }, 5000),
//   ]);

//   // console.log(data);
// })();

// return all settled promise
// returns all setteld promises both resolved and rejected
(async () => {
  try {
    // handle multiple promises at once with the promise.all() comninator
    const promise1 = Promise.resolve(1);
    const promise2 = Promise.reject(2);
    const promise3 = Promise.resolve(3);

    // nb:- promise.all() combinator will reject if one promise rejects.
    // if promise 2 rejects then promise1 and promise3 will reject
    const all = await Promise.allSettled([promise1, promise2, promise3]);
    console.log(all);
  } catch (reject) {
    console.log("returns rejected value", reject);
  }
})();

// return the first fulfilled promise.
// any() doesnt return rejected promises it will wait for the first fulfilled promse and return that.
(async () => {
  const data = await Promise.any([
    setTimeout(() => {
      console.log("i am fulfilled IJN");
      return Promise.resolve("some data");
    }, 10000),
    setTimeout(() => {
      return Promise.reject("internet is down");
    }, 5000),
  ]);

  // console.log(data);
})();

process.on("unhandledRejection", (promise) => {
  console.log(promise);
});
