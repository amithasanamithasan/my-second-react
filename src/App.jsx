
import Users from './Users';
import Count from './Count';
import Playerteam from './Playerteam';
import Friends from './Friends';
import './App.css'

function App() {
   function hendelbutton1(){
    alert('Click my first button');
   }
function handelbutton2(){
  alert('Click my sceond button');
}
function handelbutton4(num){
  alert(num+5)
}

  return (
    <>
    <Friends></Friends>
    <Users></Users>
    <Playerteam></Playerteam>
   <Count></Count>
     
     <button onClick={hendelbutton1} >FirstButton</button>
     <button onClick={handelbutton2}>Second button</button>
     <button onClick={()=>alert('Click my third button') }>Third buttton</button>
     <button onClick={()=>(handelbutton4(4))}>4th Button</button>
    </>
  )
}

export default App
