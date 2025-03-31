"use strict";
let num = 10;
let str = "Hello World";
let bool = true;
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [1, "Hello", true];
let arr3 = [1, "Hello", true];
let tuple = ["hello", 10];
tuple.push(10); // error
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};
const print_hello = () => {
    console.log("Hello");
};
const print_number = () => {
    return 10;
};
const return_string_fn = () => {
    return "Hello";
};
const return_boolean_fn = () => {
    return true;
};
const return_array_fn = () => {
    return [1, 2, 3, 4, 5];
};
const return_tuple_fn = () => {
    return ["hello", 10];
};
const return_object_fn = () => {
    return {
        name: "John",
        age: 30,
        city: "New York"
    };
};
const function_with_params = (x, y) => {
    return x + y;
};
