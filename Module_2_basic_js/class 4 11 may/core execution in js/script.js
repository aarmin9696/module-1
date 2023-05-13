

// every js code is executed in divided into two
// 1. global line/global scope - not inside a function
// 2. local line - inside a function

// let a=20//global line
// let b=30//global line
// console.log(a+b);//global line

// function callMe(){   //which is not inside curly is global
//     console.log("inside function"); //local line
// }


let a=20
const b=30
 
 console.log(a+b);

 //code is executed in 2 phase 1. creation phase  2. execution phase

  //          js engine
 //    js ---------------->cpu

 //js engine - converts js code to machine language so that cpu understands it
//           - every browser is js engine v8 is developed by chrome 
//           - v8 engine is js engine which is also same in node js also

//stack - its a data structure that follows LIFO principle

//call stack is software - ie core of js engine - implementation made by js engine

// 1. creation phase
//very first element that comes in call stack goes to bottom and this 
//part is global container

// in the above  a,bare  global variable

//hoisting-during creation phase all the variable with let keyword will be declared with value undefined
//means at global container a,b have values undefined
//variables that are declared with let keyword have value undefined and is in TDZ(temporal dead zone)

//TDZ - its like block if we try to access variable in TDZ we will get error
// we will get error cannot access variable before intialisation
//const variable is fixed we cant reassignment value it
//const should be intialized att the same time of declaration

//2. execution phase - execution is line by line 

//in creation phase value of a is undefined it will be updated in execution phase 
//and it will come out of TDZ then same with b also then we can access it

// as there is no code after a+b line so the above wiill be erased from call stack

//whenever call stack is empty means code is executed

let x= 20
function callMe(){
    let x=30;
    console.log(a,b);
}
let y = 90;
callMe();
console.log(a+b);

//in above code there are 3 variables a,b(both declared with let keyword),callMe(declared with function keyword)
// a and b value will be undefined in tdz in creation phase 
//but as callMe is declared with function keyword it will be fully hoisted
//means its actual value is given it will not be in tdz

//two types hoisting 
//1. partial hoisting - variables are declared with let and const keyword will be intialised 
//with undefined value in creation phase

//2. fully hoisting - variables which are declared with function keyword will be intialise
// with actual value during the creation phase only

//at line 64 function invocation so control is paused and control goes to line 59
// but its a new context so it has to go through creation phase and execution phase
//but in callme context

// at line 61 a is at call me context a value is there but value of b ids not there
//so the callme container will call the container where b value is present
// here it is global container so it is called parent container 
//so 30 90 will be printed after this there will be nothing left in callme context
//so callme context  will be erased

//and control will go back to where it was paused in global context at line 65

let m=20
console.log(typeof m);

let n=40
console.log(typeof n);



// console.log(z); //not defined 

let z = function(){
    console.log("inside function");
}
console.log(typeof z); // function is also a datatype
z(); //function invocation  -- z will be partially hoisted b/c it is declared with let keyword


function call(){
    let e =1
    let w = function(){
        let e=20
        console.log(2*e);//will print 2
    }
    w()
}
let e = 78
call();



function callYou(i,j){
    console.log(i+j);//30
    return i*j
}
let i=10;
let ans = callYou(i,2*i)
console.log(ans);//200



//var keyword

console.log(h);//undefined
var h=20
console.log(h);




let obj1={
    p:20,
    q:20
}
let obj2 = obj1
obj2.p=12
console.log(obj2.p,obj1.p);//12 12



























