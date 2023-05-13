// 1. alert - is used to show msg it waits until user press ok
alert("2 min left");

// 2. prompt(msg, [default value]) - it has ok and cancel button 

var age=parseInt(prompt("whats your age",18))

// to print the value of var we do

console.log(age)
// document.write(age)- this is not the write way

if(age>=18){
    console.log("user is eligible");
}
else{
    console.log("not eligible");
}

 console.log(typeof age)

var radius=parseInt(prompt("radius:"))
console.log(radius);

var area = 3.14*radius*radius 
// // here concatination occurs not addition bcoz by default it is string for this parseint is used
 console.log("area of circle is:", area)

// var class = confirm("is there is class today")

var isClassTomorrow=confirm("is there is class tomorrow?")
console.log(isClassTomorrow)