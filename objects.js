// object literals

const sym = Symbol("key1")

const JsUser = {        // Key is treated as a string by the Js
      name : "Sarmad",
      [sym] : "key2",
      age : 18,
      IsMale : true
}

JsUser.greeting = function(){

    // console.log("hello js user");
    
}

// console.log(JsUser.greeting());

// const tinderuser = new Object()   singleton object
const tinderuser1 = {}  // non singleton object

const course = {
coursename: "JS",
price: "999",
teacher: "Sarmad"
}

const {teacher: sir} = course    // destructuring
console.log(sir);

