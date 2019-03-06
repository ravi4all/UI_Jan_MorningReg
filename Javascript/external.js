// window.addEventListener("load", function() {
//     document.getElementById("btn").addEventListener("click", helloUser);
// });

window.addEventListener("load", initEvent);

function initEvent() {
    document.getElementById("btn").addEventListener("click", helloUser);
}

function helloUser() {
    console.log("Hello JS");
    var username = document.getElementById("box_1").value;
    document.getElementById("output").innerHTML = username;
}