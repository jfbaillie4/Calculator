//import {operate, add, subtract, divide, multiply} from 'calc-scripts';

const floats = ["1","2","3","4","5","6","7","8","9","0","."];
const operators = ["+","-","*","/"]
const specials = ["Backspace", "=", "Enter"]
const displayArray = [];
const keyRecordArray = [];
const display = document.querySelector('.screen span');
const buttons = Array.from(document.querySelectorAll('.button'));

//This function now contains a lot of logic, might I want to break it out?
function press (input) {
    const value = input;
    const lastvalue = displayArray[displayArray.length-1];
    const lastentry = keyRecordArray[keyRecordArray.length-1];
    keyRecordArray.push(value);
    if (floats.includes(lastentry) && floats.includes(value)) {
        const combinedvalue = lastvalue + value;
        displayArray.splice(displayArray.length-1, 1, combinedvalue);
        display.innerHTML = displayArray.join(""); 
    } else if (value === "=" || value === "Enter") {
        const result = operate(displayArray);
        display.innerHTML = result.join(""); 
    } else {
        displayArray.push(value);
        display.innerHTML = displayArray.join(""); 
    }
};

buttons.forEach(button => button.addEventListener('click', e => press(e.target.dataset.button)));
window.addEventListener('keydown', 
        e => floats.includes(e.key) || operators.includes(e.key) || specials.includes(e.key) ?
            press(e.key) : console.log(e.key) );