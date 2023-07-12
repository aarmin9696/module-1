/// Call bind & Apply are 3 important methods available to all JS function
// which are used to set THIS keyword inside functions. independent of how the
// function is called.

// Call
let obj = {
    name: 'PC',
};

function sayHello(age, company){
    return "Hello " + this.name + " is " + age + " " + company;
}

console.log(sayHello());
// console.log(sayHello.call(obj,23, 'walmart'));

// /// call -> obj, arguments



// Apply
// let obj = {
//     name: 'PC',
// };

// function sayHello(age, company){
//     return "Hello " + this.name + " is " + age + " " + company;
// }

// console.log(sayHello.apply(obj,[23, 'walmart']));
// console.log(sayHello(23,'walmart'));


//call and apply is temporary means for that moment only

// bind is also temporary but it returns the function



///Bind

// let obj = {
//     name: 'PC',
// };

// function sayHello(age, company){
//     return 'Hello '+ this.name + ' is ' + age + ' ' +company;
// }

// const hello=sayHello.bind(obj); // this will give me a function with sayHello
// // defi.

// console.log(hello());