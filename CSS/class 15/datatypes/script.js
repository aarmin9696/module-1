var fname="piyush"
var lname="dwivedi"

console.log(`my name is : ${fname} ${lname}`)  //string interpolation/concatination

var symb=Symbol("foo")
console.log(symb.description)

var ob = {
    "key": 1,
    [foo]: 123
}

console.log(obj[foo])

// operators
// = : assigns the values 
// == : compares only the values 
// === : compares  values and datatypes both

var a=10
var b="10"

console.log(a==b)
console.log(a===b)

// functions in js : its a block of code which can be used again and again for particular task

//1. function declaration - creating function

// function function_name(p1, p2,p3,...){
//     code
// }

// function_name()

function add(a,b){  //a b are parameters
    console.log(a+b)
}
add(2,3)  //function invocation(calling the function ) 2 and 3 is arguments

// 2. function expression

var multiply= function (a,b){
    console.log(a*b)
}
multiply(10,2); //function invocation
console.log(multiply)

//3. anonymous function - dont have any values we use them in funct. exp.
    //    function(a,b) this is anonymous b/c it dont have any name


 // return statement - 
 
 function add(a=3,b=9){  //a b are parameters
    return(a+b)
}
var sum= add(2,3)
console.log("sum: " +sum+2)


// for input

var a= prompt("a: ")
var b= prompt("b: ")

var multiply=function(a,b){
    console.log("multiply:",a*b);

}
multiply(a,b)
console.log(multiply);



//even odd check by js

var num = parseInt(prompt("num"))
var checkevevn = function(num){
    if(num%2 === 0) return true
    else return false
}
console.log(checkeven(num))


// 4. arraow function

// var var_name = (p1,p2,...){
//     code
// }
// var_name(arg1,..)

var checkeven=(num) => {
if(num%2 === 0) return true
    else return false
} 
console.log(checkeven(num))

var sum = (a,b) => a+b 
console.log(sum(10,25))



