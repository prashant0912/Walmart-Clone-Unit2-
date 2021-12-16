document.querySelector("#Account_signIn").addEventListener("click", signIN);
var regdUsers = JSON.parse(localStorage.getItem("userDatabase"));

function signIN() {
var email = document.querySelector("#email").value;
var password = document.querySelector("#password").value;

if (email === "admin" && password === "admin") {
  alert("Admin Login Successful");
  window.location.href = "Admin_Dashboard.html";
}
else {
  for (var i = 0; i < regdUsers.length; i++) {
    if (regdUsers[i].email_Id == email && regdUsers[i].password == password) {
      console.log("registered user");
       
       alert("User Login Successful")
    }
  
  }
   
}
}