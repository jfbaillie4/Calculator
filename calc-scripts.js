const operators = ["+","-","*","/"]

function operate (inputArray) {
    
    if (inputArray[0] === "-") {
        const negative = inputArray.shift();
        inputArray[0] = negative + inputArray[0];
    } else if (operators.includes(inputArray[0])) {
        inputArray.shift();
    }
    
    for (i=1; i<inputArray.length; i++) {
        if (inputArray[i]==="/") {
            const division = divide(inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1,3,division);
            i--;
        } else if (inputArray[i]==="*") {
            const multiple = multiply(inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1,3,multiple);
            i--;
        };
    };
    //console.log(inputArray)
    for (i=1; i<inputArray.length; i++) {
        //console.log(inputArray);
        if (inputArray[i]==="+") {
            const sum = add(inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1, 3, sum);
            i--;
        } else if (inputArray[i]==="-") {
            const sub = subtract(inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1, 3, sub);
            i--;
        };
        console.log(`Input Array: ${inputArray}`);
    };
    //console.log(inputArray)

    return inputArray;
};

function round(value, decimals) {
    const floor = Math.floor(value);
    const smallfloat = value - floor;
    const smallrounded = Number(Math.round(smallfloat+'e'+decimals)+'e-'+decimals);
    return floor + smallrounded;
  }

function add (x, y) {
    float = parseFloat(x) + parseFloat(y);
    return round(float, 5);
};

function subtract (x, y) {
    float = parseFloat(x) - parseFloat(y);
    return round(float, 5);  
};

function divide (x, y) {
    float = parseFloat(x) / parseFloat(y);
    return round(float, 5)
};

function multiply (x, y) {
    float = parseFloat(x) * parseFloat(y);
    return round(float, 5)
};

// Below is only to enable unit testing

//module.exports = operate;  