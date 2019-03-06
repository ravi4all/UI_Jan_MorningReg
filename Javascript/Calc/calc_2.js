window.addEventListener("load", initEvents);
var f_num;
var s_num;

function initEvents() {
    f_num = document.getElementById("f_num");
    s_num = document.getElementById("s_num");
    document.getElementById("add").addEventListener("click", calculator);
    document.getElementById("sub").addEventListener("click", calculator);
    document.getElementById("div").addEventListener("click", calculator);
    document.getElementById("mul").addEventListener("click", calculator);
}

function calculator() {
    // result = parseInt(f_num.value) + parseInt(s_num.value);
    // document.getElementById("result").innerHTML = result;
}