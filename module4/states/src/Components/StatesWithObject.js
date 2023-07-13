import React,{useState} from "react";


const StatesWithObject = () => {

   let [count, setCount] = useState({gold: 0, silver: 0, bronze: 0})

   // count = {gold: 0, silver: 0, bronze: 0}

   console.log("Count = ",count)

   function increaseGold(){
        //  setCount({gold: gold+1, silver:0, bronze:0 }) // setCount(1)
        setCount({...count, gold: count.gold+1})
   }


    return(
        <div>

            <h1>Gold: {count.gold} Silver: {count.silver} Bronze: {count.bronze}</h1>

            <button onClick={increaseGold}> Increse Gold </button>

            <button onClick={()=>setCount({...count, silver: count.silver+1})}> Increse Silver </button>

            <button  onClick={()=>setCount({...count, bronze: count.bronze+1})}> Increse Bronze </button>

        </div>
    )
}

export default StatesWithObject;