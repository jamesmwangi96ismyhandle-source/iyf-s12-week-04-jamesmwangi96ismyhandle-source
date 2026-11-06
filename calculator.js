// JavaScript Calculator

function calculate(num1, operator, num2) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            return "Cannot divide by zero";
        }
        return num1 / num2;
    } else if (operator === "%") {
        return num1 % num2;
    } else if (operator === "**") {
        return num1 ** num2;
    } else {
        return "Invalid operator";
    }
}

// Calculator tests

console.log("Addition:", calculate(10, "+", 5));
console.log("Subtraction:", calculate(10, "-", 5));
console.log("Multiplication:", calculate(10, "*", 5));
console.log("Division:", calculate(10, "/", 5));
console.log("Remainder:", calculate(10, "%", 3));
console.log("Exponent:", calculate(2, "**", 3));
console.log("Division by zero:", calculate(10, "/", 0));