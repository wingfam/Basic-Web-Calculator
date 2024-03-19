/* 
    When user press the number and the operator key
    Update calculator display arcordingly
    Store the first number, operator and second number in their own variable
*/

const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const multiply = function(num1, num2) {
    return num1 * num2;
};

const divide = function(num1, num2) {
    return num1 % num2;
}

const operate = function(firstNum, operator, seconNum) {
    switch (operator) {
        case "+":
            add(firstNum, seconNum);
            break;
        case "-":
            subtract(firstNum, seconNum);
            break;
        case "&times;":
            multiply(firstNum, seconNum);
            break;
        case "&div;":
            divide(firstNum, seconNum);
            break;
        default:
            break;
    }
}