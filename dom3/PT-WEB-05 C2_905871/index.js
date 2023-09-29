// fill in javascript code here
let myfrom =document.querySelector("form")
let Name=document.getElementById("name")
let ID=document.getElementById("docID")
let Department=document.getElementById("dept")
let Exprience=document.getElementById("exp")
let Email=document.getElementById("email")
let Mobile=document.getElementById("mbl")
let tbody=document.querySelector("tbody")
let Alldata=[]
myfrom.addEventListener("submit",function(e){
    e.preventDefault()
    let role;
    if(Exprience.value > 5){
        role="Senior"
    }
    else if(Exprience.value >= 2 && Exprience.value <= 5){
        role="Junior"
    }
    else{
        role="Trainee"
    }
    
    let data={
        name:Name.value,
        id : ID.value,
        department:Department.value,
        exprience:Exprience.value,
        email:Email.value,
        mobile:Mobile.value
    }
    Alldata.push(data)
    let tr=document.createElement("tr")
    let arr=[data.name,data.id,data.department,data.exprience,data.email,data.mobile,role]
    arr.forEach((ele)=>{
         let td=document.createElement("td")
         td.innerText=ele
         tr.append(td)
    })
    tbody.append(tr)
    let delettd=document.createElement("td")
    let deletbtn=document.createElement("button")
    deletbtn.innerText="Delete"
    deletbtn.addEventListener("click",function(){
        tbody.removeChild(tr)
    })
    delettd.style.backgroundColor="red"
    deletbtn.style.backgroundColor="red"
    delettd.append(deletbtn)
    tr.append(delettd)
})