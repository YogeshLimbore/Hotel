
/*
function but() {
    alert("Logi ");
}*

function handleButtonClick(event) {
    event.preventDefault();
    $('.row').hide();
    alert('Logi  sucssefully!');
}
document.addEventListener('DOMContentLoaded', function () {
    var getStartedBtns = document.querySelectorAll('#loginsubmit');
    getStartedBtns.forEach(function (btn) {
        btn.addEventListener('click', handleButtonClick);
    });
});
*/


var Userid = document.querySelector("#Uname");
var Password = document.querySelector("#Pas");
let xyz = document.querySelector("#loginsubmit");
let yza = document.querySelector("#Crlogin");


yza.addEventListener('click', () => {
    window.location.href = "/LoginD/Clogin";
});



xyz.addEventListener('click', () => {

    var username = Userid.value;
    var PassWord = Password.value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', PassWord);

    $.ajax({
        type: "POST",
        url: "/LoginD/LoginSubmit",
        data: { userID: username, PassWord: PassWord },
        success: function (jsonString) {
            if (jsonString) {
                window.location.href = "/Home/Index";
            }
            else {
                window.location.href = "/LoginD/Login";
            }
        },
        error: function () {
            alert("Login failed. Please check your username and password.");
        }
    });

    console.log('Stored Username:', localStorage.getItem('username'));
    console.log('Stored Password:', localStorage.getItem('password'));
});













