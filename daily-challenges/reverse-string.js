// Day 2: Reverse a String

function reverseString(text) {
    return text.split("").reverse().join("");
}

const originalText = "JavaScript";
const reversedText = reverseString(originalText);

console.log("Original string:", originalText);
console.log("Reversed string:", reversedText);