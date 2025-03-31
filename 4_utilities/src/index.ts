// Omit<T, K>: Constructs a type by picking all properties from T and then removing K.
// Example: Omit<Person, 'email'> results in a type without the 'email' property.

// Pick<T, K>: Constructs a type by picking a set of properties K from T.
// Example: Pick<Person, 'name' | 'age'> results in a type with only 'name' and 'age' properties.

// Partial<T>: Constructs a type with all properties of T set to optional.
// Example: Partial<Person> allows all properties of Person to be optional.

// Required<T>: Constructs a type with all properties of T set to required.
// Example: Required<Partial<Person>> makes all properties of Partial<Person> required.





// ---------------------------- Omit Utility ----------------------------------------------------

interface IPerson{
    name: string;
    age: number;
    email: string;
}

interface IPersonWithoutEmailOrAge extends Omit<IPerson, 'email'|'age'> {
}

const person_Without_Email_Or_Age: IPersonWithoutEmailOrAge = {
    name: "John",
    //email: "john@example.com",  // error 'email' does not exist in type 'Omit<IPerson, "email" | "age">
}

// ------------------------------ Pick Utility -------------------------------
interface IPersonWithNameOnly extends Pick<IPerson, 'name'> {
}

const person_With_Name_Only: IPersonWithNameOnly = {
    name: "John"
}

// ------------------------------ Partial Utility -------------------------------
interface IPersonWithOptionalProperties extends Partial<IPerson> {
}

const person_With_Optional_Properties: IPersonWithOptionalProperties = {
    name: "John",
    age: 30
}


// ------------------------------ Required Utility -------------------------------
interface ICar{
    model: string;
    year: number;
    color?: string; // optional property
}

interface IcarWithRequiredProperties extends Required<ICar> {
}

const car: ICar = {
    model: "Mustang",
    year: 2020
}

const car_With_Required_Properties: IcarWithRequiredProperties = {
    model: "Mustang",
    year: 2020,
    color: "Red"
}


// ------------------------------ Combinination -------------------------------
interface IEmployee extends Pick<IPerson, 'name'>, Omit<IPerson, 'email'>{}

const employee: IEmployee = {
    name: "John",
    age: 30
}


// ---------------------------------- Utility with types -------------------------------
type Person_without_name = Omit<IPerson, 'name'>

const person_without_name_type: Person_without_name = {
    age: 30,
    email: "john@example.com"
}

type Person_with_name_only = Pick<IPerson, 'name'>

const person_with_name_only_type: Person_with_name_only = {
    name: "John"
}

type person_and_Employee = IPerson & IEmployee

const person_and_employee_type: person_and_Employee = {
    name: "John",
    age: 30,
    email: "john@example.com"
}