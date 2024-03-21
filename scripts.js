let firstNum = null;
let secondNum = null;
let finalResult = null;
let firstOp = null;
let secondOp = null;

const entryDiv = document.getElementById("calc-entry");
const resultDiv = document.getElementById("result-num");

const setEventListener = function () {
    const buttons = document.querySelectorAll(".btn");

    for (let button of buttons) {
        button.addEventListener("click", function (e) {
            if (this.className.includes("btn-num")) {
                if (entryDiv.textContent.substring(0, 1).includes("0")) entryDiv.textContent = entryDiv.textContent.replace("0", "");

                entryDiv.textContent = entryDiv.textContent.concat("", e.currentTarget.value);

                if (entryDiv.textContent.length > 10) entryDiv.textContent = entryDiv.textContent.substring(0, 10);
            } else if (this.className.includes("btn-dot")) {
                if (entryDiv.textContent.includes(".")) return;
                else entryDiv.textContent = entryDiv.textContent.concat("", e.currentTarget.value);
            } else if (this.className.includes("btn-operator")) {
                let currentOp = e.currentTarget.value;

                // Here I deduced that there are two circumstances to use if else like this:
                // - First, new calculation from the start. 1st operator and 2nd operator haven't entered yet.
                // - Second, a calculation has already took place, and every calculation after that.
                if (!firstOp && !secondOp) {
                    firstOp = currentOp;
                    firstNum = parseFloat(entryDiv.textContent);
                    resultDiv.textContent = entryDiv.textContent.concat(" ", currentOp);
                } else if (firstOp && !secondOp) {
                    secondOp = currentOp;
                    secondNum = parseFloat(entryDiv.textContent);
                }

                entryDiv.textContent = entryDiv.textContent
                    .replaceAll(/[0-9]/g, "0")
                    .substring(0, 1);

                operate("btn-operator");
            } else if (this.className.includes("btn-equal")) operate("btn-equal");
            else if (this.className.includes("btn-all-clear")) clearAll();
            else if (this.className.includes("btn-clear-entry")) clearEntry(false);
        });
    }
};

const operate = function (btnType) {
    if (btnType.includes("equal")) {
        if (firstNum && firstOp && !secondNum)
            secondNum = parseFloat(entryDiv.textContent);
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

        resultDiv.textContent = finalResult.toString().concat(" ", secondOp);
        entryDiv.textContent = entryDiv.textContent
            .replaceAll(/[0-9]/g, "0")
            .substring(0, 1);

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
    entryDiv.textContent = entryDiv.textContent
        .replaceAll(/[0-9]/g, "0")
        .substring(0, 1);
    if (isClearAll) resultDiv.textContent = parseInt(resultDiv.textContent) * 0;
};

const clearAll = function () {
    firstNum = 0;
    secondNum = 0;
    finalResult = 0;
    firstOp = "";
    secondOp = "";
    clearEntry(true);
};

setEventListener();
