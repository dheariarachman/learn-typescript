"use strict";
/**
 * Basic Types
 */
let id = 5;
let company = "Dhea Aria Tools";
let isPublished = false;
let x = "Hello World";
/**
 * Array
 */
let ids = [1, 2, 3, 4, 5];
let arr = [1, 23, "123", true];
// Tuple
/**
 * harus sama persis posisi data type nya
 */
let person = [1, "Oke", false];
/**
 * Tuple Array
 */
let employee;
employee = [
    [1, "Name"],
    [2, "Who"],
];
// Union
/**
 * Multiple data types
 */
let pid;
pid = 22;
pid = "22";
/**
 * Enum
 *
 * Like Object
 * jika di console, maka akan terisi object number position nya
 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
console.log(Direction.Up);
/**
 * Enum
 *
 * with value
 * jika di console, maka akan terisi valuenya
 */
var DirectionValue;
(function (DirectionValue) {
    DirectionValue["Up"] = "Up";
    DirectionValue["Right"] = "Right";
    DirectionValue["Down"] = "Down";
    DirectionValue["Left"] = "Left";
})(DirectionValue || (DirectionValue = {}));
console.log(DirectionValue.Up);
const user = {
    id: 1,
    name: "Koerono",
};
/**
 * Type Assertion
 *
 * merubah data type any menjadi type data lain
 */
let cid = 1;
// let customerId = <number>cid; // type one
let customerId = cid; // type two
customerId = "12";
/**
 * Function
 */
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
/**
 * Void
 */
function log(message) {
    console.log(message);
}
log("Hello World");
/**
 * Interfaces
 */
