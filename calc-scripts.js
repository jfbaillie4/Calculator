function operate (inputArray) {
    for (i=0; i<inputArray.length; i++) {
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
    for (i=0; i<inputArray.length; i++) {
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
    };
    //console.log(inputArray)

    return inputArray;
};

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
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

//Turn on for testing:
module.exports = operate;  