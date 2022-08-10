// check who got gap 5 or a+ from an object

function checkGpa(arrayOfObject) {
    for (let i = 0; i < arrayOfObject.length; i++){
        const element = arrayOfObject[i];
        // console.log(element.name);
        if (element.marks >= 80) {
            console.log(element.name, ' got A+');
        }
    }
}

const NumbersOfMath = [
    {name: 'ayman', marks: 70},
    {name: 'sadman', marks: 80},
    {name: 'sukhon', marks: 70},
    {name: 'chomok', marks: 95}
]

const result = checkGpa(NumbersOfMath);
// console.log(result);