// centimeter to meter

function centimeterToMeter(cm) {
    if (typeof cm !== 'number') {
        return 'Please input a number';
    }
    const meter = cm / 100;
    return meter;
}

const result = centimeterToMeter(30);
console.log(result);