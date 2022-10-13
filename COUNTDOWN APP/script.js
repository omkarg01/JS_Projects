const text = document.querySelector("input");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const display = document.querySelector("#display");

start.addEventListener("click", (event) => {
    event.preventDefault();
    let count = text.value;
    if (count > 0) {
        const countdown = setInterval(() => {
            display.innerHTML = count;
            count--;
            if (count < 0) {
                clearInterval(countdown);
                display.innerHTML = "Time is up!";
            }
        }, 1000);
    }
})