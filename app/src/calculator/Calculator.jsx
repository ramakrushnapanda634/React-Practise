import { useState } from "react";

const Calculator=()=>{
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);
    const [data,setData]=useState(0);
    const Add=()=>{
        setData(count1+count2);
    }
    const Reduce =()=>{
        if(count1>count2){
setData(count1 - count2);
        }
     else    if (count2 >count1) {
           setData(count2 - count1);
         }
    }
    const Multiplication=()=>{
        setData(count1*count2);
    }
    const Division =()=>{
        // setData((count1/count2).toFixed(2));
        setData(Math.trunc(count1/count2))
    }
    return (
      <div>
        <h1>Add:Reduce:Multiplication:Division</h1>
        <input
          type="number"
          value={count1}
          onChange={(e) => setCount1(Number(e.target.value))}
        ></input>
        <input
          type="number"
          value={count2}
          onChange={(e) => setCount2(Number(e.target.value))}
        ></input>
        <div>
          <button onClick={Add}>+</button>
{" "}
          <button onClick={Reduce}>-</button>
          {" "}
          <button onClick={Multiplication}>*</button>
          {" "}
          <button onClick={Division}>/</button>
        </div>
        <h1>{data}</h1>
      </div>
    );
}
export default Calculator;