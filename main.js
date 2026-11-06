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

// Task 7.2: Arithmetic Operators

const num1 = 20;
const num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Remainder:", num1 % num2);
console.log("Exponent:", num1 ** num2);

// Task 7.3: Functions

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

// Task 7.5: For Loop

// Task 7.5: For Loop

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