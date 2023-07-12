let prom = new Promise((resolve,reject)=>{
    console.log("0");
    setTimeout(() => {
        resolve()
    },0)
    console.log("1");
})
console.log(prom);
console.log("2");
prom.then(() => {
    console.log("3");
    console.log(prom);
})
console.log("4");
//gives 0 1 pending 2 4 3 fulfilled

// resolve/reject do the following things:-
//1.mutate the state of promise object
//2. push the corresponding callback to the microtask queue


let prom2 = new Promise((resolve,reject)=>{
    let data = {
        name:"piyush",
        age:25,
        gender:"male"
    }
    resolve(data)
})

prom2.then((x)=>{
    console.log(x);
    console.log("inside success callback");
})

prom2.catch(()=> {
    console.log("error callback");
})


//GET https://api.postalpincode.in/pincode/{PINCODE}

// fetch is the core api in browser which makes the network

let pincode = 452020;
let prom3 = fetch(`https://api.postalpincode.in/pincode/${pincode}`,{
    method: "GET"
});
prom3.then(()=>{
    
    console.log("loaded data");
})

prom3.catch(()=> {
    console.log("error occured");
})