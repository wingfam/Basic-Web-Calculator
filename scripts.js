let firstNum = null;
let secondNum = null;
let finalResult = null;
let firstOp = null;
let secondOp = null;

const entryInput = document.getElementById("calc-entry");
const resultDiv = document.getElementById("result-num");

const operate = function (btnType) {
    if (btnType.includes("equal")) {
        if (firstNum && firstOp && !secondNum) secondNum = parseFloat(entryInput.value);
    }

    if (secondNum === 0 && firstOp === "/") {
        resultDiv.textContent = "Oops, can't divide by 0!";
        return;
    }

    if ((firstNum, firstOp, secondNum)) {
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

        clearEntry();

        finalResult = Math.round((finalResult + Number.EPSILON) * 100) / 100

        resultDiv.textContent = finalResult.toString().concat(" ", secondOp);

        // Shift each variable with new value so new calculation can take place.
        firstNum = finalResult;
        secondNum = 0;
        finalResult = 0;
        firstOp = secondOp;
    }

    // Make sure the second operator is empty so I can set secondNum to a new number every time.
    secondOp = "";
};

const clearEntry = function (isClearAll) {
    entryInput.value = entryInput.value.replaceAll(/[0-9]/g, "").substring(0, 1);
    if (isClearAll) resultDiv.textContent = parseInt(resultDiv.textContent) * 0;
};

const clearAll = function () {
    firstNum = null;
    secondNum = null;
    finalResult = null;
    firstOp = null;
    secondOp = null;
    clearEntry(true);
};

const setEventListener = function () {
    const buttons = document.querySelectorAll(".btn");

    window.addEventListener("load", (event) => {
        entryInput.value = "";
    });

    entryInput.addEventListener("click", function(e) {
        e.preventDefault();
    });

    for (let button of buttons) {
        button.addEventListener("click", function (e) {
            if (this.className.includes("btn-num")) {
                entryInput.value = entryInput.value.concat("", e.currentTarget.value);

                if (entryInput.value.length > 10) entryInput.value = entryInput.value.substring(0, 10);
            } else if (this.className.includes("btn-dot")) {
                if (entryInput.value.includes(".")) return;
                else entryInput.value = entryInput.value.concat("", e.currentTarget.value);
            } else if (this.className.includes("btn-operator")) {
                let currentOp = e.currentTarget.value;

                // If entry doesn't have number, stop from calculation
                if (!entryInput.value) {
                    return;
                }
                
                // - First, new calculation from the start. 1st operator and 2nd operator haven't entered yet.
                // - Second, a calculation has already took place, and every calculation after that.
                if (!firstOp && !secondOp) {
                    firstOp = currentOp;
                    firstNum = parseFloat(entryInput.value);
                    resultDiv.textContent = entryInput.value.concat(" ", currentOp);
                } else if (firstOp && !secondOp) {
                    secondOp = currentOp;
                    secondNum = parseFloat(entryInput.value);
                }

                clearEntry();
                operate("btn-operator");
            } 
            else if (this.className.includes("btn-equal")) operate("btn-equal");
            else if (this.className.includes("btn-all-clear")) clearAll();
            else if (this.className.includes("btn-clear-entry")) clearEntry(false);
        });
    }
};

setEventListener();
