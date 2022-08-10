/* // ascending
function ascendingArray(arr) {
    const ascendingNumber = [];
    for (let i = 1; i < arr.length; i++){
        // console.log(i);
        let element1 = arr[i];
        for (let j = 0; j < i; j++){
            let element2 = arr[j];
            // console.log(element2);
            if (element1 < element2) {
                let temp = element1;
                element1 = element2;
                element2 = temp;
                console.log(element2)
            }
        }
    }
    return ascendingNumber;
}

const numbers = [41, 52, 14, 36, 57, 74, 66, 10, 18, 59, 45];

const result = ascendingArray(numbers);
console.log(result); */


// ascending
const numbers = [41, 52, 14, 36, 57, 74, 66, 10, 18, 59, 45];

for (let i = 1; i < numbers.length; i++){
    for (let j = 0; j < i; j++){
        if (numbers[i] < numbers[j]) {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
// console.log(numbers);

function ascendingNumbers(arr) {
    for (let i = 1; i < arr.length; i++){
        for (let j = 0; j < i; j++){
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const numbersArray = [25, 74, 65, 98, 36, 38, 14, 85, 95, 47];

const result = ascendingNumbers(numbersArray);
console.log(result);