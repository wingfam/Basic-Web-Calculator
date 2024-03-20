/* 
    
*/

let firstNum = null;
let secondNum = null;
let firstOp = "";
let secondOp = "";
let finalResult = null;

const outputDiv = document.getElementById("calc-output");
const resultDiv = document.getElementById("result-num");

const operate = function(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "x":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
        default:
            break;
    }
}

const updateMainOutput = function(num) {
    outputDiv.textContent = parseInt(outputDiv.textContent.concat("", num));
    if (outputDiv.textContent.length > 15) {
        outputDiv.textContent = outputDiv.textContent.substring(0, 15)
    }
}

const enterOperator = function(currentOp) {
    // Need to check for the second operator
    // When user enter second operator: 
    // - Set current number on display to secondNum
    // - Do operate with firstNum, secondNum and firstOperator
    // - Update tempOutput to final result
    // - Update firstNum = finalResult, firstOperator = secondOperator
    // - Set secondNum = null, secondOperator = null, finalResult = null;
    if (!firstOp && !secondOp) {
        firstOp = currentOp;
        firstNum = parseInt(outputDiv.textContent);
        resultDiv.textContent = outputDiv.textContent.concat(" ", currentOp);
    } else {
        secondNum = parseInt(outputDiv.textContent);
        secondOp = currentOp;
    }

    if (firstOp && secondOp) {
        if (firstNum === 0 && firstOp === "/") {
            resultDiv.textContent = "Oops, can't do that!"
        } else {
            finalResult = operate(firstNum, firstOp, secondNum);
            resultDiv.textContent = finalResult.toString().concat(" ", secondOp);
        }
        
        updateVar();
    }

    clearDisplay();
}

const updateVar = function() {
    firstNum = finalResult;
    firstOp = secondOp;
    secondNum = null;
    secondOp = null;
    finalResult = null;
}

const clearDisplay = function() {
    outputDiv.textContent = outputDiv.textContent.replaceAll(/[0-9]/g, "0")
    outputDiv.textContent = outputDiv.textContent.substring(0, 1);
}

const main = function() {
    const buttons = document.querySelectorAll(".btn")
    
    for (let button of buttons) {
        button.addEventListener('click', function(e) {
            // console.log(this.className.includes("btn-num")); // logs the className of my_element
            // console.log(e.currentTarget === this); // logs `true
            // console.log(e.currentTarget.value)
            if (this.className.includes("btn-num")) {
                updateMainOutput(e.currentTarget.value)
            } else if (this.className.includes("btn-operator")) {
                enterOperator(e.currentTarget.value);
            }
        });
    }
}

main();