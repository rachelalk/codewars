// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str) {
	//split string into array of single digits
	let array = str.split("");
	console.log(array);

	//if odd number add _ to end of array
	if (array.length % 2 !== 0) {
		array.push("_");
	}

	console.log(array);

	//iterate through array in increments of 2 pushing to new array

	let pairs = [];

	for (let i = 0; i < array.length; i = i + 2) {
		let properties = [];
		properties.push(array[i], array[i + 1]);
		let letters = properties.join("");
		console.log(letters);
		pairs.push(letters);
		console.log(pairs);
	}

	//return array
	return pairs;
}
