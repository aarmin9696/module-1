let executor = function(resolve,reject){
    console.log(typeof resolve, typeof reject);// function function
    console.log("executor");
    resolve();//since resolve is function can call it , it changes the state from pending tofulfilled
    //if reject is called the state of promise changes from pending to rejected
    reject();// if here do's nothing as promise state is changed state can be changed only once

}

let promise = new Promise(executor)
console.log(typeof promise);//it is promise class object
console.log(promise);


function successCallback(){
    console.log("success");
}
function errorCallback(){
    console.log("failure");
}

function finallyCallback(){
    console.log("finally");
}


/*
promise object 

pending 

1. when user is not connected to the internet(rejected)
2. when server sends the data(fulfilled)
3. when i made a wrong call (rejected)


to show the loading indicator/to show error message/to show data 
=>.dom manipulation should done

then - using then we can attach a cllback function and that callback will be executed
when the state of the promise is changed to fulfilled

catch - using then we can attach a cllback function and that callback will be executed
when the state of the promise is changed to rejected

finally - using then we can attach a cllback function and that callback will be executed
when the state of the promise is changed to either fulfilled or rejected ie completed


*/

promise.then(successCallback)

promise.catch(errorCallback)

promise.finally(finallyCallback)
