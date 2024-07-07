
console.log("Starting script...")

const screen = document.querySelector(".screen")

let a = 0
let b = 0
let op = "+"

let opToggled = false

function calculate(a, b, op) {
    switch (op) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "×":
            return a * b
        case "÷":
            return a / b
        default:
            return a
    }
}

function output(x) {
    screen.innerText = x
    a = x
    return x
}


/// special buttons

const buttonClear = document.querySelector(".button-clear");
buttonClear.addEventListener("click", function () {
    screen.innerText = "0"
    a = 0;
    b = 0;
    opToggled = false
});

const buttonEquals = document.querySelector(".button-equals");
buttonEquals.addEventListener("click", function () {
    console.log(output(calculate(a, b, op)))
});

/// operations

const buttonPlus = document.querySelector(".button-plus");
buttonPlus.addEventListener("click", function () {
    op = "+"
    opToggled = true
    screen.innerText = " "
});

const buttonMinus = document.querySelector(".button-minus");
buttonMinus.addEventListener("click", function () {
    op = "-"
    opToggled = true
    screen.innerText = " "
});

const buttonMultiply = document.querySelector(".button-multiply");
buttonMultiply.addEventListener("click", function () {
    op = "×"
    opToggled = true
    screen.innerText = " "
});

const buttonDivide = document.querySelector(".button-divide");
buttonDivide.addEventListener("click", function () {
    op = "÷"
    opToggled = true
    screen.innerText = " "
});


/// digits
const button1 = document.querySelector(".button-1");
button1.addEventListener("click", function () {
    v = 1
    if (!opToggled) {
        a = v;
    } else {
        b = v;
        opToggled = false
    }
    output(v)
});


const button2 = document.querySelector(".button-2");
button2.addEventListener("click", function () {
    v = 2
    if (!opToggled) {
        a = v;
    } else {
        b = v;
        opToggled = false
    }
    output(v)
});

const button3 = document.querySelector(".button-3");
button3.addEventListener("click", function () {
    v = 3
    if (!opToggled) {
        a = v;
    } else {
        b = v;
        opToggled = false
    }
    output(v)
});



// const button1 = document.querySelectorAll(".button-digit");
// button1.addEventListener("click", function () {
//     v = 1
//     // v = parseInt(event.target.innerText)
//     // console.log(event.target)
//     // console.log("hi")
//     if (!opToggled) {
//         a = v;
//     } else {
//         b = v;
//         opToggled = false
//     }
//     output(v)
// });
