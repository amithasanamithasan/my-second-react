import { useEffect, useState } from "react"
import Friend from "./Friend";
import './User.css'
export default function Friends(){


const[friends, setFriends]=useState ([]);



useEffect(()=>{
     // fetch ('')->using api url
         fetch('https://jsonplaceholder.typicode.com/users')
     //  api data obj json formet
         .then(res=> res.json())
     //     data show setFriends method
         .then (data=> setFriends(data))

}, [])



     return (
        <div className="user">
          {/* data length friends means data set api with setFriends function */}
   <h1>Friends:{friends.length}</h1>
   {
     // use this friends.map
     // use Friend.jsx and using <Friend></Friend> component using and import kora lagbe upore 
    friends.map(friend=> <Friend friend={friend}></Friend>)
   }
        </div>
     )
}



/**
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 5. display data on the component
*/