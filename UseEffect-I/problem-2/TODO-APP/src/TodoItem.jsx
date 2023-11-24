import axios from "axios"
export default function TodoItem({data,fetchTheData}){
    const toggleStatus=async(id)=>{
        try{
         await axios.patch(`http://localhost:3000/tasks/${id}`,{
            ...data,completed:!data.completed
         })
          fetchTheData()
        }
        catch(error){
            console.log(error)
        }
    }
const deletData=async(id)=>{
    try{
      await axios.delete(`http://localhost:3000/tasks/${id}`)
      fetchTheData()
    }
    catch(error){
        console.log(error)
    }
}
    return(
        <tr>
                <td onClick={()=>toggleStatus(data.id)} style={{fontWeight:"bold",cursor: "pointer"}}>{data.title}</td>
                <td onClick={()=>toggleStatus(data.id)} style={{color: data.status?"green":"red", fontWeight:"bold",cursor: "pointer" }}>{data.completed ? "True":"False"}</td>
                <td> <button  style={{backgroundColor:"red" , fontWeight:"bold",cursor: "pointer"}} onClick={()=>deletData(data.id)}>Delet</button></td>
                </tr>

    )
}