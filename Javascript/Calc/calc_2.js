window.addEventListener("load", initEvents);
var f_num;
var s_num;

function initEvents() {
    f_num = document.getElementById("f_num");
    s_num = document.getElementById("s_num");
    var btns = document.getElementsByTagName("button");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", calculator);
    }
}

function calculator() {
    // result = parseInt(f_num.value) + parseInt(s_num.value);
    // document.getElementById("result").innerHTML = result;
    // console.log(event.target.);
    // console.log(event.srcElement.innerHTML);
    var opr = event.srcElement.innerHTML;
    var expression = f_num.value + opr + s_num.value;
    // console.log(expression);
    var result = eval(expression);
    document.getElementById("result").innerHTML = result;
}