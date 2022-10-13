const addBtn = document.querySelector("#btn");
const list = document.querySelector("#list");
const balance = document.querySelector("#balance");

addBtn.addEventListener("click", addTransaction);
function addTransaction(event) {
    event.preventDefault()
    const text = document.querySelector("#text");
    const amount = document.querySelector("#amount");
    const type = amount.value > 0 ? "income" : "expense";
    const transaction = document.createElement("li");
    transaction.classList.add(type);
    transaction.innerHTML = `
    <span>${text.value}</span>
    <span>${amount.value}</span>
    <button class="delete-btn">x</button>
    `;
    list.appendChild(transaction);
    balance.innerText = parseInt(balance.innerText) + parseInt(amount.value) + ".00";
    text.value = "";
    amount.value = "";
}


