import { useState } from 'react'
import TodoList from './TodoList'
import './Todo.css'

function Todo() {
  const [task, setTask] = useState("")
const [todo,setTodo]=useState([])
  function addTask(e){
setTask(e.target.value)
  } 
  function addTodo(){
  let obj={
    id: new Date().getTime(),
    todo: task,
    status : Math.random() < 0.5
  }

    let newTodo=[...todo,obj]
    setTodo(newTodo)
    setTask("")
  }
  function toggleStatus(id){
const updateStatus=todo.map((ele)=>{
  if(ele.id===id){
    return {...ele,status : !ele.status}
  }
  return ele
})
setTodo(updateStatus)
  }

  function delettodo(id){
    const updatetodo= todo.filter((ele)=>{
      if(ele.id===id){
        return false
      }
      return true
    }) 
    setTodo(updatetodo)
  }
  return (
    <>
      <div>
        <div style={{color:"violet"}}>
          <h1 style={{margin:"auto"}}>TODO APP</h1>
        </div>
        <div className='box'>
        <input type="text"  onChange={addTask} value={task}/>
        <button  style={{fontWeight:"bold",backgroundColor:"aqua",marginBottom:"30px"}} onClick={addTodo}>ADD TODO</button>
        </div> 
       <div>
        <TodoList  tasks={todo} onToggleStatus={toggleStatus} deletTodo={delettodo} />
       </div>
      </div>
     
    </>
  )
}

export default Todo
