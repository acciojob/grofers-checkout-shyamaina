
const getSumBtn = document.createElement("button");

getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });

    // Find the table
    const table = document.querySelector("table");

    // Remove the previous total row, if present
    const oldTotal = document.getElementById("total-row");
    if (oldTotal) {
        oldTotal.remove();
    }

    // Create the total row
    const row = document.createElement("tr");
    row.id = "total-row";

    const cell = document.createElement("td");
    cell.textContent = total;
    cell.colSpan = table.rows[0].cells.length;

    row.appendChild(cell);
    table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
