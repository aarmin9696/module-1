import React,{useState} from "react";

    // a => setA 
    // kite => setKite
    // helloWorld => setHelloWorld
    // let [count, setCount] =  useState(10) // count = 10
    //x = [100, function]
    // let [a, setA] = x
console.log("I am outside")
let a = 10

const StateBasics = () => {
    let [count, setCount] = useState(100) // count = 200 => by design
    
    console.log("Component is reloading")
    console.log("Value of count is ",count)
   

   function increaseA(){
         a = a + 1
         console.log(a) 
   }

   function increaseCount(){
       setCount(count+1) // 101
   }

   return(
       <div>
            <h1>A: {a}</h1> 
            <button onClick={increaseA}>IncreaseA</button>
            <h1>Count: {count}</h1>
            <button onClick={increaseCount}>Increase Count</button>
       </div>
   )
}

export default StateBasics;