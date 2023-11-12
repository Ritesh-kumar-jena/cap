let body=document.getElementById("body")
let container=document.getElementById("container")
let output="";
let input=document.querySelector("#searchBox");
let searchbar=document.getElementById("serchbar")
let menu=document.getElementById("menu")

async function  performance(query){
  try{
        
    let url=`http://www.omdbapi.com/?i=tt3896198&apikey=e2ccd074&s=${query}`;
    let res= await fetch(url)
    let data=await res.json()
    showdata(data.Search)
}catch (error){
    console.error("There is a problem with your featch requst ",error.message)
    };       
}

function showMovies() {
  let inputVlue=input.value;
   performance(inputVlue)
   menu.style.display="block"
   searchbar.innerHTML=""
   searchbar.style.display="none"
   
}

//        DEBOUNCING use for  display the movies img and deatiles 

function debounce(fun,delay){
  let timer;
  function inner(query){
    clearTimeout(timer)
    timer= setTimeout(()=>{
    fun(query)
    },delay)
  }
  return inner;
}
const debounceSearch=debounce(performance,500);
input.addEventListener("input",()=>{
  let inputVlue=input.value;
   debounceSearch(inputVlue)
   thortolsearch(inputVlue)
})


showdata=(data)=>{
  body.style.backgroundImage="url()"
   container.innerHTML=""
   if(data!==undefined){
   data.forEach(function(ele){
     let div =document.createElement("div")
     let poster=document.createElement("img")
     poster.src=ele.Poster
     let title=document.createElement("h3")
     title.innerText=ele.Title
     let year=document.createElement("P")
     year.innerText=ele.Year
     let imdbID=document.createElement("p")
     imdbID.innerText=ele.imdbID
     div.append(poster,title,year,imdbID)
     container.append(div)
     div.addEventListener("click", function (){
     localStorage.setItem("imdbID", ele.imdbID)
      window.location.href='movieDetails.html'
     })
   });
   }
   else{
    let h1=document.createElement("h1")
    h1.style.color="red"
    
    h1.style.marginLeft="420px"
    h1.innerText="Not Found Any Movies for the Search!"
    container.append(h1)
   }
}

   // This fatch requst use for Thorttling(i didn't use same fatch beacuse i want when i click the
   //                                       search button my all thortlig data and that searchbar should vanish)

async function  perform(query){
  try{
        
    let url=`http://www.omdbapi.com/?i=tt3896198&apikey=e2ccd074&s=${query}`;
    let res= await fetch(url)
    let data=await res.json()
    showresult(data.Search)
}catch (error){
    console.error("There is a problem with your featch requst ",error.message)
    };       
}

//    THROTTLING use for showing movies title in searchbar

function thortling(func,dely){
let thortl=false
function iner(query){
  if(thortl==false){
    thortl=true
    func(query)
    setTimeout(()=>{
      thortl=false
    },dely)
  }
}
return iner
}
const thortolsearch=thortling(perform,200)

showresult=(data)=>{
  searchbar.innerHTML=""
  menu.style.display="none"
     searchbar.style.display="block"
  if(data!==undefined){
    data.forEach(function(ele){
      let title=document.createElement("p")
      title.innerText=ele.Title
      searchbar.append(title)
     })
    
  }
    else{
     menu.style.display="block"
   searchbar.innerHTML=""
   searchbar.style.display="none"
    }
    
}

