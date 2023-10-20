let myfrom=document.querySelector("form")
let name=document.getElementById("name")
let age=document.getElementById("age")
let button=document.querySelector("button")
let tbody=document.querySelector("tbody")

myfrom.addEventListener("submit",function(e){
 e.preventDefault()
    localStorage.setItem("Name",name.value)
    localStorage.setItem("Age",age.value)

})
button.addEventListener("click",function(){
    console.log(localStorage.getItem("Name"))
    let tr= document.createElement("tr")
    let td1=document.createElement("td")
    td1.innerText=localStorage.getItem("Name")
    let td2=document.createElement("td")
    td2.innerText=localStorage.getItem("Age")
    tr.append(td1,td2)
    tbody.append(tr)
})
