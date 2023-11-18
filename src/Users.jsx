

import { useEffect, useState } from "react"

 export default  function Users(){

    const[users,setusers]= useState([]);
 useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setusers(data))
 },[])

    return(
      
        <div className='user'>
          
            <h1>Users:{users.length}</h1>
           
        </div>
    )
   }
