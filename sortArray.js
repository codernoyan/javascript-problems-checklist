
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