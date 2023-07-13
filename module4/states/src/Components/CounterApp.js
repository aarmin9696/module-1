import React,{useState} from "react"; 
import { FaPlus,FaMinus, FaResearchgate } from "react-icons/fa";

const CounterApp = () => {
    let [a, setA] = useState(0) 


    // function increase(){
    //      setA(a+1)
    // }


    return(
        <div>
                <h1>Count: {a}</h1>
                <button onClick={()=>setA(a+1)}>  <FaPlus/> </button> 
                <button onClick={()=>setA(a-1)}> <FaMinus /> </button>
                <button onClick={()=>setA(0)}>  <FaResearchgate/> </button>
        </div>
    )
}

export default CounterApp;