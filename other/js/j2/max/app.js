const nombres = [15, 8, 23, 4, 42, 10];

const max = (numberArray) => {
    let maxi = -Infinity;
    for (number of numberArray) {
        if (maxi < number) {
            maxi = number;
        }
    }
    return maxi;
}

console.log(max(nombres));