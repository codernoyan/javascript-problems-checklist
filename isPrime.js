// print prime number from 1 - n

function isPrime(number) {
    for (let i = 2; i < number; i++){
        // console.log(i);
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const primeNumbers = isPrime(5);
// console.log(primeNumbers);


// prime number range
function primeRange(arr) {
    const primeNumbers = [];
    for (let i = 0; i < arr.length; i++){
        const index = i;
        const element = arr[i];
        // console.log(element);
        // const prime = isPrime(element);
        // primeNumbers.push(prime)
        if (isPrime(element)) {
            primeNumbers.push(element);
        }
    }
    return primeNumbers;
}

const numbers = [77, 30, 5, 2, 74, 41, 43, 47, 11, 15, 56, 86, 72, 81];

const primeRangeNumber = primeRange(numbers);
console.log(primeRangeNumber);