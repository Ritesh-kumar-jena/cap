let table=document.querySelector("tbody")
const todosList=async()=>{
    let res=await fetch("https://jsonplaceholder.typicode.com/todos")
    let data=await res.json() 
    showdata(data)
}
todosList()
showdata=(data)=>{
    data.forEach(function(ele){
       let tr= document.createElement("tr")
      let td1=document.createElement("td")
        td1.innerText=ele.id
      let td2=document.createElement("td")
      td2.innerText=ele.title
     let td3=document.createElement("td")
     td3.innerText=ele.completed
     tr.append(td1,td2,td3)
    table.append(tr)
    })
}