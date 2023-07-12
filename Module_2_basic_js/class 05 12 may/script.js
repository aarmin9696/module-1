//closure - a function will bind to its lexical parent

let a = 20
function callMe(a){
    let test = function(){
        console.log(2*a); //120
    }
    return test
}
let result = callMe(3*a);
result();




let b=20
function one(two,a){
    let func = function(a){
        two()
    }
    return func//#400
}
let x = function(){
    console.log(b+3);
}
let ans = one(x,b+2)//#400
result(10);//#400


let arr = [5,6,4]

//we read about length push pop shift unshift slice splice

// callback - whenever we pass function as an argument frm which it is called is callback

let callback=function(element,index,list){
    console.log(element,index,list);
}
arr.forEach(callback)  // calls funcion for  length no. times ie here 3
 //for each returns undefined


//this is custom for for each loop
function forEach(x){
    for(let i=0;i<arr.length;i++){
        x(arr[i],i)
    }
}
let something = function(element,index,list){
    console.log(element,index,list);
}
forEach(something);


//map method

//arr.map() //map is function defined by js ie builtin

let otpt= arr.map(function(element,index,list){
    return 2*element+index;
})
console.log(otpt);


//filter method - filters out the data //whenever it is true and catured if false not

 let answer = arr.filter(function(){
    return true;
})
console.log(answer);


//reduce method - to make aggreagated value from list of elements

let ANS= arr.reduce(function(previousValue,element,index){
    return previousValue+element+index
},8)
console.log(ANS);


















