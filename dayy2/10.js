// Immutable vs Mutable
// can't be changed vs can be changed
// isn't changed vs changed

// Pure Functions
// Always return the same thing, with the same input

// Pure
const addTwo = (x) => x + 2;
console.log(addTwo(2)); //4
console.log(addTwo(2)); // 4
console.log(addTwo(2)); //4
console.log(addTwo(4)); // 6

// NOT PURE!!
let multi = 2;
const addThree = (x) => x + multi;
console.log(addThree(2));
multi = 4;
console.log(addThree(2));
multi = 6;
console.log(addThree(2));

// NOT PURE!!
let mult = 2;
const addFour = (x) => {
	mult += 2;
	return x + mult;
};
console.log(addFour(2));
console.log(addFour(2));
console.log(addFour(2));
