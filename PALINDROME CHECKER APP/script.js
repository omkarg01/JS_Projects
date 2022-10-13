const input = document.querySelector("input");
const button = document.querySelector("button");
const output = document.querySelector("#output");

button.addEventListener("click", (event) => {
    event.preventDefault()
    let inputText = input.value;
    inputText = inputText.toLowerCase();
    const reversedText = inputText.split("").reverse().join("");
    output.style.display = "block";

    console.log(inputText);

    if (inputText.length === 0) {
        output.innerText = "Please enter a word or phrase";
    }

    if (inputText === reversedText) {
        output.innerText = "Palindrome";
    } else {
        output.innerText = "Not a Palindrome";
    }
});

input.addEventListener("focusout", () => {
    output.style.display = "none";
});