// let 2abc=90;
// console.log(2abc+90); this will give error becoz wrong naming

// - 2 rules for naming variable

// a). variable name always starts with $, alphabet, _
// b). variable name can contain $, alphabet, _, numeric

// eg _$abc = 90;

// datatypes in js 

// 1. strings  2. number  3. boolean   4. undefined

let x = 20;

//to know datatype of this we can do
console.log(typeof x); // number

let y ="20";
console.log(typeof y); // string

// operators in js

//1. unary - only one operand 
   // a). ++(increment)    b). -- (decrement)

//2. binary - operates b/w two operands
   //a) arithmatic   b) logical   c) comparision   d) bitwise
   
//3. terenary - operates b/w three operands
   //a) ? :  (if else statement)
   
//4. assignment - utilises =,+=,-=,*=,/=,%=


//unary opertaor
let a=10;
console.log(a); //10
a++;
console.log(a++);//11 as post increment
console.log(a);//12

let m=10;
console.log(m); //10
m++;
console.log(++m);//12 as post increment
console.log(m);//12


//logical operators
console.log(true || false); //true
console.log(false || false); //false
console.log(true || console.log("called me")); // this will print true as in or 
//operator if first operand is true it will print true not event check second 
//this is short circuiting

let k= console.log(false || console.log("abc"));//here 2nd operand will print abc
// value of logical expression value is undefined

console.log(true && console.log("abc")); // abc will be printed as both operands 
//need to be executed b/c of && operator and output will be undefined 

console.log(false && console.log("abc")); // b/c first operand is false it will print 
//false will not go to second operand



// loop

//1. do-while loop

let c=0;
do{
    c++
}while(c<3);
console.log(c); // 3

//2. for loop

// let i=0;
// for(i=0;i<10 || (i*=2); i+=2){
//     i++;
//     console.log("inner loop"); //this will be infinite loop b/c i*=2 will change the vlue of i
// }
// console.log(i);// 