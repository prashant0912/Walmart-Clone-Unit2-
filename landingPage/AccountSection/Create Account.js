document.querySelector("#Create_Account").addEventListener("click", createAccount)
var userData =  JSON.parse(localStorage.getItem("userDatabase"))  ||[];

function createAccount() {
    var fname = document.querySelector("#fname").value;
    var lname = document.querySelector("#lname").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;


    var userdetails = {
        first_name: fname,
        last_name: lname,
        email_Id: email,
        password: password
    };

    userData.push(userdetails);
    localStorage.setItem("userDatabase", JSON.stringify(userData));

}