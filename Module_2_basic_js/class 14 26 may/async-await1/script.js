//async -await 

// asynchronus(not sequential)- 

// to make it synchronus before function we can add async - so that first it get settled only after 
//it only it will move to next

async function call(){
    console.log("0");
    let prom1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data1")
        },1000)
    })

    console.log("1");
    let result = await prom1;//whenever await keyword is encountered inside the async function
    // takes the pause at that line and gets erased itself from the callstack

    console.log(result);

    let prom2 = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("data2")
        },2000)
    })

    let result1 = await prom2;
    console.log(result1);

    prom1.then(()=>{
        console.log("0.5");
    })
    return 10;
}

let x = call()

console.log(x);//async function will always return a promise (means eventual completion of any task)

x.then((data)=>{
    console.log("x is resolved with",data);
})
