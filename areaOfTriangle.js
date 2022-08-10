// calculate area of a triangle

function areaOfTriangle(a, b, c) {
    const semiPerimeter = (a + b + c) / 2;
    // const area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
    const area = Math.pow(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c), 1 / 2);
    return area;
}

const result = areaOfTriangle(3, 4, 5);
console.log(result);