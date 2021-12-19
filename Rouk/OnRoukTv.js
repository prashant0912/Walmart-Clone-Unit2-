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
  // cart popup window function for appearing and disappearing add by shoaib (16th dec 9:45pm)
  
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
  // tech deal start here
  
    var deal10 =document.getElementById("deal10")
    console.log(deal10)
  
    var deal9  = document.getElementsByClassName("deal9")
    deal9[0].onclick = function(){
   deal10.src =deal9[0].src
  
    }
    deal9[1].onclick = function(){
      deal10.src =deal9[1].src
     
       }
       deal9[2].onclick = function(){
        deal10.src =deal9[2].src
       
         }
         deal9[3].onclick = function(){
          deal10.src =deal9[3].src
         
           }
                   