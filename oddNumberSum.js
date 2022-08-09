// print 59 - nth position odd number and sum of it with count

/* 

1. at first loop through numbers from 59 - n;

*/

function oddNumberSum(number) {
    let count = 0, sum = 0;
    for (let i = 59; i <= number; i++){
        // console.log(i);
        count++;
        sum += i;
    }
    return {
        count,
        sum
    };
}

const result = oddNumberSum(89);
// console.log(result);
const count = result.count;
const sum = result.sum;
console.log('sum is: ', sum, 'count is: ', count);