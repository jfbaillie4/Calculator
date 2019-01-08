function subtract (array) {
	return array.reduce((total, value) => total - value, 0);
};

function sum (array) {
	return (array.reduce((total, value) => parseInt(total) + parseInt(value), 0));
};

function multiply (array) {
	return (array.length > 1 ? array.reduce((total, value) => total * value) : "Requires array.length > 2");
};

function divide (array) {
    return (array.length > 1 ? array.reduce((total, value) => total / value) : "Requires array.length > 2");
};

function power(number, power) {
	return number ** power;
};

function operate (numbers, operator) {

}

const dipslayArray = [];
const display = document.querySelector('.screen');
const buttons = Array.from(document.querySelectorAll('.button'));

function press (e) {
    const value = e.target.dataset.button;
    if (value === "=") {
        console.log("equals");
        //display.innerHTML = sum(dipslayArray);
    } else {
        dipslayArray.push(value);
        display.innerHTML = dipslayArray.join(""); 
    };
};

buttons.forEach(button => button.addEventListener('click', press));