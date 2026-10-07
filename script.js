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

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const value = button.textContent;

            // AC
            if (value === "AC") {
                display.value = "";
                firstNumber = "";
                operator = "";
                return;
            }

            // DEL
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

                if (display.value === "") {
                    return;
                }

                firstNumber = display.value;
                operator = value;
                display.value = "";

                return;
            }

            // Equal
            if (value === "=") {

                // Don't calculate incomplete expression
                if (
                    firstNumber === "" ||
                    operator === "" ||
                    display.value === ""
                ) {
                    return;
                }

                const secondNumber = display.value;

                const a = Number(firstNumber);
                const b = Number(secondNumber);

                let result;

                try {

                    if (operator === "+") {
                        result = add(a, b);
                    }

                    if (operator === "-") {
                        result = subtract(a, b);
                    }

                    if (operator === "*") {
                        result = multiply(a, b);
                    }

                    if (operator === "/") {
                        result = divide(a, b);
                    }

                    display.value = result;

                    firstNumber = "";
                    operator = "";

                } catch (error) {

                    display.value = error.message;

                    firstNumber = "";
                    operator = "";
                }

                return;
            }

            // Decimal
            if (value === ".") {

                if (display.value.includes(".")) {
                    return;
                }

                display.value += value;
                return;
            }

            // Numbers
            display.value += value;
        });
    });
}