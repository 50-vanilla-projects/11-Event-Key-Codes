const display = document.querySelector(".display");
const keyDisplay = document.querySelector(".key");
const codeDisplay = document.querySelector(".code");
let count = 0;

window.addEventListener("keydown", showKeyCode);

function showKeyCode(event) {
    if (count == 0) {
        display.classList.remove("hidden");
        count++;
    } else {
        keyDisplay.removeChild(keyDisplay.firstChild);
        codeDisplay.removeChild(codeDisplay.firstChild);
    }
    const key = document.createTextNode(event.key);
    const code = document.createTextNode(event.code);
    keyDisplay.appendChild(key);
    codeDisplay.appendChild(code);
}