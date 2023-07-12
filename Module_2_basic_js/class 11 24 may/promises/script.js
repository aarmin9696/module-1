//promises

class Prom {
    constructor(x) {
        console.log("0");
        this.x =x
    }
    //we can only have 1 constructor
    // constructor(a) {
    //     console.log(a);
    // }

    method1(){
        console.log(this.x);
        console.log("method1");
    }


    //regular methods are called/invoked by object or by creating instances
    // while the static methods are invoked by class name
    static called(){
        console.log("inside static method");
    }

}

let p1 = new Prom(20);
console.log(p1);//gives empty object
let p2 = new Prom(10)
console.log(p2);//gives empty object

console.log(p1==p2);//gives false as diffrent references

p1.method1()
p2.method1()

console.log(p1.x,p2.x);

//invokin static methods by class name
Prom.called();


//function as parameter

class prom1{
    constructor(executor){
       executor(10,20)
    }
   
}

let executor = (a,b) => {
    console.log(a,b);
}

let p3= new prom1(executor)





class prom2{
    constructor(executor1){
        let f1 = () => {
            console.log("inside f1");
        }
        let f2 = () => {
            console.log("inside f2");
        }
       executor1(f1,f2)
    }
   
}

let executor1 = (a,b) => {  //a= function f1   b= function f2
    console.log(a,b);
    a();
    b();
}

let p4= new prom2(executor1)




// promise - builtin class

//every promise object/instance will have three states
//1. pending(initial state)
//2. fulfilled(later stage)
//3. rejected(later stage)

//a promise can finally have two states only either it is from pending to fulfilled
//or from pending to rejected

let executor2 =(resolve,reject) => {
    console.log("under executer2");
    console.log(typeof resolve , typeof reject);
    resolve()
}
let prom3 = new Promise(executor2);
console.log(prom3);