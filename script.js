
const budgetInput = document.getElementById("budget");
const expenseInput = document.getElementById("expense");
const calculateButton = document.getElementById("calculate");
const result = document.getElementById("result");

calculateButton.addEventListener("click", function() {
    const budget = Number(budgetInput.value);
    const expense = Number(expenseInput.value);

    if (budget <= 0 || expense < 0 ||
        budgetInput.value === "" || expenseInput.value === "") {
        alert("Please enter valid amounts!");
        return;
    }

    const remaining = budget - expense;
    result.textContent = remaining;
});
