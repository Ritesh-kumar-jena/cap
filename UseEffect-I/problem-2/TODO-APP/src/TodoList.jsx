import axios from "axios"
import TodoItem from "./todoItem"
export default function TodoList({tasks,fetchTheData}){
//     const toggleStatus=async(id)=>{
//         try{
//          await axios.patch(`http://localhost:3000/tasks/${id}`,{
//             ...ele,completed:!ele.completed
//          })
//           fetchTheData()
//         }
//         catch(error){
//             console.log(error)
//         }
//     }
// const deletData=async(id)=>{
//     try{
//       await axios.delete(`http://localhost:3000/tasks/${id}`)
//       fetchTheData()
//     }
//     catch(error){
//         console.log(error)
//     }
//}
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
            //    <tr key={ele.id}>
            //     <td style={{fontWeight:"bold",cursor: "pointer"}}>{ele.title}</td>
            //     <td onClick={()=>toggleStatus(ele.id)} style={{color: data.status?"green":"red", fontWeight:"bold",cursor: "pointer" }}>{ele.completed}</td>
            //      <td> <button  style={{backgroundColor:"red" , fontWeight:"bold",cursor: "pointer"}} onClick={()=>deletData(ele.id)}>Delet</button></td>
            //    </tr>
                ))}
            </tbody>
        </table>
    //    <div>
    //     {tasks.map((ele)=>(
    //         <div key={ele.id}>
    //            <span>{ele.title}</span>
    //            <span>{ele.completed}</span>
    //            <button onClick={()=>deletData(ele.id)}>delet</button>
    //         </div>
    //     ))}
    //    </div>

 //       ))}
    )
}