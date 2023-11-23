import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Timer(){
  const [time,setTime]=useState(10)
  useEffect(()=>{
const intervalID=setInterval(()=>{
  
  setTime((pervTime)=>{
     if(pervTime===1){
      clearInterval(intervalID)
     }
     return pervTime-1
  })
},1000)
const cleanup=()=>{
clearInterval(intervalID)
}
return cleanup
  },[])
 return (
  <div>
    <h1>Timer : {time}</h1>
    
  </div>
 ) 
}

function App() {
  const[flag,SetFlag]=useState(true)
  return (
    <>
      {flag?<Timer/>:null}
      <button onClick={()=>{SetFlag(!flag)}}>{flag?"Hide Timer":"Show Timer"}</button>
    </>
  )
}

export default App
