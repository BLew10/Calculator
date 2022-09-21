var nums = document.querySelectorAll(".nums");
var display = document.getElementById("display");
var operations = document.querySelectorAll(".operation")
console.log(operations[0].innerHTML)

var store = 0;
var operationUsed = ""
var isDarkMode = false;

function displayNum(e) {
    if(display.innerHTML ==='0'){
        display.innerHTML = e.innerHTML;
    } else {
    display.innerHTML += e.innerHTML;
    // display.innerHTML = display.innerHTML
    }
}


function operationEvent (e) {
    store = parseFloat(display.innerHTML)
    display.innerHTML = 0;
    operationUsed = e.innerHTML;
}

document.querySelector('#clears').addEventListener("click", function () {
    display.innerHTML = 0;
})

document.querySelector('#decimals').addEventListener("click", function () {
    display.innerHTML = `${display.innerHTML}.`;
})



function equals() {
    if (operationUsed === "+") {
        display.innerHTML = store + parseFloat(display.innerHTML)
    } else if (operationUsed === "-") {
        display.innerHTML = store - parseFloat(display.innerHTML)
    } else if (operationUsed === "/") {
        display.innerHTML = store / parseFloat(display.innerHTML)
    } else if (operationUsed === "*") {
        display.innerHTML = store * parseFloat(display.innerHTML)
    }

}

for (var i = 0; i < nums.length - 1; i++) {
    nums[i].addEventListener("click", function () {
        displayNum(this)
    })
}
for (var i = 0; i < operations.length - 1; i++) {
    operations[i].addEventListener("click", function () {
        operationEvent(this)
    })
}


document.querySelector('#button').addEventListener("click", function () {
    if(isDarkMode === false){
    for (var i = nums.length - 1; i >= 0; i--) {
        nums[i].classList.add("dark-mode-nums")
        }
    
    for (var i = operations.length - 1; i >= 0; i--) {
        operations[i].classList.add("dark-mode-operations")
    }

    document.querySelector('.main').classList.add("dark-mode-main")

    display.classList.add("dark-mode-display")
    document.querySelector('#clears').classList.add("dark-mode-nums")
    document.querySelector('#decimals').classList.add("dark-mode-nums")
    document.querySelector('#equals').classList.add("dark-mode-operations")
    isDarkMode = true;
    document.querySelector('.switch').style.justifyContent = ("flex-end")
}  else {
    for (var i = nums.length - 1; i >= 0; i--) {
        nums[i].classList.remove("dark-mode-nums")
        }
    
    for (var i = operations.length - 1; i >= 0; i--) {
        operations[i].classList.remove("dark-mode-operations")
    }

    document.querySelector('.main').classList.remove("dark-mode-main")

    display.classList.remove("dark-mode-display")
    document.querySelector('#clears').classList.add("dark-mode-nums")
    document.querySelector('#decimals').classList.add("dark-mode-nums")
    document.querySelector('#equals').classList.add("dark-mode-operations")
    document.querySelector('.switch').style.justifyContent = ("flex-start")
    isDarkMode = false;

}
    
})


// function add() {
//     store = parseInt(display.innerHTML);
//     display.innerHTML = 0;
//     operationUsed = "+";
// }
// function multiply() {
//     store = parseInt(display.innerHTML);
//     display.innerHTML = 0;
//     operationUsed = "*";
// }
// function substract() {
//     store = parseInt(display.innerHTML);
//     display.innerHTML = 0;
//     operationUsed = "-";
// }
// function divide() {
//     store = parseInt(display.innerHTML);
//     display.innerHTML = 0;
//     operationUsed = "/";
// 