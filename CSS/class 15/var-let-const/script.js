//whenever js code is executed an executed an execution context is created
//in execution context firstly memory allocation happens which is undefined in start by default
//then code runs and from code value is assigned

//hoisting in js - this in js is the behaviour where function and variables can be used even before they are declared

//===tdz starts for let and const variable=====

console.log(a)//undefined
var a=10;


console.log(add(2,3)) ///this will give 5 even if written before
//bc of hoisting memory is already allocated

function add(a,b){
    return a+b
}


//var - to reintialize and redeclare variables

console.log(x); //undefined
var x=10;
console.log(x); //10
var x=20;
console.log(x); //20


//let: reintialize but not redeclare variabes

//in var variable created inside global memory space
//while variable created from let keyword  are present in another memory space

//let is hoisted,but in this case variable is present in tdz
//since the variables are in tdz, thats why they are not accessible

//temporal dead zone(TDZ) - is period of time during which the let and const variables
//declation cannot be accessed

//tdz starts when the code execution enters the block which contains let and const declaration
//and continues until the declaration is executed

//======tdz ends========
let y=30
console.log(y)
y=40
console.log(y)



//const - niether reintialize nor can be redeclared
//its value is constant throughout the code
//present in another memory spacenot in global
//const is hoisted but it is in tdz

const PI = 3.14;
//const PI=2;   and PI=2; cant be  done 
