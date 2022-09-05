// callbacks alone donot make code asynchrounous, eventListeners aline do not make code async too.

// what makes code asyn is the operation it performs.
// loading images,videos, fetching remote data, timers etc

// ajax: async javascript and xml: fetch data from remote web servers dynamically.

// api: application programming interface. this is a standalone piece of software that exposes a public interface that will enable other pieces of software to work with it.
// ie i use the DOM api in the javaScript app to enable my javascript to work with my html.

// the dom is not part of javaScript, the dom is a stand alone software that enable javascript to work with html

// perform old school ajax call
// new instance of XMLHttpRequest class
const req = new XMLHttpRequest();

// use open() to cspecify the request method and the target url end point
req.open("GET", "https://restcountries.eu/rest/v2/name/nigeria", true);

// use the send to send request to remote web sever.
req.send();

// fectching data is asynchrounous. to handle this when the requst is complete a load event is emitted. so attach a listerner to the instance obj.
req.addEventListener("load", (e) => {
  // perform some operations with returned data
  // this points to the object that the listener is attached to
  console.log(this.responseText);
});
