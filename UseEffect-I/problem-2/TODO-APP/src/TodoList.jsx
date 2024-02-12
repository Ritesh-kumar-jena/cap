import axios from "axios"
import TodoItem from "./todoItem"
export default function TodoList({tasks,fetchTheData}){
    
    return(
        <table>
            <thead>
                <tr>
                    <th>TASK NAME</th>
                    <th>STATUS</th>
                    <th>DELET</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((ele)=>(
                     <TodoItem key={ele.id} data={ele} tasks={tasks} fetchTheData={fetchTheData}/>
                ))}
            </tbody>
        </table>

    )
}