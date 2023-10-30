let map=document.getElementById("gmap_canvas")
let weatherDetails=document.getElementById("weatherDetails")
async function weather(){
    try{
        let APIkey = "aa2338a405271c2dbb7943eb7c748def"
        let city=document.getElementById("cityInput").value
        map.src=`https://maps.google.com/maps?q=${city}&t=&z=19&ie=UTF8&iwloc=&output=embed`
        weatherDetails.style.display="block"
        document.querySelector("h2").style.display="none"
        document.getElementById("name").style.display="none"
        let res=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
        let data=await res.json()
        console.log(data)
        let iconId = data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${iconId}.png`;
    document.getElementById("cityName").innerText=data.name
    document.getElementById("weatherIcon").src = iconUrl;
    document.getElementById("Temp").innerText=`${data.main.temp}°C`;
    document.getElementById("temp").innerText=`${data.main.temp}°C`;
    document.getElementById("minTemp").innerText = `${data.main.temp_min}°C`;
    document.getElementById("maxTemp").innerText =` ${data.main.temp_max}°C`;
    document.getElementById("wind").innerText = data.wind.speed;
    document.getElementById("clouds").innerText = data.clouds.all;
    document.getElementById("sunrise").innerText = new Date(
      data.sys.sunrise * 1000
    ).toLocaleTimeString();
    document.getElementById("sunset").innerText = new Date(
      data.sys.sunset * 1000
    ).toLocaleTimeString();
    forCastView(city)
    
    }
    catch(error){
        alert("This city details not available in our system ")
        document.querySelector("h2").style.display="block"
        document.getElementById("name").style.display="block"
        weatherDetails.style.display="none"
        document.getElementById("forCast").innerHTML=""
        
    }
}

async function forCastView(city){
  try{
    let APIkey = "aa2338a405271c2dbb7943eb7c748def"
    let forCast=document.getElementById("forCast")
    let res= await fetch( `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=metric`)
    let data=await res.json()
    console.log(data)
    forCast.innerHTML=""
   forCastData= data.list.filter((file,index)=>index%8===0)

forCastData.forEach((day,indx)=>{
  if(indx<5){
     let temp = day.main.temp;
     let icon = day.weather[0].icon;
     let date = new Date(day.dt_txt).toLocaleDateString();
     forCast.innerHTML += `
  <div class="forecast-day">
    <div class="forecast-date">${date}</div>
    <div class="forecast-icon">
        <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
    </div>
    <div class="forecast-mintemp">Min Temp: ${temp}°C</div>
    <div class="forecast-temp">Max Temp: ${temp}°C</div>
</div>
`;
  }
})
city=""
}catch(error){
  alert("This city details not available in our system")
 
}
}