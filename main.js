// Task 7.1: Variables and Data Types

const myName = "James Mwangi";
const myAge = 27; // Replace 30 with your actual age
const isStudent = true;
const favoriteColors = ["blue", "black", "white"];
const today = new Date();

// Display the variables
console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("Am I a student?", isStudent);
console.log("My favorite colors:", favoriteColors);
console.log("Today's date:", today);

// Additional Task 7.1: typeof and let vs const

console.log("\n--- Data Types ---");

console.log("My name data type:", typeof myName);
console.log("My age data type:", typeof myAge);
console.log("Student status data type:", typeof isStudent);

// Demonstrating let vs const
let mutableScore = 100;
mutableScore = 150;

const PI = 3.14159;

console.log("Updated score:", mutableScore);
console.log("Value of PI:", PI);

// Task 7.2: Arithmetic Operators
// Additional Task 7.2: String Operations

console.log("\n--- String Operations ---");

const firstName = "James";
const lastName = "Mwangi";

const fullName = firstName + " " + lastName;

console.log("Full name:", fullName);
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("Name length:", fullName.length);
console.log("First name:", firstName);
console.log("Last name:", lastName);

const num1 = 20;
const num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Remainder:", num1 % num2);
console.log("Exponent:", num1 ** num2);

// Task 7.3: Functions
// Additional Task 7.3: Comparison Operators

console.log("\n--- Comparison Operators ---");

const age1 = 27;
const age2 = 22;

console.log("Is age1 greater than age2?", age1 > age2);
console.log("Is age1 less than age2?", age1 < age2);
console.log("Are ages equal?", age1 === age2);
console.log("Are ages different?", age1 !== age2);
console.log("Is age1 greater than or equal to 27?", age1 >= 27);
console.log("Is age2 less than or equal to 22?", age2 <= 22);

function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

const greeting = greet("James");

console.log(greeting);

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Test the functions
console.log("Addition using function expression:", add(10, 5));
console.log("Multiplication using arrow function:", multiply(10, 5));

// Task 7.4: Conditional Statements
// Additional Task 7.4: Logical Operators

console.log("\n--- Logical Operators ---");

const hasID = true;
const isRegistered = false;

console.log("Has ID AND registered:", hasID && isRegistered);
console.log("Has ID OR registered:", hasID || isRegistered);
console.log("NOT has ID:", !hasID);
console.log("NOT registered:", !isRegistered);
const score = 85;

if (score >= 80) {
    console.log("Grade: A");
} else if (score >= 70) {
    console.log("Grade: B");
} else if (score >= 60) {
    console.log("Grade: C");
} else if (score >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// Additional Task 7.6: Switch Statement

console.log("\n--- Switch Statement ---");

const dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}
// Additional Task 7.7: Count from 1 to 100

console.log("\n--- Counting from 1 to 100 ---");

for (let number = 1; number <= 100; number++) {
    console.log(number);
}
// Additional Task 7.8: Even Numbers from 1 to 50

console.log("\n--- Even Numbers from 1 to 50 ---");

for (let number = 1; number <= 50; number++) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
// Additional Task 7.9: Star Triangle Pattern

console.log("\n--- Star Triangle Pattern ---");

for (let i = 1; i <= 5; i++) {
    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}

// Task 7.5: For Loop

// Task 7.5: For Loop
// Additional Task 7.5: Age Calculator

console.log("\n--- Age Calculator ---");

const currentAge = 27;
const yearsToAdd = 5;

const futureAge = currentAge + yearsToAdd;
const birthYear = 2026 - currentAge;

console.log(`My current age is ${currentAge}.`);
console.log(`In ${yearsToAdd} years, I will be ${futureAge}.`);
console.log(`My estimated birth year is ${birthYear}.`);

console.log("Counting from 1 to 5:");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While Loop

let count = 1;

while (count <= 5) {
    console.log("While loop:", count);
    count++;
}

