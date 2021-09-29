console.log("Hello World")

// first-class functions = idea that functions ca be passed around, returned, etc. just like any other value (strting, int, boolean, etc.)
// JS (JavaScript) has first-class functions. Java, for the most part, does not have first-class functions.
// other languages with first-class functions include Python, Scheme, Haskell, etc.

function make_multiplier(a) {
	function helper(b) {
		return a * b;
	}
	return helper;
}

let mul3 = make_multiplier(3);
console.log(mul3(3)); // should return 9

let mul5 = make_multiplier(5);
console.log(mul5(8)); // should return 40

console.log(make_multiplier(12)(2)); // should return 24