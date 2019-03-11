window.addEventListener("load", initEvents);
var box;
var oprs;

function initEvents() {
    box = document.querySelector("#box_1");
    var btns = document.querySelectorAll(".num");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", appendValues);
    }
    oprs = document.querySelectorAll(".opr");
    for (var i = 0; i < oprs.length; i++) {
        oprs[i].addEventListener("click", appendOperators);
    }
    document.querySelector("#calc").addEventListener("click", calculate);
}

function appendValues() {
    // console.log(event.srcElement);
    // console.log(value);
    box.value += event.srcElement.innerHTML;
    // console.log(box.value);
}

function appendOperators() {
    var lastValue = box.value.charAt(box.value.length - 1);
    for (var i = 0; i < oprs.length; i++) {
        if (oprs[i].innerHTML == lastValue) {
            console.log("Operator already exist...");
            return
        }
    }
    box.value += event.srcElement.innerHTML;
}

function calculate() {
    var expression = box.value;
    var result = eval(expression);
    box.value = result;
}