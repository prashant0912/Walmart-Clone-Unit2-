document.querySelector("#Account_signIn").addEventListener("click", signIN);
var regdUsers = JSON.parse(localStorage.getItem("userDatabase"));

function signIN() {
var email = document.querySelector("#email").value;
var password = document.querySelector("#password").value;

if (email === "admin" && password === "admin") {
  alert("Admin Login Successful");
  window.location.href = "\AdminPage/walmart_admi.html";
}
else {
  for (var i = 0; i < regdUsers.length; i++) {
    if (regdUsers[i].email_Id == email && regdUsers[i].password == password) {
      window.location.href = "\Walmart-Clone-Unit2-\landingPage\landing.html" ;
        alert("User Login Successful")
       window.location.href = "/landingPage/landing.html";
    }
  
  }
   
}
}
