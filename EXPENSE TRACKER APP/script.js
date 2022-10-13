const addBtn = document.querySelector("#btn");
const list = document.querySelector("#list");
const balance = document.querySelector("#balance");
let deleteBtn = document.querySelectorAll(".delete-btn");
let count = 3;

addBtn.addEventListener("click", addTransaction);
function addTransaction(event) {
    count += 1;
    event.preventDefault()
    const text = document.querySelector("#text");
    const amount = document.querySelector("#amount");
    const type = amount.value > 0 ? "income" : "expense";
    const transaction = document.createElement("li");
    transaction.classList.add(type);
    transaction.innerHTML = `
    <span>${text.value}</span>
    <span>${amount.value}</span>
    <button id=${count} class="delete-btn">x</button>
    `;
    list.appendChild(transaction);
    balance.innerText = parseInt(balance.innerText) + parseInt(amount.value) + ".00";
    text.value = "";
    amount.value = "";
    deleteBtn = document.querySelectorAll(".delete-btn");
    transaction.addEventListener("click", deleteTransaction);
}

deleteBtn.forEach(btn => {
    btn.addEventListener("click", deleteTransaction);
})

function deleteTransaction(event) {
    const transaction = event.target.parentElement;
    const amount = parseInt(transaction.children[1].innerText);
    balance.innerText = parseInt(balance.innerText) - amount + ".00";
    transaction.remove();
    updateHistory();
}

function updateHistory() {
    const history = document.querySelectorAll("li");
    const list = document.querySelector("#list");
    // console.log(history.length);
    if (history.length === 0) {
        balance.innerText = 0;
        list.innerHTML = "No transactions yet";
    }

}