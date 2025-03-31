let num: number = 10;

let str: string = "Hello World";

let bool: boolean = true;

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

let arr2: (number | string | boolean)[] = [1, "Hello", true];
let arr3: any[] = [1, "Hello", true];

let tuple: [string, number] = ["hello", 10]
tuple.push(10); // error

let obj: {name: string, age: number, city: string} =
    {
        name: "John",
        age: 30,
        city: "New York"
    };


const print_hello: ()=>void = () => {
    console.log("Hello");
}

const print_number: ()=>number = () => {
    return 10;
}

const return_string_fn: ()=>string = () => {
    return "Hello";
}

const return_boolean_fn: ()=>boolean = () => {
    return true;
}

const return_array_fn: ()=>number[] = () => {
    return [1, 2, 3, 4, 5];
}

const return_tuple_fn: ()=>[string, number] = () => {
    return ["hello", 10];
}

const return_object_fn: ()=>object = () => {
    return {
        name: "John",
        age: 30,
        city: "New York"
    };
}

const function_with_params: (x: number, y: number)=>number = (x,y) => {
    return x + y;
}