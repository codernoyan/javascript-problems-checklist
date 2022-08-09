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
console.log(primeNumbers);