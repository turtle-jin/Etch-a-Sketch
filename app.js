const value = document.querySelector("#value");
const userInput = document.querySelector("#user_input");
value.textContent = `${userInput.value} x ${userInput.value}`;
userInput.addEventListener("input", (event) => {
    value.textContent = `${event.target.value} x ${event.target.value}`;
})