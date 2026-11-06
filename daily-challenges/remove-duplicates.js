// Day 4: Remove Duplicates from an Array

function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}

const originalNumbers = [2, 4, 6, 4, 8, 2, 10, 6];

const uniqueNumbers = removeDuplicates(originalNumbers);

console.log("Original numbers:", originalNumbers);
console.log("Numbers without duplicates:", uniqueNumbers);