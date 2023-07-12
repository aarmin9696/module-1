//error handling
/*
// let obj = {};

//null pointer exception(error)
// console.log(obj.name.fullName); 

//to handle the error we can use try and catch block so that our code is not blocked
//and we can track error

// let x = undefined;
// // console.log(...x);//error

// try{
//     console.log("trying");
//     console.log(obj.name.fullName);//error  
//     console.log("trying 2");
// }
// catch{
//     console.log("error");
// }

// after line 15 in 16 it is error so it will shift to catch so it will print trying and error

// try{
//     console.log("one");
//     console.log(obj.name.fullName);//error
//     //code that may generate an exception/error

// }
// catch(error){
//     console.log("inside catch");
// }
*/


/*
try{
    let a=20;
    console.log(2*a);
    let errorObj =  new Error("some error text")
    throw errorObj;
    console.log("something");
}

catch(err){//executed when error occurs
    console.log(err);
}

finally{//this will be executed always
     console.log("finally");
}
*/



//promise concurrency - when two promises in same time

let prom1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("data1")
    },2000)
})

let prom2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("data2")
    },1000)
})

let prom3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("data3")
    },3000)
})
/*
prom1.then(()=>{
    console.log("prom1 resolved" ,prom2);
})


//scenario - whenever execute a piece of code/function on resolving 

let x = Promise.all([prom1,prom2,prom3])  //takes list of promises
//as it returns promise so x is also promise

//x will be resolved when all the promises get resolved 
//x is rejected when atleast 1 promise in the list is rejected
console.log(x instanceof Promise);

x.then((data)=>{
   console.log("all promises resolved", data);
})
x.catch(error=>{
    console.log(error);
})
*/

/*
// settling a promise - when ever there is change of state of promises either resolved or rejected

let y = Promise.allSettled([prom1,prom2,prom3])

y.then((data)=>{
    console.log("all promises settled",data);
})

*/

/*
//while race - Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.
//the one first settled x have same data

let z = Promise.race([prom1,prom2,prom3])

z.then((data)=>{
    console.log(data);
})

z.catch(()=>{
    console.log("inside catch");
})

*/

/*
// any - if any of the promises is resolved then x is also resolved
//and x is also resolved with same data as the one first resolved
//any is rejected if all promises are rejected

let m = Promise.any([prom1,prom2,prom3])

m.then((data)=>{
    console.log(data);
})

m.catch(()=>{
    console.log("inside catch");
})
*/