// For...of Loop

const sports = ["Football", "Handball", "Basketball", "Volleyball"];

for (const sport of sports) {
    console.log("My sport:", sport);
}
// Additional Task 8.1: Array Basics

console.log("\n--- Array Basics ---");

const footballTeams = ["Arsenal", "Chelsea", "Manchester United"];

console.log("Football teams:", footballTeams);
console.log("First team:", footballTeams[0]);
console.log("Last team:", footballTeams[footballTeams.length - 1]);
console.log("Number of teams:", footballTeams.length);

// Add a team
footballTeams.push("Liverpool");
console.log("After adding a team:", footballTeams);

// Remove the last team
footballTeams.pop();
console.log("After removing the last team:", footballTeams);

// Additional Task 8.2: More Array Methods

console.log("\n--- More Array Methods ---");

const players = ["James", "Faith", "Kelvin", "Henry"];

// forEach()
console.log("Players:");
players.forEach(player => {
    console.log(player);
});

// includes()
console.log("Does the team include Faith?", players.includes("Faith"));

// indexOf()
console.log("Index of Kelvin:", players.indexOf("Kelvin"));

// slice()
const selectedPlayers = players.slice(1, 3);
console.log("Selected players:", selectedPlayers);

// Task 7.6: Array Methods - map()


const numbers = [2, 4, 6, 8, 10];

const doubledNumbers = numbers.map(number => number * 2);

console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);

// Task 7.6: Array Methods - filter()

const ages = [12, 17, 20, 25, 15, 30];

const adults = ages.filter(age => age >= 18);

console.log("All ages:", ages);
console.log("Adult ages:", adults);

// Task 7.6: Array Methods - reduce()

const prices = [100, 200, 300, 400];

const totalPrice = prices.reduce((total, price) => total + price, 0);

console.log("Prices:", prices);
console.log("Total price:", totalPrice);

// Task 7.6: Array Methods - find()

const students = ["Alice", "Brian", "kelvin", "David"];

const foundStudent = students.find(student => student === "kelvin");

// Additional Task 8.4: Filter and Find Students
const studentsStartingWithA = students.filter(student =>
    student.startsWith("A")
);

console.log("Students starting with A:", studentsStartingWithA);
console.log("Student found:", foundStudent);
console.log("Students:", students);
console.log("Found student:", foundStudent);

// Task 8: Working with Objects

const student = {
    name: "henry kamau",
    age: 27,
    subject: "Agriculture",
    isStudent: true
};

console.log("Student name:", student.name);
console.log("Student age:", student.age);
console.log("Subject:", student.subject);
console.log("Is a student?", student.isStudent);

// Task 8: Arrays of Objects

const classStudents = [
    { name: "Henry", age: 27, subject: "Agriculture" },
    { name: "Faith", age: 22, subject: "Biology" },
    { name: "Kelvin", age: 24, subject: "Mathematics" }
];

console.log("Class students:");

classStudents.forEach(student => {
    console.log(`${student.name} is ${student.age} years old and studies ${student.subject}.`);
});
// Additional Task 8.3: Array Sorting
console.log("\n--- Array Sorting ---");

const scores = [45, 12, 89, 34, 67];

console.log("Original scores:", scores);

const ascendingScores = [...scores].sort((a, b) => a - b);
console.log("Ascending order:", ascendingScores);

const descendingScores = [...scores].sort((a, b) => b - a);
console.log("Descending order:", descendingScores);

// Task 8: Working with JSON

const studentData = {
    name: "Henry",
    age: 27,
    subject: "Agriculture"
};

// Convert JavaScript object into JSON text
const jsonData = JSON.stringify(studentData);

console.log("JSON data:", jsonData);

// Convert JSON text back into a JavaScript object
const convertedStudent = JSON.parse(jsonData);

console.log("Student name:", convertedStudent.name);
console.log("Student subject:", convertedStudent.subject);