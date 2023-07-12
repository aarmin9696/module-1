function call(b) {
    let a =20;
    let func = () => {
        console.log(a+b);//this will give 27 after 3 sec
    }
    a++
    b++
    //func()  
    setTimeout(func,3000)
}
let a=3
call(a+2)



//microtask queue
console.log("0");
setTimeout(() => {
    console.log("3");
},0)
let func = ()=> {
    console.log("1");
}
//like callback queue and is handled by event loop bit microtask queue is given more priority
//and will be taken first by event loop than callback queue

queueMicrotask(func)//
console.log("2");







