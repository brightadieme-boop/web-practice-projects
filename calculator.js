// Wait until the page load fully 
console.log("clac loaded successfully")

window.onload = function() {

    // This section her grabs all the inputs and button IDs
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let result = document.getElementById("result");

    let addBtn = document.getElementById("addBtn");
    let subBtn = document.getElementById("subBtn");
    let mulBtn = document.getElementById("mulBtn");
    let divBtn = document.getElementById("divBtn");
    let powBtn = document.getElementById("powBtn");
    let modBtn = document.getElementById("modBtn");
    let squareBtn = document.getElementById("squareBtn");

    // in this section we use function to safely get numbers
    function getNumbers() {
        let a = parseFloat(num1.value);
        let b = parseFloat(num2.value);

        if (isNaN(a) || isNaN(b)) {
            result.innerText = " Please enter a valid numbers first";
            return null
        }

          return { a, b}
        }

        function formatResult(value) {
            // If it's  already a whole number , just return it
            if (Number.isInteger(value)) {
                return value;
            }
            return value.toFixed(3);
        }
        // we add each operation button
        addBtn.addEventListener("click", function() {
            let numbers = getNumbers();
            if (numbers) result.innerText = `Result: ${formatResult(numbers.a + numbers.b)}`;
        });

        subBtn.addEventListener("click", function() {
            let numbers = getNumbers();
            if (numbers) result.innerText = `Result: ${formatResult(numbers.a - numbers.b)}`;
        });

        mulBtn.addEventListener("click", function () {
            let numbers = getNumbers();
            if (numbers) result.innerText = `Result: ${formatResult(numbers.a * numbers.b)}`;
        });

        divBtn.addEventListener("click", function() {
            let numbers = getNumbers();
            if (numbers) {
                if (numbers.b === 0) {
                    result.innerText = " Sorry cannot divide by zero please change second number.";
                } else {
                    result.innerText = `Reslut: ${formatResult(numbers.a / numbers.b)}`;
                }
            }
        });

        powBtn.addEventListener("click", function() {
            let numbers = getNumbers();
            if (numbers) result.innerText = `Result: ${formatResult(numbers.a ** numbers.b)}`;
        });

        modBtn.addEventListener("click", function() {
            let numbers = getNumbers();
            if (numbers.b === 0) {result.innerText = `sorry cannot perform modulus with zero please change second number.`    
            } else { 
                result.innerText = `Result: ${formatResult(numbers.a % numbers.b)}`;
            }
        });

        squareBtn.addEventListener("click", function() {
            let numbers = getNumbers();
            if (numbers) result.innerText = `Result: ${formatResult(numbers.a **2 )}`
        });

    }


