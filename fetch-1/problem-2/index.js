let fetchButton=document.getElementById("fetchUsersBtn")
let usersList=document.getElementById("usersList")
let mistake=document.querySelector("h2")
fetchButton.addEventListener("click",function(){
    fetch("https://reqres.in/api/users")
    .then(res=>res.json())
    .then(data=>{
        let output='';
        data.data.forEach(element => {
           output+=`
           <div class="user-card ">
            <img src="${element.avatar}" alt="">
            <div class="user-details">
                  <span class="name">${element.first_name} ${element.last_name}</span>
                  <span class="email">${element.email}</span>
            </div>
        </div>`
           
        });
        usersList.innerHTML=output
        
    })
    .catch(err=>{
        mistake.innerText=err
    })
})