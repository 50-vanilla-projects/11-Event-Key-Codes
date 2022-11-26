const input = document.querySelector("input");
const display = document.querySelector(".display");

input.addEventListener("keydown", showKeyCode);
createDisplay();

function createDisplay() {
    let key = document.createElement("p");
    key.classList.add("key");
    let code = document.createElement("p");
    code.classList.add("code");
    display.append(key, code);
}

function showKeyCode(event) {
    const key = event.key;
    const code = event.code;
    console.log("key: ", key);
    console.log("code: ", code);
}