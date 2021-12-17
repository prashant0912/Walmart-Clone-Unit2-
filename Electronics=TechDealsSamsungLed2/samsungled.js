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
                 