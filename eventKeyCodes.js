const input = document.querySelector("input");

input.addEventListener("keydown", showKeyCode);

function showKeyCode(event) {
    const key = event.target
    console.log(key);

}