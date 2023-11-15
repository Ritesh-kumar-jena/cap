import TodoItem from "./TodoItem";
function TodoList({tasks ,onToggleStatus,deletTodo}){
    
    return(
        <table>
            <thead>
                <tr>
                    <th>TASK NAME</th>
                    <th>STATUS</th>
                    <th>Delet</th>
                </tr>
            </thead>
            <tbody>
                {
                tasks.map((ele)=>(
                    <TodoItem key={ele.id} data={ele} onToggleStatus={onToggleStatus} deletTodo={deletTodo}/>
                ))
            }
            </tbody>
        </table>
    )
}

export default TodoList;