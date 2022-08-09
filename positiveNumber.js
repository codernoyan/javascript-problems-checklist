// print positive numbers from an array and returns a new array

function onlyPositive(arr) {
    const positiveNumber = [];
    for (let i = 0; i < arr.length; i++){
        const index = i;
        const number = arr[index];
        // console.log(number);
        if (number < 0) {
            break;
        }
        // console.log(number);
        positiveNumber.push(number);
    }
    return positiveNumber;
}

const numbers = [45, 85, 94, -98, 74, -85, 36];
const result = onlyPositive(numbers);
console.log(result);