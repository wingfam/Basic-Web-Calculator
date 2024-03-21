/* 
    
*/

let firstNum = 0;
let secondNum = 0;
let finalResult = 0;
let firstOp = "";
let secondOp = "";

const outputDiv = document.getElementById("calc-output");
const resultDiv = document.getElementById("result-num");

const setEventListener = function() {
    const buttons = document.querySelectorAll(".btn")
    
    for (let button of buttons) {
        button.addEventListener('click', function(e) {
            // console.log(this.className.includes("btn-num")); // logs the className of my_element
            // console.log(e.currentTarget === this); // logs `true
            // console.log(e.currentTarget.value)
            if (this.className.includes("btn-num")) {
                outputDiv.textContent = parseFloat(outputDiv.textContent.concat("", e.currentTarget.value));
                if (outputDiv.textContent.length > 15) {
                    outputDiv.textContent = outputDiv.textContent.substring(0, 15)
                }
            } else if (this.className.includes("btn-operator")) {
                let currentOp = e.currentTarget.value

                if (!firstOp && !secondOp) {
                    firstOp = currentOp;
                    firstNum = parseFloat(outputDiv.textContent);
                    resultDiv.textContent = outputDiv.textContent.concat(" ", currentOp);
                } else if (firstOp && !secondOp) {
                    secondOp = currentOp;
                    secondNum = parseFloat(outputDiv.textContent);
                }

                clear();
                operate("btn-operator");
            } else if (this.className.includes("btn-equal")) {
                operate("btn-equal");
            }
        });
    }
}

const operate = function(btnType) {
    if (btnType.includes("equal")) {
        // if (!firstNum && !firstOp && !secondNum) return
        if (firstNum && firstOp && !secondNum) secondNum = parseFloat(outputDiv.textContent);
    }

    if (firstNum === 0 && firstOp === "/") {
        resultDiv.textContent = "Oops, can't divide by 0!"
        return;
    }
    
    if (firstNum, firstOp, secondNum) {
        switch (firstOp) {
            case "+":
                finalResult = firstNum + secondNum;
                break;
            case "-":
                finalResult = firstNum - secondNum;
                break;
            case "x":
                finalResult = firstNum * secondNum;
                break;
            case "/":
                finalResult = firstNum / secondNum;
                break;
            default:
                break;
        }

        resultDiv.textContent = finalResult.toString().concat(" ", secondOp);

        firstNum = finalResult;
        secondNum = 0;
        finalResult = 0;
        firstOp = secondOp;
        secondOp = "";

        clear();
    }
}

const clear = function() {
    outputDiv.textContent = outputDiv.textContent.replaceAll(/[0-9]/g, "0")
    outputDiv.textContent = outputDiv.textContent.substring(0, 1);
}

setEventListener();