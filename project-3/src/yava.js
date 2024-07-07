
console.log("Starting script...")

const screen = document.querySelector(".screen")

let a = 0
let b = 0
let op = "+"

let opToggled = false

function calculate(op) {
    switch (op) {
        case "+":
            a += b
            break;
        case "-":
            a -= b
            break;
        case "×":
            a *= b
            break;
        case "÷":
            a /= b
            break;
        default:
            return a
    }
}

function output(x) {
    screen.innerText = x
    return x
}


/// special buttons

// for debugging, click on the screen
screen.addEventListener("click", function () {
    console.log(`a:${a} b:${b} op:${op}`)
});

const buttonClear = document.querySelector(".button-clear");
buttonClear.addEventListener("click", function () {
    screen.innerText = "0"
    a = 0;
    b = 0;
    opToggled = false
});

const buttonBack = document.querySelector(".button-back");
buttonBack.addEventListener("click", function () {
    x = parseInt(screen.innerText)

    if (x < 10) {
        x = 0
    } else {
        x = Math.floor(x / 10)
    }

    if (!opToggled) {
        a = x
    } else {
        b = x
    }

    output(x)
});

const buttonEquals = document.querySelector(".button-equals");
buttonEquals.addEventListener("click", function () {
    calculate(op)
    console.log(output(a))
    b = 0
    opToggled = false
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
const digitButtons = document.querySelectorAll(".button-digit");
digitButtons.forEach(
    button => {
        button.addEventListener("click", function (event) {
            v = parseInt(event.target.innerText)
            out = v
            if (!opToggled) {
                a = a * 10 + v
                out = a
            } else {
                b = b * 10 + v
                out = b
            }
            output(out)
        });
    }
);
