/* 
    
*/

let firstNum = null;
let secondNum = null;
let firstOperator = "";
let secondOperator = "";
let finalResult = null;

const output = document.getElementById("calc-output");
const tempOutput = document.getElementById("calc-temp-output");

// const add = function(num1, num2) {
// 	return num1 + num2;
// };

// const subtract = function(num1, num2) {
// 	return num1 - num2;
// };

// const multiply = function(num1, num2) {
//     return num1 * num2;
// };

// const divide = function(num1, num2) {
//     return num1 % num2;
// }

const operate = function(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        default:
            break;
    }
}

const showNumber = function(num) {
    output.textContent = parseInt(output.textContent.concat("", num));
    if (output.textContent.length > 15) {
        output.textContent = output.textContent.substring(0, 15)
    }
}

const enterOperator = function(operator) {
    console.log(output.textContent.concat("", operator))

    if (!firstOperator) {
        firstOperator = operator;
        tempOutput.textContent = output.textContent.concat("", operator)
    }
}

const clear = function() {
    output.textContent = output.textContent.replaceAll(/[0-9]/g, "0")
    output.textContent = output.textContent.substring(0, 1);
}

const main = function() {
    const buttons = document.querySelectorAll(".btn")
    for (let button of buttons) {
        button.addEventListener('click', function(e) {
            // console.log(this.className.includes("btn-num")); // logs the className of my_element
            // console.log(e.currentTarget === this); // logs `true
            // console.log(e.currentTarget.value)
            if (this.className.includes("btn-num")) {
                showNumber(e.currentTarget.value)
            } else if (this.className.includes("btn-operator")) {
                enterOperator(e.currentTarget.value);
            }
        });
    }
}

main();