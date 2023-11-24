import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import AddTask from './AddTask'
import TodoList from './TodoList'
function App() {
  const [tasks,setTasks] = useState([])
  const [currentPage,setCurrentPage]=useState([])
  const[error,setError]=useState(null)
  const[loading,setLoading]=useState(false)
const[page,setPage]=useState(1)
const fetchTheData=async()=>{
  setLoading(true);
  try{
const res=await axios.get(`http://localhost:3000/tasks?_limit=3&_page=${page}`)
setTasks(res.data)

  }
  catch(error){
setError(error)
  }
  finally{
setLoading(false)
  }
}
const data=async()=>{
  try{
const resp= await axios.get(`http://localhost:3000/tasks`)

setCurrentPage(resp.data)
  }
  catch(error){
    console.log(error)
  }
}
useEffect(()=>{
  fetchTheData()
  data()
},[page])
const  totalpages=Math.ceil(currentPage.length/3)
  return (
    <div>
     <div style={{color:"violet"}}>
      <h1 style={{margin:"auto"}}>TODO APP</h1>
     </div>
     <AddTask fetchTheData={fetchTheData}/>
     {error && <div>{error}</div> }
    {loading?(
      <div style={{marginTop:"20px" ,fontWeight:"bold"}}>Loading........</div> 
    ):(
      <div>
        <TodoList tasks={tasks} fetchTheData={fetchTheData}/>
      </div>
    )}
    <button disabled={page===1} onClick={()=>setPage(page-1)} style={{backgroundColor:"yellow", fontWeight:"bold",cursor: "pointer", marginRight:"10px"}}>Prev</button>
    <button disabled={page===totalpages} onClick={()=>setPage(page+1)} style={{backgroundColor:"aqua" , fontWeight:"bold",cursor: "pointer", }}>Next</button>
   </div>
   
  )
}

export default App
