const temperatures = [12, 15, 18, 10, 14, 16, 20];
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let tempAvg = 0;
let tempMin = Infinity;
let tempMax = -Infinity;

console.log("Temperatures of the week:");

for (let counter = 0; counter < temperatures.length; counter++) {
    console.log(`${weekDays[counter]} : ${temperatures[counter]}`);
    tempAvg += temperatures[counter];
    if (temperatures[counter] < tempMin) {
        tempMin = temperatures[counter];
    } else if (temperatures[counter] > tempMax) {
        tempMax = temperatures[counter];
    }
}
tempAvg = tempAvg / temperatures.length;
console.log(`Average of the week: ${tempAvg}`);
console.log(`minimum of the week: ${tempMin}`);
console.log(`maximum of the week: ${tempMax}`);