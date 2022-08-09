// print the numbers from more than 80 from an array

function printMoreThan80(arr) {
    if (Array.isArray(arr) === false) {
        console.log('Please provide an array');
    }
    for (let i = 0; i < arr.length; i++){
        const index = i;
        const number = arr[index];
        // console.log(number);
        if (number >= 80) {
            console.log(number);
        }
    }
}

const numbers = [41, 85, 74, 86, 96, 99, 88, 65, 94, 47];

const result = printMoreThan80(44);
// console.log(result);