//find second largest number from an array


function findSecondLargestNumber(arr) {
    let largestNumber = arr[0], secondLargestNumber = arr[0];
    for (let i = 1; i < arr.length; i++){
        const index = i;
        const element = arr[index];
        // console.log(element);
        if (element > largestNumber) {
            // largestNumber = element;
            secondLargestNumber = largestNumber;
            largestNumber = element;
        } else if (element > secondLargestNumber && element !== largestNumber) {
            secondLargestNumber = element;
        }
    }
    return secondLargestNumber;
}

const numbers = [14, 45, 95, 85, 96, 98, 74, 65, 66, 73, 12, 99];

const result = findSecondLargestNumber(numbers);
console.log(result);