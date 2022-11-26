const input = document.querySelector("input");
const display = document.querySelector(".display");

input.addEventListener("keydown", showKeyCode);

function showKeyCode(event) {
    const key = event.key;
    const code = event.code;
    console.log("key: ", key);
    console.log("code: ", code);
}