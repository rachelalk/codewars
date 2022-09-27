// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

function findMissingLetter(array) {
	let alphabet = {
		a: 0,
		b: 1,
		c: 2,
		d: 3,
		e: 4,
		f: 5,
		g: 6,
		h: 7,
		i: 8,
		j: 9,
		k: 10,
		l: 11,
		m: 12,
		n: 13,
		o: 14,
		p: 15,
		q: 16,
		r: 17,
		s: 18,
		t: 19,
		u: 20,
		v: 21,
		w: 22,
		x: 23,
		y: 24,
		z: 25,
	};
	let alphabetArray = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	let letter = array[0].toLowerCase();
	let startingIndex = alphabet[letter];

	let missingIndex = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i].toLowerCase() !== alphabetArray[startingIndex]) {
			missingIndex = startingIndex;
			break;
		} else {
			startingIndex++;
		}
	}

	if (array[0] == array[0].toUpperCase()) {
		return alphabetArray[missingIndex].toUpperCase();
	} else {
		return alphabetArray[missingIndex];
	}
}

findMissingLetter(["a", "b", "c", "d", "f"]);