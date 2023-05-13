// function - a piece of code which can take some data and does some computation
//gives you same result


function callme(a,b){  // ab are parameters
    console.log(a+b)
    return a-b;
}
let result = callme(10,20); //function calling/invocation  (10 20 are arguments)
console.log(result);

//function to calculate sum of digit

function calculateSumOfDigits(n){
    let sum=0
    while(n!=0){
        sum+=n%10
        n=parseInt(n/10)
    }
    return sum
}
let ans1 = calculateSumOfDigits(1098)
let ans2= calculateSumOfDigits(8282)
console.log(ans1,ans2);

//what if two function with same name and have diff no of parameter

function pickcall(a){
    //a is parameter ie variable whose value is undefined
    console.log(a); //undefined
}
pickcall();//undefined
pickcall(10);//10
pickcall(11,20);// 11 only bcoz need only 1 argument


function call(a,b){  // ab are parameters
    console.log(a,b)
}

function call(a,b,c){  // ab are parameters
    console.log(a,b,c)
}

call(10,20)  //10,20,undefined
call(10,20,30)  //10,20,30

//redclaration of let keyword is not allowed but here it can be done 
//here call is redeclared by overwriting ie reassignment means
//above both call function calls the function at line no 41

