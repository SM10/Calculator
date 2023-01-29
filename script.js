let memory = 0;
let operation = "";
let isFreshInput = true;
let displayMaxLength = 9;

let display = document.querySelector(".display")

let allNum = document.querySelectorAll(".number")
for (num of allNum){
    num.addEventListener('click', onNumPressed)
}

let allOper = document.querySelectorAll(".operation")
for (oper of allOper){
    oper.addEventListener('click', onOperPressed)
}

function onOperPressed(event){
    calculate()
    switch (event.target.textContent){
        case '%':
            display.textContent = Number(display.textContent)/100
            break;
        case 'X':
            memory = Number(display.textContent);
            operation = "X";
            isFreshInput = true
            break;
        default:
            memory = Number(display.textContent);
            operation = event.target.textContent;
            isFreshInput = true
            break;
    }
}

function onNumPressed(event){
    if (isFreshInput){
        display.textContent = event.target.textContent
        isFreshInput = false;
    }else{
        if(display.textContent.length < displayMaxLength) display.textContent += event.target.textContent
    }
}

function reset(){
    memory = 0;
    operation = ''
    clearDisplay();
    isFreshInput = true
}

function backspace(){
    if (display.textContent.length > 1){
        display.textContent = display.textContent.slice(0, display.textContent.length - 1)
    }else{
        display.textContent = "0"
        isFreshInput = true
    }
}

function clearDisplay(){
    display.textContent = "0"
}

function calculate(){
    switch(operation){
        case '/':
            display.textContent = memory / Number(display.textContent)
            break;
        case 'X':
            display.textContent = Number(display.textContent) * memory
            break;
        case '-':
            display.textContent = memory - Number(display.textContent)
            break;
        case '+':
            display.textContent = memory + Number(display.textContent)
            break;
    }
    if(display.textContent.length > displayMaxLength){
        display.textContent = Math.round(display.textContent * 1000000)/1000000
    }
    if(display.textContent.length > displayMaxLength){
        display.textContent = "LengthErr"
    }
    operation = "";
}