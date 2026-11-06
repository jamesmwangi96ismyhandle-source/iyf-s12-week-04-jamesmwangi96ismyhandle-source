// Day 5: Palindrome Checker

function isPalindrome(word) {
    const cleanedWord = word.toLowerCase();
    const reversedWord = cleanedWord.split("").reverse().join("");

    return cleanedWord === reversedWord;
}

const word1 = "madam";
const word2 = "hello";
const word3 = "Level";

console.log(`${word1} is a palindrome:`, isPalindrome(word1));
console.log(`${word2} is a palindrome:`, isPalindrome(word2));
console.log(`${word3} is a palindrome:`, isPalindrome(word3));