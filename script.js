function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

function percentage(value) {
    return value / 100;
}

export {
    add,
    subtract,
    multiply,
    divide,
    percentage
};


// Calculator UI
if (typeof document !== "undefined") {

    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    let firstNumber = "";
    let operator = "";
    let secondNumber = "";

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const value = button.textContent;

            // Clear
            if (value === "AC") {
                display.value = "";
                firstNumber = "";
                secondNumber = "";
                operator = "";
                return;
            }

            // Delete
            if (value === "DEL") {
                display.value = display.value.slice(0, -1);
                return;
            }

            // Percentage
            if (value === "%") {
                if (display.value !== "") {
                    display.value = percentage(Number(display.value));
                }
                return;
            }

            // Operators
            if (["+", "-", "*", "/"].includes(value)) {
                firstNumber = display.value;
                operator = value;
                display.value = "";
                return;
            }

            // Equal
            if (value === "=") {

                secondNumber = display.value;

                const a = Number(firstNumber);
                const b = Number(secondNumber);

                let result;

                if (operator === "+") {
                    result = add(a, b);
                } else if (operator === "-") {
                    result = subtract(a, b);
                } else if (operator === "*") {
                    result = multiply(a, b);
                } else if (operator === "/") {
                    try {
                        result = divide(a, b);
                    } catch (error) {
                        display.value = error.message;
                        return;
                    }
                }

                display.value = result;

                firstNumber = "";
                secondNumber = "";
                operator = "";

                return;
            }

            // Numbers and decimal
            display.value += value;
        });
    });
}