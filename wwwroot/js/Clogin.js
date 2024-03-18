
// go back to login page or Cancel button
//document.addEventListener("DOMContentLoaded", function () {
//    var CNlogin = document.querySelector(".cancelbtn");
//    CNlogin.onclick = function () {
//        window.location.href = "/Home/Login";
//    };
//});






var Username = document.querySelector("#UserN");
var Pass = document.querySelector("#Pass");
var email = document.querySelector("#email")
var rePass = document.querySelector("#rePass");
let click = document.querySelector("#sub");





click.addEventListener('click', () => {

    var usernameValue = Username.value;
    var passwordValue = Pass.value;
    var EmailValue = email.value;
    var repeatPasswordValue = rePass.value;


    if (passwordValue !== repeatPasswordValue) {
        alert("Passwords do not match!");
        return true;
    }

    
    /*
    localStorage.setItem('username', usernameValue);
    localStorage.setItem('password', passwordValue);
    */
    
    
    var args = {
        userName: usernameValue,
        password: passwordValue,
        email: EmailValue
    }
    $.ajax({
        type: "POST",
        url: "/LoginD/createaccount",
        data: { userName: usernameValue, password: passwordValue, email: EmailValue },
        success: function (jsonString) {
            window.location.href = "/Home/Index";
        },
        error: function () {
            console.log("N0")
        }
    });
   


   /*
    console.log('Stored Username:', localStorage.getItem('username'));
    console.log('Stored Password:', localStorage.getItem('password'));
    */

   

});


document.addeventlistener("domcontentloaded", function () {
    var cnlogin = document.queryselector(".signupbtn");
    cnlogin.onclick = function () {
        window.location.href = "/login/clogin";
    };
});