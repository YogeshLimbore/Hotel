function but() {
    alert("Logi  sucssefully");
}

function handleButtonClick(event) {
    event.preventDefault();
    $('testB').hide();
    alert('Logi  sucssefully!');
}
document.addEventListener('DOMContentLoaded', function () {
    var getStartedBtns = document.querySelectorAll('.testB');
    getStartedBtns.forEach(function (btn) {
        btn.addEventListener('click', handleButtonClick);
    });
});
