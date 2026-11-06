// Day 3: Find the Largest Number

function findLargest(numbers) {
    return Math.max(...numbers);
}

const scores = [45, 89, 23, 76, 92, 34, 67];

const largest = findLargest(scores);

console.log("Numbers:", scores);
console.log("Largest number:", largest);