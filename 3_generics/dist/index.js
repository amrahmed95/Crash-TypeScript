"use strict";
function sum(a, b) {
    return a + b;
}
// Example usage:
const result1 = sum(5, 10); // result1 will be 15
const result2 = sum("Hello, ", "World!"); // result2 will be "Hello, World!"
console.log(result1); // Output: 15
console.log(result2); // Output: "Hello, World!"
// ---------------------------- General Object Types ------------------------------------
const obj = {
    name: "John",
    age: 30,
};
obj.birthDate = "1999-01-01"; // ok
const obj2 = {
    name: "John",
    age: 30,
    birthDate: "1999-01-01",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
