import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
useEffect(()=>{
  document.title=`Clicked ${count} times`
})

  return (
    <>

      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
    </>
  )
}

export default App
