let cont=document.getElementById("container")
let input=document.getElementById("searchBox")
let value=false;
const fakeStore=async()=>{
    let res=await fetch("https://fakestoreapi.com/products")
    let data=await res.json() 
    showdata(data)
}
fakeStore()
showdata=(data)=>{
    data.sort(function(a,b){
        return a.price-b.price
    })
    console.log("Home",data)
    data.forEach(function(ele){
       let item=document.createElement("div")
       let pic=document.createElement("img")
          pic.src=ele.image
       let price=document.createElement("h3")
      price.innerText=`${ele.price} $`
       let title=document.createElement("p")
        title.innerText=ele.title
       item.append(pic,price,title)
       cont.append(item)
       
     })
      men=()=>{
           cont.innerHTML=""
        let data2=data.filter(function(ele){
            return ele.category=="men's clothing"
         })
         console.log("Men",data2)
         data2.forEach(function(ele){
            let item=document.createElement("div")
            let pic=document.createElement("img")
               pic.src=ele.image
            let price=document.createElement("h3")
           price.innerText=`${ele.price} $`
            let title=document.createElement("p")
             title.innerText=ele.title
            item.append(pic,price,title)
            cont.append(item)
            
          })
     }
     
     jewelery =()=>{
        cont.innerHTML=""
     let data2=data.filter(function(ele){
         return ele.category=="jewelery"
      })
      console.log("Jewelery",data2)
      data2.forEach(function(ele){
         let item=document.createElement("div")
         let pic=document.createElement("img")
            pic.src=ele.image
         let price=document.createElement("h3")
        price.innerText=`${ele.price} $`
         let title=document.createElement("p")
          title.innerText=ele.title
         item.append(pic,price,title)
         cont.append(item)
         
       })
  }

electronics=()=>{
    cont.innerHTML=""
 let data2=data.filter(function(ele){
     return ele.category=="electronics"
  })
  console.log("Electronics",data2)
  data2.forEach(function(ele){
     let item=document.createElement("div")
     let pic=document.createElement("img")
        pic.src=ele.image
     let price=document.createElement("h3")
    price.innerText=`${ele.price} $`
     let title=document.createElement("p")
      title.innerText=ele.title
     item.append(pic,price,title)
     cont.append(item)
     
   })
}

women=()=>{
    cont.innerHTML=""
 let data2=data.filter(function(ele){
     return ele.category=="women's clothing"
  })
  console.log("Women",data2)
  data2.forEach(function(ele){
     let item=document.createElement("div")
     let pic=document.createElement("img")
        pic.src=ele.image
     let price=document.createElement("h3")
    price.innerText=`${ele.price} $`
     let title=document.createElement("p")
      title.innerText=ele.title
     item.append(pic,price,title)
     cont.append(item)
     
   })
}
home=()=>{
    cont.innerHTML=""
    data.forEach(function(ele){
        let item=document.createElement("div")
        let pic=document.createElement("img")
           pic.src=ele.image
        let price=document.createElement("h3")
       price.innerText=`${ele.price} $`
        let title=document.createElement("p")
         title.innerText=ele.title
        item.append(pic,price,title)
        cont.append(item)
        
      })
}
showItem=()=>{
   cont.innerHTML=""
   input.innerText=""
   
      let data2=data.filter(function(ele){
         value=true
          return ele.title.includes(input.value)
       })
       console.log(data2)
       if(data2.length>0){
       data2.forEach(function(ele){
         let item=document.createElement("div")
         let pic=document.createElement("img")
            pic.src=ele.image
         let price=document.createElement("h3")
        price.innerText=`${ele.price} $`
         let title=document.createElement("p")
          title.innerText=ele.title
         item.append(pic,price,title)
         cont.append(item)    
         })
      }
      else{
         alert("This item is not available")
         home()
      }
         input.value=""
         value=false;
      }
   
}
