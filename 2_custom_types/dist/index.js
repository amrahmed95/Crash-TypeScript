"use strict";
var _a;
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
let x = 10;
x = "Hello";
const printPersonDetails = (p) => {
    console.log(`Person's name: ${p.name}`);
    console.log(`Person's age: ${p.age}`);
    console.log(`Person's city: ${p.city}`);
    console.log("-------------------");
};
let HondaCivic = {
    make: "Honda",
    model: "Civic",
    year: 2020,
    color: "Red",
    featureOptions: {
        LightType: "LED"
    }
};
let HondaAccord = {
    make: "Honda",
    model: "Accord",
    year: 2021,
    color: "Blue"
};
let MycarYear = (_a = HondaCivic.year) !== null && _a !== void 0 ? _a : 0;
// ----------------------- Enums -----------------------
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["Pending"] = "Pending";
    BookingStatus["Confirmed"] = "Confirmed";
    BookingStatus["Cancelled"] = "Cancelled";
    BookingStatus["Paid"] = "Paid";
})(BookingStatus || (BookingStatus = {}));
let bookingStatus = BookingStatus.Pending;
// Check if bookingStatus is either Confirmed or Paid
if ((bookingStatus = BookingStatus.Confirmed) || (bookingStatus === BookingStatus.Paid)) {
    console.log("Booking confirmed or paid");
}
else {
    console.log("Booking is still pending or cancelled");
}
// ----------------------- Class -----------------------
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}
let myCar = new Car("Toyota", 2020);
class Person {
    printDetails() {
        console.log(`Person's name: ${this.name}`);
        console.log(`Person's age: ${this.age}`);
        console.log(`Person's city: ${this.city}`);
    }
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.printDetails();
    }
}
let myPerson = new Person("John", 30, "New York");
