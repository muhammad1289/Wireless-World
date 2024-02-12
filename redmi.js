fetch("redmimn.json")
  .then(res=>res.json())
    .then(json=>{
        let iphone="";
        for(i in json){
            iphone+=`
           <div class="col-lg-4 col-md-6 col-sm-12 mx-auto mt-5" id="iphocol">
    
           <a href=" ${json[i].iphonelink}">  <img src="${json[i].iphonepic}"></a>
           
            
            <h5 class="iphonam">${json[i].iphonename}</h5>
            
           <p class="iphopri"> ${json[i].iphoneprice}</P>
           </a>
           <div class="abc">
           <h3 class="star"><i class="fa-solid fa-star"></i></h3>
           <h3 class="star"><i class="fa-solid fa-star"></i></h3>
           <h3 class="star"><i class="fa-solid fa-star"></i></h3>
           <h3 class="star"><i class="fa-solid fa-star-half-stroke"></i></h3>
           </div>
           </div>`
            
           
        }
        document.getElementById("show").innerHTML=iphone;

    })