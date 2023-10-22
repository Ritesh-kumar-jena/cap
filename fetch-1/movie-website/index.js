let body=document.getElementById("body")
let container=document.getElementById("container")
let output="";
const showMovies=async()=> {
   
    try{
        let query=document.querySelector("#searchBox").value;
        let url=`http://www.omdbapi.com/?i=tt3896198&apikey=e2ccd074&s=${query}`;
        let res= await fetch(url)
        let data=await res.json()
        showdata(data.Search)
    }catch (error){
        console.error("There is a problem with your featch requst ",error.message)
        };       
}
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
