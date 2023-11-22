import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Timer=()=>{
  
  const [time,setTimer]=useState(10)
  useEffect(()=>{
   const intervalId=setInterval(()=>{
        setTimer((prevTime)=>{
           if(prevTime===1){
         clearInterval(intervalId)
        }
       return prevTime-1
})
},1000)
const cleanup=()=>{
  clearInterval(intervalId)
}
return cleanup
  },[])
  return(
    <h1>Timer : {time}</h1>
  )
}


function App() {
  return (
    <>
      <Timer/>
    </>
  )
}

export default App
