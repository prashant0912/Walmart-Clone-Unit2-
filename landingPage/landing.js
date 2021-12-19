document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })


// cart popup window function for appearing and disappearing add by shoaib 

    function popup()
    {
       let change = document.getElementById("popup");
       change.style.display = "block";
    }
    function popuphide()
    {
       let change = document.getElementById("popup");
       change.style.display = "none";
    }

    function gotoGroceryPage()
    {
      window.location.href="https://www.walmart.com/cp/food/976759";
    }
    function gotoElectronicsPage()  /* replace with ankit electronic page link */
    {
      window.location.href="https://www.walmart.com/cp/electronics/3944"
    }
    function gotolandingPage(){
      window.location.href="http://127.0.0.1:5500/Walmart-Clone-Unit2-/landingPage/landing.html";
    }
    function goToToys(){
      window.location.href="https://www.walmart.com/cp/toys/4171";
    }

    // popup window code fucntion end here (shoaib)




    
  // sliding-JavaScript start---->

  $(".slider").owlCarousel({
    margin:20,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items: 1,
            nav:false
        }
      
        }

    
  })
//sliding-JavaScript End---->




// static part js function added by shoaib (17th dec 5:45a.m) 

// shoaib(sharing our values ) define colume JS. function starting --> colume
function shopNow()
   {
       window.location.href="https://www.salvationarmyusa.org/usn/walmart-angel-tree/"
   }
   function sd(){
       window.location.href ="https://www.walmart.com/cp/somos-mas/5593510?gbo=1"
   }
   function ln(){
       window.location.href ="https://www.walmart.com/cp/built-for-better/8747893"
   }
// Js code related to vaccine colume start
function shopCovidVaccine()
   {
   }
   function bookSlot(){
       window.location.href ="https://www.cowin.gov.in/"
   }
   function recordCheck(){
       window.location.href ="https://dashboard.cowin.gov.in/"
   }
// js code for vaccine column end



// all code which affect functionality of the cart



var data =JSON.parse(localStorage.getItem('addProduct'));  //fetch data from storage to which is inpu by product add and here we map this in landing page
    var cartarr =JSON.parse(localStorage.getItem('walmartCart'))||[]; //fetching add to cart data
    // var cartarr =[];
    document.querySelector("#lalala>#icount").textContent = cartarr.length;

displayItem(data); //display added product

// function handlePriceSort(){  //function to catch the select tag values
//   let sel =document.querySelector("#priceSort").value;
//   // console.log(sel);
//   if(sel=="low")
//   {
//       data.sort(function(a,b){
//           let x = Number(a.price) - Number(b.price);
//           return x;
//       })
//   }
//    if(sel=="high")
//   {
//       data.sort(function(a,b){
//           let x = Number(b.price) - Number(a.price);
//           return x;
//       })
//   }
//   // console.log(data) //to check working of sort
//   displayItem(data)
// }

// function handleNameSort(){
//   let sort =document.getElementById("nameSort").value;

//   if(sort =="asc")
//   {
//       data.sort(function(a,b)
//       {
//           if(a.name > b.name)
//           {
//               return 1;
//           }
//           if(a.name <b.name)
//           {
//               return -1;
//           }
//           return 0;
//       })
//   }
//   if(sort =="dse")
//   {
//       data.sort(function (a,b){
          
//           if(a.name > b.name)
//           {
//               return -1;
//           }
//           if(a.name <b.name)
//           {
//               return 1;
//           }
//           return 0;
//       })
//   }
//   // console.log(data)
//   displayItem(data);
// }


function displayItem(data){



  document.getElementById("cartItemShoaib").innerHTML = "";

  data.map(function (elem, index) {  //use to map data
      
      var div = document.createElement('div')
      div.setAttribute('id',"bXart")
      
      var s1 =document.createElement("span") 
      s1.setAttribute("id","deal1")
      s1.innerHTML =elem.deal

      var d1 =document.createElement("div")
      d1.setAttribute("id","imgbox1") //c above

      var img1 =document.createElement("img")
      img1.setAttribute("src", elem.img_url)

      var d2 =document.createElement("div")
      d2.setAttribute("id","append") // next to span append in this div

      var s2 =document.createElement("span")
      s2.setAttribute("id","price1")
      s2.innerHTML = elem.price;

      var s3 = document.createElement("span")
      s3.setAttribute("id","realPrice1")
      s3.innerHTML=elem.actual;

      var but =document.createElement("button")
      but.innerHTML ="Cart+"
          but.addEventListener("click",function()
          { // button use to add to cart by localstoring and maping
              
              cartarr.push(elem)
              
              window.location.href="landing.html"
              localStorage.setItem("walmartCart",JSON.stringify(cartarr));
              showpopupvalue()
            //   document.querySelector("#chuparustam").style.display.block;
          }) 

      var p1 =document.createElement("p")
      p1.setAttribute("id","dtl")
      p1.innerHTML=elem.describe;

      var p2 =document.createElement("p")
      p2.setAttribute("id","fetch")
      p2.innerHTML =elem.feature;

      var s4 =document.createElement("span")
      s4.setAttribute("id","shipping1")
      s4.innerHTML =elem.shipping;

      d1.append(img1) //append in div laterS

      d2.append(s2,s3) //append in div later
        
      var b =document.createAttribute("br")
      div.append(s1,d1,d2,but,p1,p2)
    //   console.log(div)
      document.querySelector("#cartItemShoaib").append(div)
  })
}

