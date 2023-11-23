import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function Timer(){
  const [count, setCount] = useState(10)
useEffect(()=>{
  
  const timeID=setTimeout(()=>{
    setCount((prevCount)=>{
      if(prevCount===1){
        clearTimeout(timeID)
      }
   return  prevCount-1
    })
      },1000)
  const cleanup=()=>{
    clearTimeout(timeID)
  }
  return cleanup
},[count])
return ( 
  <div>
    <h1>Timer : {count}</h1>
  </div>
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
