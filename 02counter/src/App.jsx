import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setcounter]=useState(15);

const addValue=()=>{
  // counter=counter+1 old way
  if(counter<20){
    setcounter(counter+1);
  }
  console.log("clicked",counter);
}

const removeValue=()=>{
  if(counter>0){
    setcounter(counter-1);
  }
}
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value:{counter}</h2>
    <button 
    onClick={()=>setcounter(counter+1)}
    >Add value</button>
    <br />
    <button onClick={removeValue}>remove value</button>
    
    </>

  )
}

export default App
