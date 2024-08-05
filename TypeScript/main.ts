// NOTE: Make an example about the below things:
// symbol type
// funktors

// SECTION - START
class UserAccount {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

interface User {
    id: number;
    name: string;
}

const user: User = {
    id: 0,
    name: "Hayes",
};

const userAccount: User = new UserAccount(0, "John");

// Generics
type StringArr = Array<string>;
type NumberArr = Array<number>;
type ObjectWithNameArr = Array<{ name: string }>;

// The `any` Statement
let num_1: any = "5";

// Structural Type System
interface Coordinates {
    x: number;
    y: number;
}

function logCoordinates(coordinates: Coordinates) {
    console.log("x: ", coordinates.x, "y: ", coordinates.y);
}

let coordinates = {
    x: 0,
    y: 0,
}

let coordinates_1 = {
    x: 0,
    y: 0,
    z: 0,
}

console.log("\n# Structural Type System");
logCoordinates(coordinates);
logCoordinates(coordinates_1);

// Function Type
let add: (num_1: number, num_2: number) => number = (num_1, num_2) => num_1 + num_2;
let strConcat: <T, U>(str_1: T, str_2: U) => T = (str_1, str_2) => str_1;

// Union Types
let weight: "kg" | "lbs" | number | string | string[] | 1;

// Discriminated Union
type Animal = { type: "lion", sound: "roar" } | { type: "bird", mouthType: "beak" }

function printAnimal(animal: Animal) {
    if (animal.type === "lion") {
        console.log(animal.sound)
    } else if (animal.type === "bird") {
        console.log(animal.mouthType);
    }
}

console.log("\n# Discriminated Union");
printAnimal({ type: "lion", sound: "roar" });
printAnimal({ type: "bird", mouthType: "beak" });

// Intersections
interface A { a: string; };
interface B { b:string; };
type C = A & B;

// Unit Type
function employee(name: string, age: number, gender: "man" | "woman") {
    console.log("Name: ", name, "Age: ", age, "Gender: ", gender);
}

// If you would use just `gender = "man"` it would throw error.
let gender: "man" | "woman" = "man";

console.log("\n# Unit Type");
employee("Josh", 30, gender);
// SECTION - END