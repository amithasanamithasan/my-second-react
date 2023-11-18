import { useState } from "react"

export default function Count(){

    const[count ,setcount]=useState(0);
    // console.log(count,setcount);

    function Counetrhandel(){
        const newCount=count+1;
        setcount(newCount);
    }
    function Counthandel2(){
        const newCount=count-1;
        setcount(newCount);

    }

     return(
        <div style={{border:'2px solid yellow',
        borderRadius:'10px'}}>
            <h1>Counter:{count}</h1>
            <button onClick={Counetrhandel}>ADD</button>
            <button onClick={Counthandel2}>Reduce</button>
        </div>
     )  
}