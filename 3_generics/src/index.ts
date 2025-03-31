function sum<T extends number | string>(a: T, b: T): number | string {
    return (a as any) + (b as any);
}

// Example usage:
const result1 = sum(5, 10); // result1 will be 15
const result2 = sum("Hello, ", "World!"); // result2 will be "Hello, World!"

console.log(result1); // Output: 15
console.log(result2); // Output: "Hello, World!"

// ---------------------------- General Object Types ------------------------------------

const obj: {[key:string]: any} = {
    name: "John",
    age: 30,
}

obj.birthDate = "1999-01-01";   // ok

// ----------------------------

interface IObj {
    [key: string]: any;
}

const obj2: IObj = {
    name: "John",
    age: 30,
    birthDate: "1999-01-01",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}