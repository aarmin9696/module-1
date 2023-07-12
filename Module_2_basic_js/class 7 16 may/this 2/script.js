
//block scope  - whenever variable is created with let and const keyword it is in block scope

let a=20; //block scope
if(true){
    let a=10
    let b=90
    console.log(a+b);//100
}

if(true){
    let d =20
    console.log(2*d);//40
}
//console.log(3*d); gives error d is not defined

// var keyword - can be reintialized and redeclared

console.log(c);//undefined
var c=10
console.log(c);
var c=20
console.log(c);
c=40
console.log(c);

//let and const is block scoped but var is context scoped

console.log(e);//undefined
if(true){
    var e = 20;
    console.log(2*e);//40
}
console.log(3*e);//60


function call(){
    console.log(z);//undefined
    var x=90//call context scope
    if(true){
        let y=100//block scoped
        var z=10//call context (as var keyword so nearest context)
        console.log(w,y,z,x);//30 100 10 90
        //during hoisting x,z is hoisted
    }
    //console.log(y); error y not defined - b/c not available in call and global both
}
let w=30 //global context
call()

{
//block
let f=90
console.log(f);
}
//console.log(f); not defined error b/c inside block


//class - its a blueprint



let student1 = {
    name: "piyush",
    id: "123",
    type: "frontbencher"
}
let student2 = {// this is repetition for this class is created
    name: "alka",
    id: "456",
    type: "middlebencher"
}
console.log(student1,student2);

//always start class name with capital letter
class Student{
    constructor(name,id,type){
        console.log(this);
         this.name = name;
         this.id = id
         this.type
    }
}
//new keyword only creates empty object
let s1 = new Student("umesh","789","frontbencher")//when we invoke class it will invoke constructor
//here new operator calls functions it will also inject 
console.log(s1);//reference to the s1 obj


//window object - methods

//alert- returns undefined
window.alert("something") // can be written as
alert("something2")

//prompt- to take user input and returns the data -  it has ok returns data if cancel returns null
let result = window.prompt("something prompt","default value")
console.log(result);


 console.log(window.setTimeout);

 //setTimeout - sets the schedule of printing

let func = () => {
    console.log("inside function");//after 2sec this will be printed 3rd printed
} 
console.log("before register");//first this printed
setTimeout(func,2000)
console.log("after register");//2nd this printed



console.log("1");
let func2 = () => {
    console.log("4");
}
let func3 = () => {
    console.log("5");
}
console.log("2");
setTimeout(func2,2000)
setTimeout(func3,3000)
console.log("3");





// js engine apart from callstack component there is callback queue component and event loop component
// js engine => 3 components => a)call stack b)callback queue  c)event loop

//callback queue - holds reference of functions who are registered and the timer expired
//here first in first out principle works

//event loop - monitors call stack and callback queue whenever callstack becomes empty
//event loop calls callback queue so if any function left event loop will pull it and push to call stack for execution

//console.time("label")

console.time("piyush")
let u = 20+90
 console.timeEnd("piyush")

 console.time("alka")
 for(let i=0;i<10e9;i++){
    //10e9=10^10
 }
  console.timeEnd("alka")

//prints 1,2,3,piyush,alka,inside function,4,5



//spread operator - can be used in front of array or objects or string
//used to spreads the data means remove braces 
//used to copy data - deep copy

let drr =[4,5,6]
console.log(drr);
console.log(...drr);

let drr2 = [10,...drr,12,8]
console.log(drr2);
console.log(...drr2);

let drr3 = [...drr]//have diffren references
console.log(drr3);
console.log(...drr3);

//... in objects

let obj6 ={a:1,b:2}
console.log(...obj6);

let obj7={
    x:10,
    ...obj6,
    y:59
}
console.log(...obj7);

let obj8 = {...obj6}
console.log(obj8===obj6);//false as diffrent references


//...in strings

let str6 ="ara"
console.log(...str);//a r a

let x =[...str]
console.log(x); ['a','r','a']//convert strings into arrays

console.log(str.split(""));//convert strings into arrays











