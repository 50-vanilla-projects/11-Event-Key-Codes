const input = document.querySelector("input");
const display = document.querySelector(".display");
const keyDisplay = document.querySelector(".key");
const codeDisplay = document.querySelector(".code");

input.addEventListener("keydown", showKeyCode);

function showKeyCode(event) {
    const key = document.createTextNode(event.key);
    const code = document.createTextNode(event.code);
    keyDisplay.appendChild(key);
    codeDisplay.appendChild(code);
}