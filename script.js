function displayError(msg){
    display.textContent = msg
    num1 = ""
    num2 = ""
    operation = ""
}

function displayResult(res){
    num1 = String(res.toFixed(2))
    num2 = ""
}

function displayUpdate(){
    display.textContent = num1 + " " + operation + " " + num2
}

function operate(e, requestedOp){
    if (num1 === "") {
        displayError("Enter number first!")
    }

    if (num2 === ""){
        operation = requestedOp
    }
    else {
        switch (operation) {
            case "+":
                add()
                break;

            case "-":
                sub()
                break;

            case "*":
                mul()
                break;

            case "/":
                div()
                break;
        
            default:
                break;
        }
        operation = requestedOp
        if (operation === "=") operation = ""
    }

    displayUpdate()
}

function add(){
    displayResult( Number(num1) + Number(num2) )
}

function sub(){
    displayResult( Number(num1) - Number(num2) )
}

function mul(){
    displayResult( Number(num1) * Number(num2) )
}

function div(){
    if (num2 == "0") { 
        displayError("Dont you dare divide by zero!") 
        return
    }
    displayResult( Number(num1) / Number(num2) )
}

function numberPressed(e, i){
    if (operation === "") num1 += i
    else num2 += i
    displayUpdate()
}

display = document.querySelector("#display")
b = [
    document.querySelector("#b-0"),
    document.querySelector("#b-1"),
    document.querySelector("#b-2"),
    document.querySelector("#b-3"),
    document.querySelector("#b-4"),
    document.querySelector("#b-5"),
    document.querySelector("#b-6"),
    document.querySelector("#b-7"),
    document.querySelector("#b-8"),
    document.querySelector("#b-9"),
]
addBtn = document.querySelector("#b-add")
divBtn = document.querySelector("#b-div")
subBtn = document.querySelector("#b-sub")
mulBtn = document.querySelector("#b-mul")
equalBtn = document.querySelector("#b-equal")
clearBtn = document.querySelector("#b-clear")

num1 = ""
num2 = ""
operation = ""

for (let i = 0; i < b.length; i++) {
    b[i].addEventListener("click", e => { numberPressed(e, i) })
}
addBtn.addEventListener("click", e => {operate(e, "+")})
mulBtn.addEventListener("click", e => {operate(e, "*")})
subBtn.addEventListener("click", e => {operate(e, "-")})
divBtn.addEventListener("click", e => {operate(e, "/")})
equalBtn.addEventListener("click", e => {operate(e, "=")})
clearBtn.addEventListener("click", e => (displayError("")))