// ----------------------- interface -----------------------
interface IPerson {
    name: string;
    age: number;
    city: string;
    printDetails?(): void;
}

let person: IPerson = {
    name: "John",
    age: 30,
    city: "New York"
};

// types (alias)

type customType = string | number;
let x: customType = 10;
x = "Hello";

type PersonType = (person: IPerson) => void;
const printPersonDetails: PersonType = (p) => {
    console.log(`Person's name: ${p.name}`);
    console.log(`Person's age: ${p.age}`);
    console.log(`Person's city: ${p.city}`);
    console.log("-------------------");
}

// ----------------------- Optionals -----------------------
interface IFeatureOptions {
    LightType: string;
}

interface ICar {
    make: string;
    model: string;
    year: number;
}

interface ICarModel extends ICar{
    color?: string;
    featureOptions?: IFeatureOptions;
}

let HondaCivic: ICarModel = {
    make: "Honda",
    model: "Civic",
    year: 2020,
    color: "Red",
    featureOptions: {
        LightType: "LED"
    }
}

let HondaAccord: ICarModel = {
    make: "Honda",
    model: "Accord",
    year: 2021,
    color: "Blue"
}

type myType = number | undefined;
let MycarYear:myType = HondaCivic.year ?? 0;

// ----------------------- Enums -----------------------

enum BookingStatus {
    Pending = "Pending",
    Confirmed = "Confirmed",
    Cancelled = "Cancelled",
    Paid = "Paid"
}

let bookingStatus: BookingStatus = BookingStatus.Pending;

// Check if bookingStatus is either Confirmed or Paid
if ( (bookingStatus = BookingStatus.Confirmed ) || ( bookingStatus === BookingStatus.Paid) ) {
    console.log("Booking confirmed or paid");
} else {
    console.log("Booking is still pending or cancelled");
}

// ----------------------- Class -----------------------

class Car {
    model: string;
    year: number;

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }
}

let myCar = new Car("Toyota", 2020);


class Person implements IPerson {
    name: string;
    age: number;
    city: string;
    printDetails(): void {
        console.log(`Person's name: ${this.name}`);
        console.log(`Person's age: ${this.age}`);
        console.log(`Person's city: ${this.city}`);
    }

    constructor(name: string, age: number, city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.printDetails();
    }
}

let myPerson = new Person("John", 30, "New York");
