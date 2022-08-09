// feet to inch

function feetToInch(feet) {
    if (typeof feet !== 'number') {
        return 'Please input a number';
    }
    const inch = feet * 12;
    return inch;
}

const result = feetToInch(12);
console.log(result);