var cartmap1 =JSON.parse(localStorage.getItem("walmartCart"))||[]; 
    // var cartmap1 =[];
    let arrsum =[];

    display(cartmap1);

    function display(cartmap1)
    {
        document.querySelector("#tobebuy").innerHTML ="";
        cartmap1.map(function (elem,index){
            var div = document.createElement('div')
            div.setAttribute('id',"bXart1")
            
            var s1 =document.createElement("span") 
            s1.setAttribute("id","deal12")
            s1.innerHTML =elem.deal

            var d1 =document.createElement("div")
            d1.setAttribute("id","imgbox12") //c above

            var img1 =document.createElement("img")
            img1.setAttribute("src", elem.img_url)

            var d2 =document.createElement("div")
            d2.setAttribute("id","append1") // next to span append in this div

            var s2 =document.createElement("span")
            s2.setAttribute("id","price12")
            s2.innerHTML = elem.price;

            var s3 = document.createElement("span")
            s3.setAttribute("id","realPrice12")
            s3.innerHTML=elem.actual;

            var but =document.createElement("button")
            but.innerHTML ="Remove"
        
            but.addEventListener("click", function ()
            {
                document.querySelector("#tobebuy").innerHTML ="";
                cartmap1.splice(index,1);

                window.location.href="landing.html"

                localStorage.setItem("walmartCart",JSON.stringify(cartmap1))
                let del = JSON.parse(localStorage.getItem("walmartCart"))
                del.map(function (elem,index) {

                    var car =JSON.parse(localStorage.getItem('walmartCart'))||[];
                    
                    var div = document.createElement('div')
                            div.setAttribute('id',"bXart1")
                            
                            var s1 =document.createElement("span") 
                            s1.setAttribute("id","deal12")
                            s1.innerHTML =elem.deal

                            var d1 =document.createElement("div")
                            d1.setAttribute("id","imgbox12") //c above

                            var img1 =document.createElement("img")
                            img1.setAttribute("src", elem.img_url)

                            var d2 =document.createElement("div")
                            d2.setAttribute("id","append") // next to span append in this div

                            var s2 =document.createElement("span")
                            s2.setAttribute("id","price12")
                            s2.innerHTML = elem.price;

                            var s3 = document.createElement("span")
                            s3.setAttribute("id","realPrice1")
                            s3.innerHTML=elem.actual;

                            var but =document.createElement("button")
                            but.innerHTML ="Remove"
                            but.addEventListener("click",function()
                            {
                                let sum =0;
                                sum += +(elem.price)
                                arrsum.push(sum)
                                window.location.href="landing.html"
                                // cartmap1.splice(index,1);
                                // console.log(cartmap1)
                                // localStorage.setItem("walmartCart",JSON.stringify(del))
                                
                            }) 
                            var p1 =document.createElement("p")
                            p1.setAttribute("id","dtl")
                            p1.innerHTML=elem.describe;
                      
                            var p2 =document.createElement("p")
                            p2.setAttribute("id","fetch1")
                            p2.innerHTML =elem.feature;
                      
                            var s4 =document.createElement("span")
                            s4.setAttribute("id","shipping12")
                            s4.innerHTML =elem.shipping;
                      
                            d1.append(img1) //append in div laterS
                      
                            d2.append(s2,s3) //append in div later
                              
                            // var b =document.createAttribute("br")
                            div.append(s1,d1,d2,but,p1,p2)
                            document.querySelector("tobebuy").append(div)
                        document.querySelector("#lalala>#icount").textContent = car.length;
                        display(cartmap1)
                })
            }) 
            var p1 =document.createElement("p")
            p1.setAttribute("id","dtl1")
            p1.innerHTML=elem.describe;

            var p2 =document.createElement("p")
            p2.setAttribute("id","fetch1")
            p2.innerHTML =elem.feature;

            var s4 =document.createElement("span")
            s4.setAttribute("id","shipping12")
            s4.innerHTML =elem.shipping;

            d1.append(img1) //append in div laterS

            d2.append(s2,s3) //append in div later
                
            // var b =document.createAttribute("br")
            div.append(s1,d1,d2,but,p1,p2)
            document.querySelector("#tobebuy").append(div)
        })
    }
    function showpopupvalue()
    {
      document.querySelector("#disappear").style.display="none";
    }

    function abrakadabra()
    {
        window.location.href ="/paymentcard/card.html";
    }