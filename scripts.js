var displayArray = [];
const display = document.getElementById('mainscreen');
const equationdisplay = document.getElementById('equation');
const buttons = Array.from(document.querySelectorAll('.button'));


function press (input) {
    const currentdisplay = displayArray.join("");
    const resultArray = runCalc(displayArray, input);
    displayArray = resultArray;
    display.innerHTML = displayArray.join("");
    

    if (input === "Enter") {
        equationdisplay.innerHTML = currentdisplay
        equationdisplay.style.opacity = 1;
    } else if (input === "Backspace" || input === "c") {
        equationdisplay.innerHTML = "";
        equationdisplay.style.opacity = 0;
    }
}


buttons.forEach(button => button.addEventListener('click', e => press(e.target.dataset.button)));
window.addEventListener('keydown', e => press(e.key))