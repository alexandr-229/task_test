//Clone object
/////////////
const obj = { a: 1, b: 2, c: 3 };

// Shallow Copy
const shallowCopySpread = { ...obj };
const shallowCopyAssign = Object.assign({}, obj);

// Deep Clone
const deepCloneJSON = JSON.parse(JSON.stringify(obj));

function deepClone(obj) {
	if (typeof obj !== "object" || obj === null) {
		return obj;
	}
	const clone = Array.isArray(obj) ? [] : {};
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			clone[key] = deepClone(obj[key]);
		}
	}
	return clone;
}

const deepCloneCustom = deepClone(obj);

console.log("Shallow Copy (Spread):", shallowCopySpread);
console.log("Shallow Copy (Object.assign):", shallowCopyAssign);
console.log("Deep Clone (JSON.parse/JSON.stringify):", deepCloneJSON);
console.log("Deep Clone (Custom):", deepCloneCustom);

//Swap places
/////////////

let a = 1;
let b = 2;

// Using a temporary variable
let temp = a;
a = b;
b = temp;

console.log("Swap values (Temp variable):", "a =", a, "b =", b);

// Using destructuring assignment
[a, b] = [b, a];

console.log("Swap values (Destructuring assignment):", "a =", a, "b =", b);

// Using arithmetic operations
a = a + b;
b = a - b;
a = a - b;

console.log("Swap values (Arithmetic operations):", "a =", a, "b =", b);

// Using XOR bitwise operator
a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("Swap values (XOR bitwise operator):", "a =", a, "b =", b);
