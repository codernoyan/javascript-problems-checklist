// calculate the average of all the numbers that is divisible by 3 from 1 -n

function average(n) {
    let count = 0, sum = 0;
    for (let i = 1; i <= n; i++){
        // console.log(i);
        if (i % 3 === 0) {
            sum += i;
            count++;
        }
    }
    const average =  sum / count;
    return average;
}

const result = average(30);
console.log(result);