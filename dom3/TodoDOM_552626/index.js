let myFrom=document.querySelector("form")
let Task=document.getElementById("task")
let PrioritySelect=document.getElementById("priority")
let tbody=document.querySelector("tbody")
let Alldata=[]
myFrom.addEventListener("submit",function(e){
    e.preventDefault()
    let data={
        input :Task.value ,
        Priority :PrioritySelect.value
    }
    tbody.innerHTML=""
   Alldata.push(data)
  Alldata.map((ele)=>{
    let tr=document.createElement("tr")
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    td1.innerText=ele.input
    td2.innerText=ele.Priority
    tr.append(td1,td2)
    tbody.append(tr)
    if(td2.innerText=="High"){
        td2.style.backgroundColor="red"
    }
    else{
        td2.style.backgroundColor="green"
    }
  })
})
