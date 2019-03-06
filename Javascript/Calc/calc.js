window.addEventListener("load", initEvents);
var f_num;
var s_num;

function initEvents() {
    f_num = document.getElementById("f_num");
    s_num = document.getElementById("s_num");
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("sub").addEventListener("click", sub);
    document.getElementById("div").addEventListener("click", div);
    document.getElementById("mul").addEventListener("click", mul);
}

function add() {
    result = parseInt(f_num.value) + parseInt(s_num.value);
    // console.log(f_num, s_num);
    document.getElementById("result").innerHTML = result;
}

function sub() {
    result = parseInt(f_num.value) - parseInt(s_num.value);
    // console.log(f_num, s_num);
    document.getElementById("result").innerHTML = result;
}

function div() {
    result = parseInt(f_num.value) / parseInt(s_num.value);
    // console.log(f_num, s_num);
    document.getElementById("result").innerHTML = result;
}

function mul() {
    result = parseInt(f_num.value) * parseInt(s_num.value);
    // console.log(f_num, s_num);
    document.getElementById("result").innerHTML = result;
}