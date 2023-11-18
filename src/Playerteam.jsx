import { useState } from "react"

export default   function Playerteam(){

    const[team, setteam]=useState(11);
    function teamplayer1(){
        const newTeam=team +1;
        setteam(newTeam);
    }

    function teamplayer2(){
        const removepalyers= team-1;
        setteam(removepalyers);
    }
    const teamstyle={
        border:'2px solid yellow',
        margin:'20px',
        padding:'20px',
        borderRadius:'10px'
      }
     


   

    return(
       
  

<div style={teamstyle}>

<h1 > Plyers:{team}</h1>
<button onClick={teamplayer1}>Addplayer</button>
<button onClick={teamplayer2}>Removeplayer</button>
</div>

    )

}