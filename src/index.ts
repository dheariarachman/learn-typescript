/**
 * Basic Types
 */
let id: number = 5;
let company: string = "Dhea Aria Tools";
let isPublished: boolean = false;
let x: any = "Hello World";

/**
 * Array
 */
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, 23, "123", true];

// Tuple
/**
 * harus sama persis posisi data type nya
 */
let person: [number, string, boolean] = [1, "Oke", false];

/**
 * Tuple Array
 */
let employee: [number, string][];

employee = [
	[1, "Name"],
	[2, "Who"],
];

// Union
/**
 * Multiple data types
 */
let pid: string | number;
pid = 22;
pid = "22";

/**
 * Enum
 *
 * Like Object
 * jika di console, maka akan terisi object number position nya
 */
enum Direction {
	Up,
	Right,
	Down,
	Left,
}
console.log(Direction.Up);

/**
 * Enum
 *
 * with value
 * jika di console, maka akan terisi valuenya
 */
enum DirectionValue {
	Up = "Up",
	Right = "Right",
	Down = "Down",
	Left = "Left",
}
console.log(DirectionValue.Up);

/**
 * Object
 */
type User = {
	id: number;
	name: string;
};

const user: User = {
	id: 1,
	name: "Koerono",
};

/**
 * Type Assertion
 *
 * merubah data type any menjadi type data lain
 */
let cid: any = 1;
// let customerId = <number>cid; // type one
let customerId = cid as string; // type two

customerId = "12";

/**
 * Function
 */
function addNum(x: number, y: number): number {
	return x + y;
}
console.log(addNum(1, 2));

/**
 * Void
 */
function log(message: number | string | boolean): void {
	console.log(message);
}
log("Hello World");

/**
 * Interfaces
 */
