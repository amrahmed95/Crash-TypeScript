"use strict";
// Omit<T, K>: Constructs a type by picking all properties from T and then removing K.
// Example: Omit<Person, 'email'> results in a type without the 'email' property.
const person_Without_Email_Or_Age = {
    name: "John",
    //email: "john@example.com",  // error 'email' does not exist in type 'Omit<IPerson, "email" | "age">
};
const person_With_Name_Only = {
    name: "John"
};
const person_With_Optional_Properties = {
    name: "John",
    age: 30
};
const car = {
    model: "Mustang",
    year: 2020
};
const car_With_Required_Properties = {
    model: "Mustang",
    year: 2020,
    color: "Red"
};
const employee = {
    name: "John",
    age: 30
};
const person_without_name_type = {
    age: 30,
    email: "john@example.com"
};
const person_with_name_only_type = {
    name: "John"
};
const person_and_employee_type = {
    name: "John",
    age: 30,
    email: "john@example.com"
};
