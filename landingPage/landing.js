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