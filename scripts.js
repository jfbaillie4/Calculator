function multiply (array) {
	return (array.length > 1 ? array.reduce((total, value) => total * value) : "Requires array.length > 2");
};

function power(number, power) {
	return number ** power;
};

//Everything below this line works, everything above this line doesn't

function operate (inputArray) {
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i]==="/") {
            const division = divide(inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1,3,division);
            i--;
        }
    };
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i]==="*") {
            const multiple = multiply(inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1,3,multiple);
            i--;
        }
    };
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i]==="+") {
            const sum = add(inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1, 3, sum);
            i--;
        }
    };
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i]==="-") {
            const sub = subtract(inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1, 3, sub);
            i--;
        }
    };
        /*
        if (inputArray[i]==="+") {
            const sum = add(inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1, 3, sum);
            i--;
        } else if (inputArray[i]==="-") {
            const sub = subtract(inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1, 3, sub);
            i--;
        } else {
            console.log(i);
        };*/
    return inputArray;
};

function add (x, y) {
	return parseInt(x) + parseInt(y);
};

function subtract (x, y) {
	return parseInt(x) - parseInt(y);
};

function divide (x, y) {
    return parseInt(x) / parseInt(y);
};

function multiply (x, y) {
	return parseInt(x) * parseInt(y);
};

const integers = ["1","2","3","4","5","6","7","8","9","0"];
const operators = ["+","-","*","/"]
const displayArray = [];
const keyRecordArray = [];
const display = document.querySelector('.screen span');
const buttons = Array.from(document.querySelectorAll('.button'));

//This function now contains a lot of logic, might I want to break it out?
function press (e) {
    const value = e.target.dataset.button;
    const lastvalue = displayArray[displayArray.length-1];
    const lastentry = keyRecordArray[keyRecordArray.length-1];
    keyRecordArray.push(value);
    if (integers.includes(lastentry) && integers.includes(value)) {
        const combinedvalue = lastvalue + value;
        displayArray.splice(displayArray.length-1, 1, combinedvalue);
        display.innerHTML = displayArray.join(""); 
    } else if (value === "=") {
        const result = operate(displayArray);
        display.innerHTML = result.join(""); 
    } else {
        displayArray.push(value);
        display.innerHTML = displayArray.join(""); 
    }
};

buttons.forEach(button => button.addEventListener('click', press));


//Question - do I need to be using the parse int or can the data- html tag pass integers