function runCalc (currentArray, key) {
    const lastvalue = currentArray[currentArray.length-1];
    const floats = ["1","2","3","4","5","6","7","8","9","0","."];
    const valids = ["Backspace", "=", "Enter", "c","(",")","+","-","*","/"]

    if (isNaN(parseFloat(lastvalue)) === false && floats.includes(key)) {
        const combinedvalue = lastvalue + key;
        currentArray.splice(currentArray.length-1, 1, combinedvalue);
        return currentArray
    }  else if (key === "Enter") {
        return operateBrackets(currentArray)
    } else if (key === "Backspace") {
        lastvalstring = lastvalue.toString()
        lastvalstring.length > 1 ? currentArray[currentArray.length-1] = lastvalstring.slice(0, -1) : currentArray.pop();
        return currentArray
    } else if (key==="c") {
        let result = {};
        return result
    } else if (valids.includes(key) || floats.includes(key)) {
        currentArray.push(key)
        return currentArray;
    } else {
        return currentArray;
    }
};

function operateBrackets (inputArray) {
    if (inputArray.indexOf("(") == -1) {
        return operateSimple(inputArray);  
    } else {
        for (i=0; i<inputArray.length; i++) {
            if (inputArray[i] === ")") {
                const endpoint = i;
                for (a=endpoint; a>=0 ; a--) {
                    if (inputArray[a] === "(") {
                        const startpoint = a;
                        const length = endpoint-startpoint+1
                        const subArray = inputArray.slice(startpoint+1, endpoint);
                        const arrayl1 = operateSimple(subArray);
                        inputArray.splice(startpoint, length, arrayl1[0]);
                        i=startpoint;
                        break
                    }
                }
            }
        }
    return operateSimple(inputArray);
    }   
};

function operateSimple (inputArray) {
    const operators = ["+","-","*","/"]

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
    for (i=1; i<inputArray.length; i++) {
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

    return inputArray;
};

function round(value, decimals) {
    const floor = Math.floor(value);
    const smallfloat = value - floor;
    const smallrounded = Number(Math.round(smallfloat+'e'+decimals)+'e-'+decimals);
    return floor + smallrounded;
};

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

//Below is only to enable unit testing
module.exports = runCalc;  