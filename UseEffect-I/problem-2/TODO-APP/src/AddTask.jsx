import axios from "axios"
import { useState } from "react"

export default function AddTask({tasks,fetchTheData}){
const [task,setTask]=useState("")
const AddTodo=async()=>{
    try{
         await axios.post(`http://localhost:3000/tasks`,{
            title:task,
            completed:Math.random() < 0.5,
        })
        fetchTheData()
       
        setTask("")
    }
catch(error){
    console.log(error)
}
}
    return (
        <div className="box">
        <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}}/>
        <button onClick={AddTodo}>Add Todo</button>
        </div>
    )
}
