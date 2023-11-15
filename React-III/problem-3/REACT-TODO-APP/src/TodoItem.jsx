function TodoItem({data ,onToggleStatus,deletTodo}){
    return (
     <tr >
        <td style={{fontWeight:"bold",cursor: "pointer"}} onClick={()=>onToggleStatus(data.id)}>{data.todo}</td>
        <td style={{color: data.status?"green":"red", fontWeight:"bold",cursor: "pointer" }} onClick={()=>onToggleStatus(data.id)} >{data.status?"True":"False"}</td>
        <td> <button  style={{backgroundColor:"red" , fontWeight:"bold",cursor: "pointer"}} onClick={()=>deletTodo(data.id)}>Delet</button></td>
     </tr>
    )
}
export default TodoItem