fetch("bujet.json")
  .then(res=>res.json())
    .then(json=>{
        let card1p="";
        for(i in json){
            card1p+=`
          
          <div class="col-lg-4 col-md-6 col-sm-12 mx-auto mt-5" id="bujetcol">
         
          <a href=" ${json[i].card1link}"> <img src="${json[i].card1pic}"></a>

          
           <h5 class="card1nam"> ${json[i].card1nam}</h5>

        
           <p class="card1pri"> ${json[i].card1pri}</p> 

           
            <div class="abc">
            <h3 class="star"><i class="fa-solid fa-star"></i></h3>
            <h3 class="star"><i class="fa-solid fa-star"></i></h3>
            <h3 class="star"><i class="fa-solid fa-star"></i></h3>
            <h3 class="star"><i class="fa-solid fa-star-half-stroke"></i></h3>
            </div>
           </div> `
        }
        document.getElementById("show").innerHTML= card1p;
       
    })
// <!----------------------------------top sell prod fetching--------------------------!>
fetch("topselling.json")
   .then(res=>res.json())
      .then(json=>{
          var card2="";
          for(i in json){
            card2+=`
            <div class="col-lg-4 col-md-6 col-sm-12 mx-auto mt-5" id="topcol" >
            
            <a href=" ${json[i].card2link}">  <img src="${json[i].card2pic}"></a>
            
            <h5 class="card2nam">${json[i].card2nam}</h5>
            
            <p class="card2pri">${json[i].card2pri}</p>



            <div class="abc">
            <h3 class="star"><i class="fa-solid fa-star"></i></h3>
            <h3 class="star"><i class="fa-solid fa-star"></i></h3>
            <h3 class="star"><i class="fa-solid fa-star"></i></h3>
            <h3 class="star"><i class="fa-solid fa-star-half-stroke"></i></h3>
            </div>

            </div>`





            



          } 
          document.getElementById("show2").innerHTML= card2;
      })

// <!----------------------------------top sell prod fetching--------------------------!>
// <!----------------------------------offers on prod fetching--------------------------!>
fetch("offers.json")
  .then(res=>res.json())
    .then(json=>{
      var card3="";
      for(i in json){
        card3+=`
        <div class="col-lg-12 col-md-12 col-sm-12 mx-auto mt-5" id="offerscol" >
            
        <a href=" ${json[i].card3link[0]}"><img src="${json[i].card3pic[0]}"></a>
        <h5 class="card3nam">${json[i].card3nam[0]}</h5>
        <p class="card3pri">${json[i].card3pri[0]}</p>

        <a href=" ${json[i].card3link[1]}">  <img src="${json[i].card3pic[1]}"></a>
        <h5 class="card3nam">${json[i].card3nam[1]}</h5>
        <p class="card3pri">${json[i].card3pri[1]}</p>

        <a href=" ${json[i].card3link[2]}"> <img src="${json[i].card3pic[2]}"></a>
        <h5 class="card3nam">${json[i].card3nam[2]}</h5>
        <p class="card3pri">${json[i].card3pri[2]}</p>
        
        <h4 class="card3namto">${json[i].card3nam[3]}</h4>
        
        <h6 class="card3prito">${json[i].card3pri[3]}</h6>




       



        
        </div>`
      }
      document.getElementById("show3").innerHTML= card3;
    })

// <!----------------------------------offers on prod fetching--------------------------!>